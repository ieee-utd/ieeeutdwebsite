import Head from 'next/head';
import styles from '@/styles/Robotics.module.css';
import { useState } from 'react';
import Image from 'next/image';
import aboutImage from '@/assets/robotics_team_comp_2024.jpg';
import UpcomingEvents from '@/components/UpcomingEvents';
// import Link from 'next/link';
import Robotics_background from '@/assets/Robotics_background.jpg';
import Competition_robot from '@/assets/competition_robot.png';
import Robotics_team from '@/assets/robotics_team.jpg';
import Event from '@/components/Event';

// Dummy data array
const dummyEvents = [
	{
		id: 1,
		eventName: 'Robotics Workshop',
		date: 'June 10, 2024',
		time: '10:00 AM',
		location: 'Main Auditorium'
	},
	{
		id: 2,
		eventName: 'AI Conference',
		date: 'June 24, 2024',
		time: '09:00 AM',
		location: 'Conference Center'
	},
	{
		id: 3,
		eventName: 'PCB Synthesis Conference',
		date: 'August 29, 2024',
		time: '11:00 AM',
		location: 'TI Auditorium Center'
	}
	// More dummy events...
];

export default function Robotics(props) {
	const [events, setEvents] = useState(props.events || []);

	return (
		<>
			{/* Include the Head component to add the Poppins font */}
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<div className={styles.mainContainer}>
				<div className={styles.title_card_container}>
					<Image
						src={Robotics_background}
						alt="Background for robotics society"
						layout="fill"
						objectFit="cover"
					/>
					<div className={styles.overlay}>
						<h1 className={styles.overlay__title}>Robotics</h1>
					</div>
				</div>

				<div className={styles.main}>
					<h1 className={styles.sectionTitle}>IEEE Robotics Society</h1>

					<p className={styles.descriptionText}>
						The IEEE Robotics Society at UTD is an energetic student-led club bringing together
						students from various disciplines who share a love for robotics and automation. We offer
						engaging workshops, hands-on projects, and lively competitions, allowing members to
						explore the fascinating world of robotics. Participants develop skills in mechanical
						design, programming, electronics, and artificial intelligence.
					</p>

					<div className={styles.aboutImageContainer}>
						<Image src={aboutImage} alt="Robotics competition team 2024" layout="responsive" />
					</div>
				</div>

				<div className={styles.upcomingEventsContainer}>
					<h1 className={styles.upcomingEventsTitle}>Upcoming Events</h1>
					<div className={styles.upcomingCardsContainer}>
						{dummyEvents.map((event) => (
							<Event
								key={event.id}
								eventName={event.eventName}
								date={event.date}
								time={event.time}
								location={event.location}
							/>
						))}
					</div>
				</div>

				{/* Competition Feature Section */}
				<div className={styles.competitionFeature}>
					<h2 className={styles.competitionTitle}>
						2024 IEEE Region 5 Student Robotics Competition
					</h2>
					<p className={styles.competitionDescription}>
						Gear up for excitement! We&apos;re diving into the IEEE Region 5 Student Robotics Competition
						on April 6, 2024. Our mission? Conquer the unmanned ground vehicle challenge. Picture a
						robot skillfully navigating obstacles, pressing buttons without a hitch, and then
						cruising a set path powered solely by a super capacitor. Get ready to witness innovation
						in action!
					</p>
					{/* Images for the competition */}
					<div className={styles.competitionImages}>
						<div className={styles.competitionImageWrapper}>
							<Image
								src={Competition_robot}
								alt="Competition robot"
								layout="fill"
								objectFit="cover"
							/>
						</div>
						<div className={styles.competitionImageWrapper}>
							<Image src={Robotics_team} alt="Robotics team" layout="fill" objectFit="cover" />
						</div>
					</div>

					<p className={styles.competitionFooter}>
						Boost your resume with hands-on tech experience! Joining this competition means honing
						teamwork skills and a shot at the Circuit Design competition. Successful completion of
						Fundamentals Labs I and II could put you in the spotlight. Elevate your skills and seize
						this opportunity!
					</p>
				</div>
			</div>
		</>
	);
}
