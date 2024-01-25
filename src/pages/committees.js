import Executives from '@/components/Executives';
import EventsCommittee from '@/components/EventsCommittee';
import TechCommittee from '@/components/TechCommittee';
import Tutoring from '@/components/Tutoring';
import Pes from '@/components/Pes'
import Developers from '@/components/Developers';
import styles from '@/styles/Committees.module.css';
import Image from 'next/image';
import Officers from '@/assets/IEEE/Officers.png';


export default function Committees() {
	return (
		<div>
			<div className={styles.group__container}>
				<div className={styles.overlay}>
					<div className={styles.overlay__title}>COMMITTEES</div>
				</div>
				<Image className={styles.group__img} src={Officers} alt="ieee-officer-group" />
			</div>
			<div className={styles.mainContainer}></div>
			<div>
				<div className={styles.title}>Executives</div>
				<Executives />
				<div className={styles.title}>Events Committee</div>
				<div className={styles.description}>
					Plan and market upcoming events, moderate the social media accounts, and network with
					companies
				</div>
				<EventsCommittee />
				<div className={styles.title}>Tech Committee</div>
				<div className={styles.description}>
					Organize and run the IEEE Microcontroller and Soldering workshops
				</div>
				<TechCommittee />
				<div className={styles.title}>Tutoring Committee</div>
				<div className={styles.description}>
					Student-led tutoring for many engineering courses in person and online
				</div>
				<Tutoring />
				<div className={styles.title}>Forge</div>
				<div className={styles.description}>
					Engineer projects for solutions to real-world problems faced by the UT Dallas community,
					designed, built, tested, and used by UTD students, faculty and staff
				</div>
				<Pes/>
				<div className={styles.title}>Web Developers</div>
				<div className={styles.description}>Developed the website</div>
				<Developers />
			</div>
		</div>
	);
}
