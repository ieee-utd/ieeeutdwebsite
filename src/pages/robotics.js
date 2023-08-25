import styles from '@/styles/Robotics.module.css'
import Image from 'next/image'
import titleCard from '@/assets/voice_controlled_two.jpeg'
export default function Robotics() {




    return (
        <div className={styles.mainContainer}>
            <div className={styles.title_card_container}>
				<div className={styles.overlay}>
					<pre className={styles.overlay__title}>
							ROBOTICS & AUTOMATION {"\n"}
							   SOCIETY
					</pre>
				</div>
			<Image src={titleCard} alt="robotics title" className={styles.robotics__image}/>
			</div>
            <div className="tw-text-4xl tw-p-12">
                IEEE RAS at UTDallas is a vibrant student-run Robotics Club that unites students
                across disciplines with a shared passion for robotics and automation. Through immersive
                workshops, hands-on projects, and spirited competitions, club members delve into the
                captivating realm of robotics, gaining expertise in mechanical design, programming, electronics,
                and artificial intelligence.
            </div>
        </div>
    )
}