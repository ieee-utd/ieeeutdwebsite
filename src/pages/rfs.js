import styles from '@/styles/RF.module.css'
import titleCard from '@/assets/titlerobotics.jpg'
import Image from 'next/image'

export default function RFS() {


    return (
        <div className={styles.mainContainer}>
            <div className={styles.title_card_container}>
				<div className={styles.overlay}>
					<pre className={styles.overlay__title}>
							RADIO FREQUENCY SOCIETY
					</pre>
				</div>
			<Image src={titleCard} alt="robotics title" className={styles.robotics__image} />
			</div>
            <h1>RADIO FREQUENCY SOCIETY</h1>
            <h3>COMBINED JOINT OF MICROWAVE THEORY & ANTENNAS & PROPAGATION SOCIETIES</h3>
            <p>Radio Frequency related projects & academia for students to build experience
            and knowledge</p>
            <h1>PROJECTS</h1>
            <h1>EVENTS</h1>
            <h1>JOIN US NOW</h1>
        </div>
    )
}