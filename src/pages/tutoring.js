import Head from 'next/head';
import styles from '../styles/Tutoring.module.css';
// import FullCalendar from "@fullcalendar/react";
import dynamic from 'next/dynamic';
import timeGridPlugin from '@fullcalendar/timegrid';
import scrollGridPlugin from '@fullcalendar/scrollgrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import Image from 'next/image';
import discordImage from 'public/discord.png';
import youtubeImage from 'public/youtube.png';
import utdMap from 'public/utdmap.png';
import escnMap from 'public/escnmap.png';
import banner from 'public/tutoring_banner.jpg';
import labtools from 'public/labtools.jpg';
import TutoringCalendar from '@/components/TutoringCalendar';
import React from 'react';
import Courses from '@/components/Courses';

export default function Tutoring() {

	return (
		<>
			<Head></Head>
			<main className='tw-bg-[#EEEEEE]'>
				<div className={styles['header-container']}>
					<div className={styles.overlay}>
						<h1 className={styles.title}>TUTORING</h1>
					</div>
					<Image
						priority={true}
						placeholder={'blur'}
						className="tw-object-cover tw-brightness-50"
						src={banner}
						alt="Tutoring Banner"
					/>
				</div>
				<div className={styles['section-two-container']}>
					<div className={styles['section-two-title']}>
						The <span>IEEE</span> Room
					</div>
					<div className="tw-flex tw-flex-1 tw-flex-row tw-flex-wrap tw-justify-center tw-min-w-[30%] tw-w-full">
						<Image className={styles.imagemap} src={utdMap} />
						<Image className={styles.imagemap} src={escnMap} />
					</div>
					<p className='tw-font-[Poppins]'
						style={{
					    	paddingLeft: '10%',
							paddingRight: '10%',
							width: '100%',
							fontSize: '150%',
							color: 'black',
						}}
					>
						The tutoring room is located at ECSN 2.318. We are the room in the main lobby with IEEE
						signs and a big window. The entrance is in the hallway on the other side of the tutoring
						room.
					</p>
				</div>
                    <Courses />
					<TutoringCalendar />
				<div className={styles['section-four-container']}>
					<h2>Resources</h2>
					<h3 className="tw-pl-[5%] tw-text-white tw-text-[250%] tw-underline tw-decoration-2 ">Lab Tools</h3>
					<div className="tw-flex tw-flex-col tw-justify-center tw-content-center">
						<div className="tw-pl-[5%] tw-text-white tw-text-[120%] tw-w-[95%] tw-py-4 tw-pr-2">
							<p>
								Our tutoring room is equipped with a variety of electrical engineering tools to help
								students learn and master the subject. 
							</p>
							<br />
							<p className="tw-mt-[2%]">
								Here are some of the tools available in the
								room: Oscilloscopes, Campus computers, Power supplies, Multimeters
							</p>
							< br />
							<div className="tw-mt-[2%]">
							    In addition to the above tools, our tutoring room is also equipped with a variety of other general purpose
								electrical engineering tools, such as: function generators, signal generators, and
								logic analyzers. 
							</div>
			
							
						</div>
						<Image
							className="tw-relative tw-left-[30%] tw-w-[60%] tw-max-w-[600px] tw-content-center tw-justify-center"
							src={labtools}
						></Image>
					</div>

					<p></p>
					<h3 className="tw-pt-3 tw-pl-[5%] tw-text-white tw-text-4xl tw-underline tw-decoration-2">
						Discord Server
					</h3>
					<p className="tw-pl-[5%] tw-text-white tw-text-[120%] tw-w-[80%] tw-py-4 tw-pr-4">
						Our Discord server is a convenient way
						for students to get the support they need, whether they&apos;re working on a problem set
						or studying for an exam.
					</p>
					<a
						rel="noreferrer"
						target="_blank"
						className="tw-pl-[5%] tw-w-fit"
						href="https://discord.com/invite/23Fn3CVPZB"
					>
						<Image className="tw-pl-[5%] tw-m-0 tw-w-[50%] tw-max-w-[500px] " src={discordImage} />
					</a>
					<h3 className="tw-pt-3 tw-pl-[5%] tw-text-white tw-text-4xl tw-underline tw-decoration-2">
						Exam Review Sessions
					</h3>
					<p className="tw-pl-[5%] tw-text-white tw-text-[120%] tw-w-[80%] tw-py-4 tw-pr-4">
						Our tuoring program also offers exam review sessions uploaded to our YouTube channel.
					</p>
					<a
						rel="noreferrer"
						target="_blank"
						className="tw-pl-[5%] tw-w-fit"
						href="https://www.youtube.com/@ieeeutdallas1989"
					>
						<Image className="tw-pl-[5%] tw-m-0 tw-w-[50%] tw-max-w-[200px] " src={youtubeImage} />
					</a>
				</div>
			</main>
		</>
	);
}
