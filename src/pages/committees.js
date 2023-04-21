import Executives from '@/components/Executives';
import EventsCommittee from '@/components/EventsCommittee';
import TechCommittee from '@/components/TechCommittee';
import Tutoring from '@/components/Tutoring';
import Forge from '@/components/Forge';
import Developers from '@/components/Developers';
import styles from '@/styles/Committees.module.css';
import { useRef, useEffect } from 'react';

export default function Committees() {
	const committeesRef = useRef([]);

	useEffect(() => {
		const committees = committeesRef.current;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					``;
					if (entry.isIntersecting) {
						entry.target.remove();
					}
				});
			},
			{ threshold: 0.5 } // change this threshold value based on your preference
		);

		committees.forEach((committee) => {
			observer.observe(committee);
		});

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<div>
			<div className={styles.title}>Executives</div>
			<Executives ref={(el) => committeesRef.current.push(el)} />
			<div className={styles.title}>Events Committee</div>
			<div className={styles.description}>
				Plan and market upcoming events, moderate the social media accounts, and network with
				companies
			</div>
			<EventsCommittee ref={(el) => committeesRef.current.push(el)} />
			<div className={styles.title}>Tech Committee</div>
			<div className={styles.description}>
				Organize and run the IEEE Microcontroller and Soldering workshops
			</div>
			<TechCommittee ref={(el) => committeesRef.current.push(el)} />
			<div className={styles.title}>Tutoring Committee</div>
			<div className={styles.description}>
				Student-led tutoring for many engineering courses in person and online
			</div>
			<Tutoring ref={(el) => committeesRef.current.push(el)} />
			<div className={styles.title}>Forge</div>
			<div className={styles.description}>
				Engineer projects for solutions to real-world problems faced by the UT Dallas community,
				designed, built, tested, and used by UTD students, faculty and staff
			</div>
			<Forge ref={(el) => committeesRef.current.push(el)} />
			<div className={styles.title}>Web Developers</div>
			<div className={styles.description}>Developed the website</div>
			<Developers ref={(el) => committeesRef.current.push(el)} />
		</div>
	);
}
