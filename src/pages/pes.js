
import styles from '@/styles/Pes.module.css'
import Image from 'next/image'
import PESLogo from '@/assets/IEEEPESblacknwhite.gif'
import { SiMicrosoftoutlook } from 'react-icons/si';
import { useEffect, useState } from 'react'
import Link from 'next/link'
const ical = require('ical')
const _ = require('lodash')
import UpcomingEvents from '@/components/UpcomingEvents';


export default function Pes(props) {
	const [events, setEvents] = useState(props.events)
	const officers = [
		{ 	
			id: 1,
			name: "Manuel De Jesus Contreras",
			email: "manuel.dejesuscontreras@utdallas.edu",
			image: require("../assets/IEEE/placeholder.jpeg")

		},
		{ 
			id: 2,
			name: "Muhammad Zaid",
			email: "muhammad.zaid@utdallas.edu",
			image: require("../assets/IEEE/placeholder.jpeg")
	 
		}
	]

	return (
		<div className={styles.mainContainer}>
			<div className="tw-h-[45vh] tw-flex tw-justify-center tw-p-6 tw-mr-[25%]">
				<div className="">
					<Image src={PESLogo} alt="logo for pes" width={250} height={250} />
					<h1 className="tw-text-[2.6rem] tw-border-b-4 tw-border-b-ieeeorange tw-w-fit">Power & Energy Society</h1>
				</div>
			</div>
			<div className="tw-bg-ieeeblue tw-flex tw-flex-row tw-p-6">
					<div>
						<h1 className="tw-text-white tw-mt-6 tw-underline-offset-[10px] tw-underline 
						tw-text-center tw-text-4xl">Upcoming Events</h1> 
						<br />
						<div className="tw-text-3xl tw-text-white">PES have alot of events coming up so keep an eye out!</div>
					</div>
					<div className="tw-w-[65%]">
						<UpcomingEvents events={events}/>
					</div>
			</div>
			<div className={styles.projects}>
				<h1>Projects</h1>
				<p className="tw-text-white tw-text-3xl tw-underline-offset-[10px] tw-underline">BLDC Motor Project</p>
				<br />
				<p className="tw-text-white tw-text-2xl  ">
				This project seeks to improve electric vehicle (EV) performance by designing and optimizing trapezoidal-controlled Brushless DC (BLDC) motors to replace traditional motors. 
				The project aims to enhance EV driving range, torque output, and acceleration by leveraging the advantages of BLDC motors. Through advanced motor design software, finite element analysis (FEA), and comprehensive testing, 
				the project aims to demonstrate how trapezoidal-controlled BLDC motors can significantly enhance EV efficiency and viability, 
				contributing to the advancement of sustainable transportation solutions.
				</p> 
				<br />
				<Link href="https://docs.google.com/forms/d/1sI528OgMre64usChAFhn_Y0Q9M1_mexbzVfSvCktM1Y/edit?pli=1" 
				className="tw-decoration-none tw-self-center tw-text-white tw-text-3xl tw-underline-offset-[10px] tw-underline">Apply here</Link>
			</div>
			<div className="tw-bg-white">
				<h1 className="tw-mt-6 tw-text-center tw-text-4xl">Officers</h1>
				<div className="tw-flex tw-justify-evenly">
				{
					officers.map(officer => {
						return (
						<div key={officer.id}>
							<Image src={officer.image} alt="placeholder image" width={320} height={320}/>
							<div className="tw-mt-5 tw-flex tw-justify-center">
								<div>
									<h1 className="tw-text-[135%]">{officer.name}</h1>
									<div className="tw-mt-4 tw-flex tw-justify-center ">
									<a href={`mailto:${officer.email}`}>
										<SiMicrosoftoutlook className="tw-transition tw-ease-in-out tw-delay-150 tw-text-3xl tw-cursor-pointer hover:tw-fill-blue" />
									</a>
								</div>
							</div>
							</div>
						</div>
						)
					})
				}
				</div>
			</div>
				
		</div>
	);
}
// fetch calendar events on request

export const getServerSideProps = async () => {

	const iCalUrl = 'https://calendar.google.com/calendar/ical/84ee6f7804dd316e4c7044b93ca75255848479763d1305cf69496262abd54a45%40group.calendar.google.com/public/basic.ics'
	
	const response = await fetch(iCalUrl)

	const data = await response.text()
	const events = _.values(ical.parseICS(data)).map((event) => {
		return {
			id: event.uid,
			eventName: event.summary,
			date: event.start.toDateString(),
			time: event.start.toLocaleTimeString("en", { timeStyle: "short"})
		}
	})
	// console.log(data)
	return { props: { events }}
}

