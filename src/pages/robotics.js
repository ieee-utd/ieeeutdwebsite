import styles from '@/styles/Robotics.module.css'
import Image from 'next/image'
import aboutImage from '@/assets/titlerobotics.jpg'
import titleCard from '@/assets/titlerobotics.jpg'
import robotics from '@/assets/robotics.jpg'
import micromouse from '@/assets/maze.jpg'

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
			<Image src={titleCard} alt="robotics title" className={styles.robotics__image} />
			</div>
            <div className="tw-p-12 tw-flex tw-justify-center tw-text-[1.6rem]">
                <div className="tw-w-[75%] tw-text-center">
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
                <div className="tw-flex tw-justify-center">
                    <h1 className="tw-w-fit tw-text-[2rem] tw-border-b-4 tw-border-black">IEEE Robotics Regional</h1>
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
                <br />
                <div className="tw-flex tw-justify-center">
                    <h1 className="tw-w-fit tw-text-[2rem] tw-border-b-4 tw-border-black">IEEE Robotics Micromouse</h1>
                <br />
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
                 <h2 className="tw-w-fit tw-text-[1.8rem] tw-border-b-4 tw-border-b-black">What is it?</h2>
                </div>
                <br />
                 <p>Micromouse is not just a game; it's a thrilling fusion of technology, strategy, and innovation. 
                 Imagine designing a tiny autonomous robot that navigates a maze, swiftly conquering twists, turns, and dead-ends to reach the hidden treasure at its core. 
                 It's a high-speed chess match between engineering prowess and labyrinth challenges.</p>
                <br />
                <div className="tw-flex tw-justify-center">
                <h2 className="tw-w-fit tw-text-[1.8rem] tw-border-b-4 tw-border-b-black">Why Participate?</h2>
                </div>
                <br />
                <ul className="tw-list-disc">
                <li>Showcase your skills in robotics, programming, and systems integration. Craft a masterpiece of precision and efficiency, demonstrating your ability to translate theory into tangible marvels.</li>
                <li>Experiment, iterate, and push the boundaries of technology. This is your chance to embrace the future of robotics, AI, and automation. Be the driving force behind groundbreaking advancements.</li>
                <li>Collaborate with like-minded peers, sharing insights and brainstorming solutions. Develop essential team dynamics that mirror real-world project environments.</li>
                <li>Impress industry experts and potential employers with your dedication and talent. Companies seeking innovation-driven individuals will have their eyes on you!</li>
                <li>Face off against other brilliant minds in a pulse-pounding battle of wits and code. Engage in friendly rivalry and let your intellect shine on the competitive stage.</li>
                </ul>
                <br />
                <p>Register now to embark on this electrifying journey of innovation, competition, and discovery. The maze awaits your genius!</p>
                </div>
            </div>
        </div>
    )
}