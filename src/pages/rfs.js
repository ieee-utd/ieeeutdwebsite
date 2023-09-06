import styles from '@/styles/RF.module.css'
import rfsIcon from '@/assets/rfs-icon.png'
import { useState } from 'react' 
import UpcomingEvents from '@/components/UpcomingEvents'
import Image from 'next/image'
import Link from 'next/link'
const ical = require('ical')
const _ = require('lodash')

export default function RFS(props) {

    const [events, setEvents] = useState(props.events)

    return (
        <div className={styles.mainContainer}>
            <div className="tw-h-[50vh] tw-flex tw-flex-row tw-items-center tw-justify-center">
            <Image src={rfsIcon} alt="rfs logo" width={250} height={250}/>
                <div>
                    <h1 className="tw-text-6xl tw-drop-shadow-roboto tw-mb-[1rem]">Radio Frequency Society</h1>
                    <h3 className="tw-text-black tw-border-b-2 tw-w-fit tw-border-b-ieeeorange"
                    >COMBINED JOINT OF MICROWAVE THEORY & ANTENNAS & PROPAGATION SOCIETIES</h3>
                </div>
            </div>
            <div className="tw-bg-ieeeorange tw-p-8">
            <h1 className="tw-text-white tw-text-center tw-underline-offset-[10px] 
            tw-underline tw-text-4xl tw-mt-12 tw-drop-shadow-roboto">What We Offer</h1>
            <br />
            <p className="tw-text-2xl tw-text-center tw-text-white tw-w-fit">Radio Frequency related projects & academia for students to build experience
            and knowledge</p>
            <div className="tw-text-white tw-mt-12">
            <br/>
            <br/>
            <h1 className="tw-w-fit tw-m-auto tw-underline-offset-[10px] 
            tw-underline tw-text-4xl tw-drop-shadow-roboto">Projects</h1>
            <br />
            <br/>
            <div className="tw-bg-white tw-rounded-3xl tw-text-black tw-p-8">
                <h1 className="tw-text-3xl tw-text-center tw-drop-shadow-roboto">2.4 GHz Automotive Radar System Application</h1>
                <h3 className="tw-text-2xl tw-m-auto tw-w-fit tw-border-b-ieeeorange tw-border-b-4">General Description</h3>
                <br />
                <p className="tw-text-[1.1rem]">This project seeks to enhance automotive surround view camera systems by developing a radio frequency based radar system to replace the current optical camera system. 
                This will help with visibility in harsher weather conditions and increase the accuracy of the results. The focus will be on developing a frontal radar system to act as a proximity sensor. 
                This project involves designing a patch microstrip antenna and using it with an IC to create a polar graph that will be used to identify objects within the frontal proximity of the vehicle. 
                This radar system will be tested in real world simulations of the vehicle using  real world scenarios. 
                The goal of this project is to pioneer new automotive safety technology that can be further developed to completely replace optical surround view camera systems in vehicles. </p>
                <br />
                <div className="tw-drop-shadow-roboto tw-w-fit tw-m-auto tw-text-4xl tw-border-b-4 tw-border-b-ieeeorange">
                <Link href="https://docs.google.com/forms/d/1sI528OgMre64usChAFhn_Y0Q9M1_mexbzVfSvCktM1Y/edit?pli=1" 
                >Apply here</Link>
                </div>
            </div>
            </div>
            <br/>
            <br/>
            <div className=" tw-flex tw-flex-row tw-mt-12">
                <div >
                    <h1 className="tw-text-white tw-mt-6 tw-underline-offset-[10px] tw-underline 
                                tw-text-4xl tw-drop-shadow-roboto" >Upcoming Events</h1>
                                                <br />
                    <div className="tw-text-3xl tw-text-white">RFS have alot of events coming up so keep an eye out!</div>
                </div>
                <div className="tw-w-[65%] ">
                    <UpcomingEvents events={events}/>
                </div>
            </div>
            <br/>
            <br/>
            <h1 className="tw-mt-12 tw-text-white tw-text-6xl tw-text-center tw-underline-offset-[10px] tw-underline 
            tw-drop-shadow-roboto">JOIN US NOW</h1>
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {

	const iCalUrl = 'https://calendar.google.com/calendar/ical/2b983347d360e55a28ae1b08822080013f7d5302f0323535c7edd32347875cee%40group.calendar.google.com/public/basic.ics'
	
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



