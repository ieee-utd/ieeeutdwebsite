import styles from '@/styles/Tutoring.module.css'
import dynamic from 'next/dynamic';
import timeGridPlugin from '@fullcalendar/timegrid';
import scrollGridPlugin from '@fullcalendar/scrollgrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import React, { useEffect, useState } from 'react';
import { TUTORING_COLORS } from '@/contants/colors';

const FullCalendar = dynamic(() => import('@fullcalendar/react'), {
	ssr: false
});


export default function TutoringCalendar() {

    const [renderCalendar, setRenderCalendar] = useState(false);
	const calendarComponentRef = React.createRef();
	useEffect(() => {
		setRenderCalendar(true);
	}, []);

	const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
	const calendarId = process.env.NEXT_PUBLIC_TUTORING_CALENDAR_ID;
	let eventIndex = 0;
	const colors = [TUTORING_COLORS.eventColorOne, TUTORING_COLORS.eventColorTwo,
        TUTORING_COLORS.eventColorThree, TUTORING_COLORS.eventColorFour,
        TUTORING_COLORS.eventColorFive ]; //temp colors
	    const handleEventDidMount = (eventInfo) => {
            const eventId = eventInfo.event.id; // Assuming you have a unique identifier for each event
            console.log(eventInfo.event.id)
            const eventColor = colors[parseInt(eventId) % colors.length]; // Use the unique identifier for color determination
            console.log(eventId % colors.length)
            eventInfo.el.style.backgroundColor = eventColor;
            eventInfo.el.style.borderColor = eventColor;
        };
    


    return(
            <div className="tw-flex tw-flex-col tw-bg-ieeeorange tw-pb-[4rem]">
             <p className={styles['tutoring-hours-title']}>Tutoring hours</p>
            <div className={styles["calendar-container"]}>
            <FullCalendar
                schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
                plugins={[timeGridPlugin, googleCalendarPlugin, scrollGridPlugin]}
                googleCalendarApiKey={apiKey}
                events={{ googleCalendarId: calendarId }}
                eventDidMount={handleEventDidMount} // set colors for events
                initialDate={'2024-01-01'} //START DATE FOR THE WEEK
                slotDuration="00:15:00"
                slotMinTime="10:00"
                slotMaxTime="17:30"
                dayHeaderFormat={{ weekday:'long'}}
                slotEventOverlap={false}
                height={'44rem'}
                weekends={false}
                allDaySlot={false}
                contentHeight="auto"
                dayMinWidth={215}
                stickyFooterScrollbar={true}
                eventContent={(eventInfo) => {
                    return (
                
                            <div className={styles.calendarEvent}>
                                <div className={styles.calendarText}>{eventInfo.timeText}</div>
                                <div className={styles.calendarText}>{eventInfo.event.title}</div>
                            </div>
                
                    );
                }}
                headerToolbar={{
                    left: '',
                    center: '',
                    right: ''
                }}
                eventClick={function (event) {
                    // Prevent redirect to Google Calendar
                    event.jsEvent.preventDefault();
                }}
            />
            </div>
            </div>)
    }