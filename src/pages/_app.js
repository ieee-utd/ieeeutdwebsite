import '@/styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
	const size = useWindowSize();

	return (
		<>
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
