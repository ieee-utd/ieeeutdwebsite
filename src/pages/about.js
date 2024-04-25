import Executives from '@/components/Executives';
import EventsCommittee from '@/components/EventsCommittee';
import TechCommittee from '@/components/TechCommittee';
import Tutoring from '@/components/Tutoring';
import Pes from '@/components/Pes'
import Developers from '@/components/Developers';
//import styles from '@/styles/Committees.module.css';
//import styles from '../styles/Tutoring.module.css';
import styles from "../styles/About.module.css"
import Image from 'next/image';
import  Officers from '@/assets/aboutus.jpg';
import ColumnText from '@/components/ColumnText';

export default function About() {
	return (
		<div>
		<div>
			<div className={styles.group__container}>
				<div className={styles.overlay}>
					<div className={styles.overlay__title}>ABOUT US</div>
				</div>
				<Image className={styles.group__img} src={Officers} alt="aboutus" />
			</div>
		</div>
		<div className={styles['section-one-container']}>
			<div className={styles.subtitle}>We are the Institute of Electrical and Electronics Engineers at UT Dallas.</div>
			<div className={styles.description}>
			We are a global community of professionals and innovators at the forefront of technological advancements. 
			We are currently offering tons of workshops, tutoring, and societies that you can join today.
				</div>
		</div>
		<div className={styles["callToActionSection"]}>
		<ColumnText title="Tutoring" 
		paragraph="At lEEE, our tutoring services offer personalized support for students and professionals in electrical engineering and related fields. 
		Our experienced tutors are dedicated to helping you navigate complex subjects and achieve your academic and professional goals." 
		linkText="Tutoring Schedule"
		link = "/tutoring"
		/>
		<ColumnText title="Workshops" 
		paragraph="Dive into the latest tech trends, learn from industry leaders, and get hands-on experience. 
		Whether you're a pro or a newbie, our sessions blend theory with practical skills to fuel your innovation journey." 
		linkText="Attend a Workshop"
		link = "/events"
		/>


		<ColumnText title="Societies" 
		paragraph="IEEE's societies are vibrant communities dedicated to specific tech fields-robotics,
		telecommunications, and more. Join us for networking, knowledge exchange, and innovation." 


		/>
		</div>
		</div>
	);
}
