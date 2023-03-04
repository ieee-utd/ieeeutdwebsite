import styles from '@/styles/Navigation.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import logo from '../assets/ieeeutdlogo.png';
import HamburgerMenu from './HamburgerMenu';

export default function Navbar() {
	const router = useRouter();
	React.useEffect(() => {
		console.log(router.pathname);
	}, []);
	return (
		<header className={styles.navbar}>
			<div className={styles.first__container}>
				<Link href={'/'} className={styles.title__logo}>
					<Image className={styles.logo} src={logo} alt="IEEELOGO" />

					<div className={styles.navbar__title}>IEEE UTD</div>
				</Link>
			</div>

			<div className="tw-group tw-hidden tw-gap-6 tw-pb-5 tw-mt-6 md:tw-flex tw-mr-10">
				<Link
					href={'/'}
					className={`tw-transition tw-ease-in-out tw-delay-150 tw-text-white tw-cursor-pointer tw-text-2xl group-hover:tw-text-fadedblue ${
						router.pathname == '/' ? 'tw-text-ieeeorangedim  ' : ''
					}`}
				>
					<p className={styles.navbar__hover__underline}>Home</p>
				</Link>
				<Link
					className={`tw-transition tw-ease-in-out tw-delay-150 tw-text-white tw-cursor-pointer tw-text-2xl group-hover:tw-text-fadedblue ${
						router.pathname == '/events' ? 'tw-text-ieeeorangedim ' : ''
					}`}
					href={'/events'}
				>
					<p className={styles.navbar__hover__underline}>Events</p>
				</Link>
				<Link
					className={`tw-transition tw-ease-in-out tw-delay-150 tw-text-white tw-cursor-pointer tw-text-2xl group-hover:tw-text-fadedblue ${
						router.pathname == '/tutoring' ? 'tw-text-ieeeorangedim' : ''
					}`}
					href={'/tutoring'}
				>
					<p className={styles.navbar__hover__underline}>Tutoring</p>
				</Link>
				<Link
					className={`tw-transition tw-ease-in-out tw-delay-150 tw-text-white tw-cursor-pointer tw-text-2xl group-hover:tw-text-fadedblue ${
						router.pathname == '/committees' ? 'tw-text-ieeeorangedim ' : ''
					}`}
					href={'/committees'}
				>
					<p className={styles.navbar__hover__underline}>Committees</p>
				</Link>
				<Link
					className={`tw-transition tw-ease-in-out tw-delay-150 tw-text-white tw-cursor-pointer tw-text-2xl group-hover:tw-text-fadedblue ${
						router.pathname == '/forge' ? 'tw-text-ieeeorangedim' : ''
					}`}
					href={'/forge'}
				>
					<p className={styles.navbar__hover__underline}>Forge</p>
				</Link>
			</div>
			<div className={styles.hamburger_container}>
				<HamburgerMenu />
			</div>
		</header>
	);
}
