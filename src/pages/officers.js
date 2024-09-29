import EventsCommittee from '@/components/EventsCommittee';
import styles from '@/styles/Committees.module.css';
import Image from 'next/image';
import Officers from '@/assets/IEEE/Officers.jpeg';
import officerData from '@/components/committeeMembers';
import Member from '@/components/Member';
import React from 'react';

function FadeInSection(props) {
	const [isVisible, setVisible] = React.useState(false);
	const domRef = React.useRef();
	React.useEffect(() => {
	  const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => entry.isIntersecting && setVisible(true));	
	  });
	  observer.observe(domRef.current);
	  return () => observer.unobserve(domRef.current);
	}, []);
	return (
	  <div
		className={`${styles['fade-in-section']} ${isVisible ? styles['is-visible'] : ''}`}
		ref={domRef}>
		{props.children}
	  </div>
	);
}



export default function Committees() {
	let mappedMembers = officerData.map((member) => {
		return (
			<FadeInSection key={member.name}>
				<Member
					name={member.name}
					title={member.title}
					image={member.image}
					linkedin={member.linkedin}
					email={member.email}
					key={member.name}
				/>
			</FadeInSection>
		);
	});
	return (
	<>
		<div className={styles.group__container}>
			<div className="tw-absolute tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-[100vw] tw-h-full">
				<div className="tw-justify-center tw-text-white tw-text-[5rem] tw-font-bold tw-z-10 bg-gra">
					<h1 className='tw-text-center tw-text-[6vw]'>2023-2024</h1>
					<h1 className='tw-text-[6vw]'>IEEE Officers</h1>
				</div>
			</div>
			<Image className={styles.group__img} src={Officers} alt="ieee-officer-group" /> 
		</div>
		<div className='tw-grid tw-grid-cols-3 tw-p-16 tw-around'>
			{mappedMembers}
		</div>
	</>
	)



	// return (
	// 	<div>

	// 		<div className={styles.mainContainer}></div>
	// 		<div>
	// 			<div className={styles.title}>Executives</div>
	// 			<Executives />
	// 			<div className={styles.title}>Events Committee</div>
	// 			<div className={styles.description}>
	// 				Plan and market upcoming events, moderate the social media accounts, and network with
	// 				companies
	// 			</div>
	// 			<EventsCommittee />
	// 			<div className={styles.title}>Tech Committee</div>
	// 			<div className={styles.description}>
	// 				Organize and run the IEEE Microcontroller and Soldering workshops
	// 			</div>
	// 			<TechCommittee />
	// 			<div className={styles.title}>Tutoring Committee</div>
	// 			<div className={styles.description}>
	// 				Student-led tutoring for many engineering courses in person and online
	// 			</div>
	// 			<Tutoring />
	// 			<div className={styles.title}>Forge</div>
	// 			<div className={styles.description}>
	// 				Engineer projects for solutions to real-world problems faced by the UT Dallas community,
	// 				designed, built, tested, and used by UTD students, faculty and staff
	// 			</div>
	// 			<Pes/>
	// 			<div className={styles.title}>Web Developers</div>
	// 			<div className={styles.description}>Developed the website</div>
	// 			<Developers />
	// 		</div>
	// 	</div>
	// );
}

