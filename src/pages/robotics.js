import styles from '@/styles/Robotics.module.css'
import { useState } from 'react'
import Image from 'next/image'
import aboutImage from '@/assets/titlerobotics.jpg'
import roboticsLogo from '@/assets/roboticslogo.png'
import robotics from '@/assets/robotics.jpg'
import micromouse from '@/assets/maze.jpg'
import UpcomingEvents from '@/components/UpcomingEvents'
import Link from 'next/link'
const ical = require('ical')
const _ = require('lodash')

export default function Robotics(props) {

    const [events, setEvents] = useState(props.events)


    return (
        <div className={styles.mainContainer}>
            <div className="tw-h-[50vh]">
            <div className="tw-flex tw-justify-center tw-mt-6">
                <Image  src={roboticsLogo} alt="logo for robotics society" width={250} height={250}/>
            </div>    
                <div>
                    <h1 className="tw-text-5xl tw-text-center 
                    tw-drop-shadow-roboto tw-mt-8">Robotics and Automation <br /> Society</h1>
                </div>
            </div>
            <div className="tw-p-6 tw-bg-ieeeblue tw-flex tw-justify-center">
                <div className="tw-text-center tw-mt-12">
                    <div className=" tw-text-white tw-text-[1.6rem]">
                        <div className="tw-flex tw-justify-center">
                        <h1 className="tw-w-fit tw-text-[2rem] tw-border-b-4 tw-border-black">IEEE Robotics Society</h1>
                        </div>
                        <br />
                        <p >IEEE RAS at UTD is a vibrant student-run Robotics Club that unites students
                        across disciplines with a shared passion for robotics and automation. 
                        Through immersive
                        workshops, hands-on projects, and spirited competitions, club members delve into the
                        captivating realm of robotics, gaining expertise in mechanical design, programming, electronics,
                        and artificial intelligence.
                        </p>
                        <br />
                        <div className="tw-flex tw-justify-center">
                        <Image src={aboutImage} alt="title card" className={styles.about_image}/>
                        </div>
                        <br />
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
                <h1 className="tw-mt-12 tw-text-white tw-text-4xl tw-mb-12 tw-underline-offset-[10px] tw-underline tw-decoration-black">Projects</h1>
                <div className="tw-bg-white tw-m-auto tw-text-black tw-rounded-[8%] tw-p-[8%] tw-w-[85%] tw-overflow-y-hidden tw-text-[1.3rem] tw-mb-10">
                    <div className="tw-flex tw-justify-center">
                        <h1 className="tw-w-fit tw-text-[2.5rem] tw-border-b-4 tw-border-b-ieeeorange tw-drop-shadow-roboto">IEEE Robotics Regional</h1>
                    </div>
                    <br />
                    <p>Take part in our robotics regional! Each year we receive a new problem to solve by IEEE. 
                    The competition is based on autonomous robots solving problems. In previous years we built a dual robot system that included 
                    a groundbot and a drone designed to navigate a field of cardboard boxes and QR codes. Single aquatic or groundbot based competitions were held as well. 
                    </p>
                    <br />
                    <div className="tw-flex tw-justify-center">
                    <Image src={robotics} alt="robotics image" className={styles.regional_image}/>
                    </div>
                    <br />
                    <p>
                    Competitions are in new locations each year, so you could earn the chance to join the competition team for a free trip. 
                    If any of this interests you look up previous competitions online and consider joining the team.
                    </p>
                    <br/>
                    <div className="tw-drop-shadow-roboto tw-w-fit tw-m-auto tw-text-4xl tw-border-b-4 tw-border-b-ieeeorange">
                        <Link href="https://docs.google.com/forms/d/1sI528OgMre64usChAFhn_Y0Q9M1_mexbzVfSvCktM1Y/edit?pli=1" 
                        >Apply here</Link>
                    </div>
                    </div>
                    <br />
                <div className="tw-bg-white tw-m-auto tw-text-black tw-rounded-[8%] tw-p-[8%] tw-w-[85%] tw-overflow-y-hidden tw-text-[1.3rem]">
                    <div className="tw-flex tw-justify-center">
                        <h1 className="tw-w-fit tw-text-[2.5rem] tw-border-b-4 tw-border-b-ieeeorange tw-drop-shadow-roboto">IEEE Robotics Micromouse</h1>
                    </div>
                    <br />
                    <div className="tw-flex tw-justify-center">
                        <pre className="tw-overflow-visible">🧀🏁</pre>
                        <p>  Unleash Your Inner Engineer at the Collegiate Micromouse Competition!</p>
                        <pre className="tw-overflow-visible">🏁🧀</pre>
                    </div>
                    <div className="tw-flex tw-justify-center">
                        <p>Are you a passionate problem-solver, a creative thinker, and a future tech leader? 
                        Look no further! The Collegiate Micromouse Competition awaits you.</p>
                    </div>
                    <br />
                    <div className="tw-flex tw-justify-center">
                        <Image src={micromouse} alt="micromouse maze" width={600} height={600}/>
                    </div>
                    <br />
                    <div className="tw-flex tw-justify-center">
                        <h2 className="tw-w-fit tw-text-[1.8rem] tw-border-b-4 tw-border-b-ieeeorange tw-drop-shadow-roboto">What is it?</h2>
                    </div>
                    <br />
                    <p>Micromouse is not just a game; it&apos;s a thrilling fusion of technology, strategy, and innovation. 
                    Imagine designing a tiny autonomous robot that navigates a maze, swiftly conquering twists, turns, and dead-ends to reach the hidden treasure at its core. 
                    It&apos;s a high-speed chess match between engineering prowess and labyrinth challenges.</p>
                    <br />
                        <div className="tw-flex tw-justify-center">
                        <h2 className="tw-w-fit tw-text-[1.8rem] tw-border-b-4 tw-border-b-ieeeorange tw-drop-shadow-roboto">Why Participate?</h2>
                        </div>
                    <br />
                    <ul className="tw-list-disc tw-text-left">
                        <li className="tw-mb-2">Showcase your skills in robotics, programming, and systems integration.</li>
                        <li className="tw-mb-2">Experiment, iterate, and push the boundaries of technology.</li>
                        <li className="tw-mb-2">Collaborate with like-minded peers, sharing insights and brainstorming solutions. Develop essential team dynamics that mirror real-world project environments.</li>
                        <li className="tw-mb-2">Impress industry experts and potential employers with your dedication and talent. Companies seeking innovation-driven individuals will have their eyes on you!</li>
                        <li className="tw-mb-2">Face off against other brilliant minds in a pulse-pounding battle of wits and code.</li>
                    </ul>
                    <br />
                    <div className="tw-drop-shadow-roboto tw-w-fit tw-m-auto tw-text-4xl tw-border-b-4 tw-border-b-ieeeorange">
                        <Link href="https://docs.google.com/forms/d/1sI528OgMre64usChAFhn_Y0Q9M1_mexbzVfSvCktM1Y/edit?pli=1" 
                        >Apply here</Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
    
}

export const getServerSideProps = async () => {

	const iCalUrl = 'https://calendar.google.com/calendar/ical/be604ad985fb0a7457f068405e89062ae1418e3d371df2b9c2de6db647ab1146%40group.calendar.google.com/public/basic.ics'
	
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
	return { props: { events: events.length ? events : [] }}
}

