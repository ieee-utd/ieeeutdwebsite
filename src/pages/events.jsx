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

	return (
		<>
			<div className="tw-p-6 mx-auto tw-gap-7 tw-flex tw-flex-col tw-items-center">
				<div className="tw-text-center tw-text-5xl tw-underline tw-font-bold m-6">Events</div>

				<div className="tw-my-12 tw-font-semibold tw-text-2xl tw-max-w-lg">
					Over the course of the school year, we provide{' '}
					<span className="tw-text-[#CF165F]">workshops</span>,{' '}
					<span className="tw-text-[#3277D5]">general</span> , and social events.
				</div>
				<div className="tw-w-full lg:tw-w-2/3">
					<FullCalendar
						plugins={[dayGridPlugin, listPlugin, googleCalendarPlugin]}
						ref={calendarRef}
						headerToolbar={{
							right: 'listMonth,dayGridMonth,prev,next'
						}}
						googleCalendarApiKey="AIzaSyAfPLw0W2oEPGS_GaXsJhCpaZw0zTXAxOI"
						selectable={false}
						initialView={'listMonth'}
						windowResize={function (view) {
							if (window.innerWidth >= 768) {
								calendarRef.current.getApi().changeView('dayGridMonth');
							} else {
								calendarRef.current.getApi().changeView('listMonth');
							}
						}}
						eventSources={[
							{
								googleCalendarId: 'e9nb18a17qf698h72g2tr4ecao@group.calendar.google.com',
								color: '#3277D5'
							},
							{
								googleCalendarId: 'kren4e2ph3dccrj4og6v780rsc@group.calendar.google.com',
								color: '#CF165F'
							}
						]}
					/>
				</div>
			</div>
		</>
	);
};

export default EventsPage;
