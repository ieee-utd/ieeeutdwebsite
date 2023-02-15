import Head from "next/head";
import styles from "../styles/Tutoring.module.css";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { tutoringSchedule } from "../components/tutoringschedule.js";

export default function Tutoring() {
  return (
    <>
      <Head></Head>
      {/* header */}
      <main>
        {/* <p>This is the Tutoring page</p> */}
        <div>
          <p className={styles.title}>Tutoring</p>
          <p className={styles["course-list-title"]}>We tutor these courses:</p>
          <p className={styles["course-list"]}>CE/EE 1202, CE/EE 2310, CE/EE 3320, CE/EE 3301, CE/EE 3302, CE/EE 4301, CS 1325</p>
          <p className={styles["tutoring-hours-title"]}>Tutoring hours</p>
          <div className={styles["calendar-container"]}>
            <div className={styles["calendar-container"]}>
              <FullCalendar className={styles.calendar}
                plugins={[timeGridPlugin]}  
                initialView='timeGridWeek'
                validRange = {{
                  start: '2022-02-06',
                  end: '2023-02-5'
                }}
                initialDate={'2023-02-06'}
                
                slotDuration="00:15:00"
                slotMinTime="10:00"
                slotMaxTime="16:30"
                height={'48rem'}
                weekends={false}
                // dayHeaderFormat={{weekday: 'long'}}
                allDaySlot={false}
                events={tutoringSchedule}
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
