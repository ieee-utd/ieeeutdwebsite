import styles from '@/styles/Forge.module.css';
import Image from 'next/image';
import titleCard from 'src/assets/forge_image.jpeg'
import bit from 'src/assets/8bit-cpu.jpeg'
import schematic from 'src/assets/cpu-schematic.png'
import motion from 'src/assets/motion_tracking.png'
import motion_two from 'src/assets/motion_tracking_two.png'
import digital_poster from 'src/assets/digital_poster_two.jpeg'
import digital_frame from 'src/assets/digital_frame.png'
import voice_one from 'src/assets/voice_one.jpeg'
import voice_two from 'src/assets/voice_controlled_two.jpeg'
export default function Forge() {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.title_card_container}>
				<div className={styles.overlay}>
					<div className={styles.overlay__title}>
					FORGE
					</div>
				</div>
			<Image src={titleCard} alt="guy soldering" className={styles.forge__image}/>
			
			</div>
			<div className={styles.main}>
				<h1>What is Forge?</h1>
				<p>
					Forge is a project-based committee that aims to engineer solutions to real-world problems
					faced by the UT Dallas community. These projects are designed, built, tested, and used by
					UTD students, faculty and staff.
				</p>
			</div>
			<div className={styles.projects}>
				<h1>Projects</h1>
				<div className={styles.title_description}>
					<p>Forge currently offers the following projects</p>
				</div>
				<div className={styles.spacer}>
					<ul>
						<li>
							<a href='#8bit'><h1>8-Bit Processor</h1></a>
							
						</li>
						<li>
							<a href='#motion'><h1>Motion-Tracking Camera</h1></a>

						</li>
						<li>
							<a href='#poster'><h1>Dynamic Poster</h1></a>

						</li>
						<li>
							<a href='#voice'><h1>Voice-Controlled Car</h1></a>
						</li>
					</ul>
					
				</div>
				
			</div>
				<div className={styles.forge__section}>
					<h1 id="8bit">8-bit Processor</h1>

					<p>Build an 8-Bit CPU with a team that will incorporate control, memory, a data-path, an ALU, and some form of interface. As a group, you will be 
						tasked to make the design and implement their own instruction set.</p>
						<div className={styles.forge__section__col}>
							<div className={styles.section__image}>
							<Image src={schematic} alt="8-bit cpu schematic" />
							</div>
							<div className={styles.section__image__two}>
								<Image src={bit} alt="8-bit cpu"/>
							</div>
						</div>
				</div>
				<div className={styles.forge__section__alt}>
					<h1 id="motion" >Motion Tracking Camera</h1>
					<p>
					Create a camera that follows the motion of an object (i.e. a face). The project is mostly focused on the sofware aspect of computer vision, but hardware is incorporated through 
					the use of servos and a micro-controller to have the camera follow an object.
					</p>
					<div className={styles.forge__section__col}>
							<div className={styles.section__image}>
							<Image src={motion} alt="motion camera" />
							</div>
							<div className={styles.section__image__two}>
								<Image src={motion_two} alt="motion camera two"/>
							</div>
						</div>
				</div>
				<div className={styles.forge__section}>
					<h1 id="poster">Dynamic Poster</h1>
					<p>Design and develop a dynamic picture frame using a micro-controller
						 that is able to display animated photos and videos.</p>
						 <div className={styles.forge__section__col}>
							<div className={styles.section__image}>
							<Image src={digital_poster} alt="digital poster" />
							</div>
							<div className={styles.section__image__two}>
								<Image src={digital_frame} alt="digital poster circuit"/>
							</div>
						</div>
				</div>
				<div className={styles.forge__section__alt}>
					<h1 id="voice">Voice-Controlled Car</h1>
					<p>
					Build a voice controlled car that is able to listen and react to the input from the user by 
					developing and deploying machine learning models Micro-controllers.
					</p>
					<div className={styles.forge__section__col}>
							<div className={styles.section__image}>
							<Image src={voice_one} alt="voice controlled car" />
							</div>
							<div className={styles.section__image__two}>
								<Image src={voice_two} alt="another voice controlled car"/>
							</div>
					</div>
				</div>
		</div>
	);
}
