import React from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import useWindowDimensions from '../hooks/useWindowDimensions';
import dynamic from 'next/dynamic';

const EventsPage = () => {
	const [events, setEvents] = React.useState();
	const calendarRef = React.createRef();
	const { width, height } = useWindowDimensions();
	React.useEffect(() => {
		width > 768 ? 'listPlugin' : 'dayGridPlugin';
	}, [width]);
	React.useEffect(() => {
		// declare the data fetching function
		const fetchData = async () => {
			const response = await fetch('/api/google/redirect');
			if (response.ok) {
				const result = await response.json();
				console.log(result);
				setEvents(result.message.sort((a, b) => a.start.dateTime - b.start.dateTime));
			}
		};

		// call the function
		fetchData()
			// make sure to catch any error
			.catch(console.error);
	}, []);

	return (
		<>
			{
				<FullCalendar
					plugins={[dayGridPlugin, listPlugin, googleCalendarPlugin]}
					ref={calendarRef}
					googleCalendarApiKey="AIzaSyAfPLw0W2oEPGS_GaXsJhCpaZw0zTXAxOI"
					initialView={width < 768 ? 'listMonth' : 'dayGridMonth'}
					windowResize={function (view) {
						if (window.innerWidth >= 768) {
							calendarRef.current.getApi().changeView('dayGridMonth');
						} else {
							calendarRef.current.getApi().changeView('listMonth');
						}
					}}
					events={{
						googleCalendarId: 'e9nb18a17qf698h72g2tr4ecao@group.calendar.google.com'
					}}
				/>
			}
		</>
	);
};

export default EventsPage;
