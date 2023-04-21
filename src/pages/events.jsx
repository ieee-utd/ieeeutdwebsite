import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import useWindowDimensions from '../hooks/useWindowDimensions';

const EventsPage = ({ pageDimensions }) => {
	
	const calendarRef = React.createRef();
	const [listView, setListView] = useState(false)

	useEffect(() => {

		setListView(pageDimensions.width < 768 ? true : false)

	}, [pageDimensions.width])


	return (
		<>
			<div className="tw-p-6 mx-auto tw-gap-7 tw-flex tw-flex-col tw-items-center">
				<div className="tw-text-center tw-text-5xl tw-underline tw-font-bold m-6">Events</div>

				<div className="tw-my-12 tw-font-semibold tw-text-2xl tw-max-w-lg">
					Over the course of the school year, we provide{' '}
					<span className="tw-text-[#568203]">workshops</span>,{' '}
					<span className="tw-text-[#3277D5]">general</span> , and social events.
				</div>
				<div className="tw-w-full lg:tw-w-2/3">
					<FullCalendar
						plugins={[dayGridPlugin, listPlugin, googleCalendarPlugin]}
						ref={calendarRef}
						headerToolbar={{
							right: 'listMonth,' + (listView == false ? 'dayGridMonth,' 
							:  '') + ',prev,next'
						}}
						googleCalendarApiKey="AIzaSyAfPLw0W2oEPGS_GaXsJhCpaZw0zTXAxOI"
						selectable={false}
						initialView={'dayGridMonth'}
						windowResize={() => {
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
							},
							{

								googleCalendarId: 'r68kjt9b8vt1jh3sk9ak197gdk@group.calendar.google.com',
								color: '#568203'
							}, 
							{

								googleCalendarId: 'ieeeutd@gmail.com',
								color: '#2C6A9B'

							}
						]}
						eventClick= {(event) => {
							// Prevent redirect to Google Calendar
							event.jsEvent.preventDefault();
						}
						}
					
					/>
				</div>
			</div>
		</>
	);
};

export default EventsPage;
