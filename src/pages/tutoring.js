import Head from "next/head";
import styles from "../styles/Tutoring.module.css";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import googleCalendarPlugin from '@fullcalendar/google-calendar';

export default function Tutoring() {
  const apiKey = process.env.GOOGLE_API_KEY;
  const calendarId = process.env.TUTORING_CALENDAR_ID;
  return (
    <>
      <Head></Head>
      <main>
        <div>
          <p className={styles.title}>Tutoring</p>
          <p className={styles["course-list-title"]}>We tutor these courses:</p>
          <p className={styles["course-list"]}>CE/EE 1202, CE/EE 2310, CE/EE 3320, CE/EE 3301, CE/EE 3302, CE/EE 4301, CS 1325</p>
          <p className={styles["tutoring-hours-title"]}>Tutoring hours</p>
          <div className={styles["calendar-container"]}>
            <div className={styles["calendar-container"]}>
              <FullCalendar className={styles.calendar}
                plugins={[timeGridPlugin, googleCalendarPlugin]}  
                googleCalendarApiKey={apiKey}
                events={{googleCalendarId: calendarId}}
                initialDate={'2023-02-06'}
                slotDuration="00:15:00"
                slotMinTime="10:00"
                slotMaxTime="16:30"
                height={'48rem'}
                weekends={false}
                allDaySlot={false}
                headerToolbar={{
                  left: '',
                  center: '',
                  right: '',
                }}
                />
              </div>
          </div>
        </div>
      </main>
    </>
  );
}
