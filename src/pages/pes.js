
import styles from '@/styles/Pes.module.css';
import Image from 'next/image';
import titleCard from 'src/assets/forge_image.jpeg'
import { SiMicrosoftoutlook } from 'react-icons/si';
import UpcomingEvents from '@/components/UpcomingEvents';


export default function Pes(props) {
	// const [events, setEvents] = useState(props.events)
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
			<div className={styles.title_card_container}>
				<div className={styles.overlay}>
					<pre className={styles.overlay__title}>
							POWER & ENERGY {"\n"}
							   SOCIETY
					</pre>
				</div>
			<Image src={titleCard} alt="guy soldering" className={styles.forge__image}/>
			</div>
			<div className="tw-bg-ieeeblue tw-flex tw-flex-row tw-p-6">
					<div>
						{props.data}
						<h1 className="tw-text-white tw-mt-6 tw-underline-offset-[10px] tw-underline 
						tw-text-center tw-text-4xl">Upcoming Events</h1> 
						<br />
						<div className="tw-text-3xl tw-text-white">PES have alot of events coming up so keep an eye out!</div>
					</div>
					<div className="tw-w-[65%]">
						{/* <UpcomingEvents/> */}
					</div>
			</div>
			<div className={styles.projects}>
				<h1>Projects</h1>
				<div className={styles.title_description}>
					<p>PES currently offers the following projects</p>
				</div>
				<div className={styles.spacer}>
					<ul>
						<li>
							<a href='#8bit'><h1>8-Bit Processor</h1></a>
							
						</li>
						<li>
							<a href='#motion'><h1>Motion-Tracking Camera</h1></a>

						</li>
						<li>
							<a href='#poster'><h1>Dynamic Poster</h1></a>

						</li>
						<li>
							<a href='#voice'><h1>Voice-Controlled Car</h1></a>
						</li>
					</ul>	
				</div>
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

	// console.log(data)
	return { props: { data }}
}

