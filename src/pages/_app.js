import '@/styles/globals.css';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
	const size = useWindowSize();

	return (
		<>
			<Head>
				<title>IEEE at UT Dallas - The Student Branch of IEEE at UTD</title>
				<meta name="description" content="This is the website of the UTD branch of IEEE" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/fullcalendar@5.11.3/main.min.css"
				/>
			</Head>
			<Navbar />
			<Component {...pageProps} pageDimensions={size} />
			<Footer />
		</>
	);
}

function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined
	});

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight
			});
		}

		// add an event listener

		window.addEventListener('resize', handleResize);

		// return event listener on cleanup

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowSize;
}
