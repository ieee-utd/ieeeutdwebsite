import React, { useEffect, useState } from 'react';
import styles from '@/styles/Events.module.css'
// import FullCalendar from '@fullcalendar/react'; // must go before plugins

import dynamic from 'next/dynamic';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import scrollGridPlugin from '@fullcalendar/scrollgrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';


const FullCalendar = dynamic(() => import('@fullcalendar/react'), {
	ssr: false
});

const EventsPage = ({ pageDimensions }) => {
	
	const calendarRef = React.createRef();
	const [listView, setListView] = useState(false)

	useEffect(() => {

		setListView(pageDimensions.width < 768 ? true : false)

	}, [pageDimensions.width])

	const viewOptions = {

		timeGrid: {
			dayMaxEvents: 1  // adjust to 6 only for timeGridWeek/timeGridDay
		}
	
	}
	const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;


	return (
		<>
			<div className="tw-p-6 mx-auto tw-gap-7 tw-flex tw-flex-col tw-items-center">
				<div className="tw-text-center tw-text-5xl tw-underline tw-font-bold m-6">Events</div>

				<div className="tw-my-12 tw-font-semibold tw-text-2xl tw-max-w-lg">
					Over the course of the school year, we provide{' '}
					<span className="tw-text-[#C85B12]">workshops</span>,{' '}
					<span className="tw-text-[#2C6A9B]">general</span> , and social events.
				</div>
				<div className=" tw-self-center tw-w-full lg:tw-w-3/4">
					<FullCalendar

						
						plugins={[dayGridPlugin, listPlugin, googleCalendarPlugin, scrollGridPlugin]}
						ref={calendarRef}
						schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
						headerToolbar={{
							right: 'listMonth,' + (listView == false ? 'dayGridMonth,' 
							:  '') + ',prev,next'
						}}
						stickyFooterScrollbar={true}
						googleCalendarApiKey={apiKey}
						selectable={false}
						dayMaxEventRows={true}
						views={viewOptions}
						height={"44rem"}
						initialView={'dayGridMonth'}
						windowResize={() => {
							if(calendarRef){
								if (window.innerWidth >= 768) {
									calendarRef.current.getApi().changeView('dayGridMonth');
								} else {
									calendarRef.current.getApi().changeView('listMonth');
								}
							}
						}}
						eventSources={[
							{
								googleCalendarId: 'e9nb18a17qf698h72g2tr4ecao@group.calendar.google.com',
								color: '#2C6A9B'
							},
							{
								googleCalendarId: 'kren4e2ph3dccrj4og6v780rsc@group.calendar.google.com',
								color: '#CF165F'
							},
							{

								googleCalendarId: 'r68kjt9b8vt1jh3sk9ak197gdk@group.calendar.google.com',
								color: '#C85B12'
							}, 
							{

								googleCalendarId: 'ieeeutd@gmail.com',
								color: '#2C6A9B'

							}
						]}
						eventDisplay='block'
						eventClick = {(event) => {
							// Prevent redirect to Google Calendar
							event.jsEvent.preventDefault();
						}}

						eventContent={(eventInfo) => {
							return (
							  <div>
								<div className={styles.calendar}>
									<div>{eventInfo.timeText}</div>
									<div className={styles.calendar__text}>{eventInfo.event.title}</div>
								</div>
							  </div>
							)
						  }
					
						}
					/>
				</div>
			</div>
		</>
	);
};



export default EventsPage;
