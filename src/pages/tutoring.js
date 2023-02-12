import Head from "next/head";
import styles from "../styles/Tutoring.module.css";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

const events = [
  {
    title: 'Ben - 3320',
    start: '2023-02-06T10:00:00',
    end: '2023-02-06T12:00:00'
  },
  {
    title: 'Brent - 3301',
    start: '2023-02-06T10:00:00',
    end: '2023-02-06T11:00:00'
  },
  {
    title: 'Mandy - 1202', 
    start: '2023-02-06T10:00:00', 
    end: '2023-02-06T11:00:00'
  },
  {
    title: 'Osayamen - 3302',
    start: '2023-02-06T12:00:00',
    end: '2023-02-06T13:00:00'
  },
  {
    title: 'Steven - 2310',
    start: '2023-02-06T12:00:00',
    end: '2023-02-06T13:00:00'
  },
  {
    title: 'Pranav - 3320',
    start: '2023-02-06T13:00:00',
    end: '2023-02-06T14:00:00'
  },
  {
    title: 'Francisco - 1202',
    start: '2023-02-07T10:00:00',
    end: '2023-02-07T12:00:00'
  },
  {
    title: 'Isaac - 2310',
    start: '2023-02-07T10:00:00',
    end: '2023-02-07T11:00:00'
  },
  {
    title: 'Brent - 3301',
    start: '2023-02-07T11:30:00',
    end: '2023-02-07T12:30:00'
  },
  {
    title: 'Bryce - 3320',
    start: '2023-02-07T11:30:00',
    end: '2023-02-07T12:30:00'
  },
  {
    title: 'Nikhil - CS1325',
    start: '2023-02-07T13:00:00',
    end: '2023-02-07T15:00:00'
  },
  {
    title: 'Gordon - 3301',
    start: '2023-02-07T13:00:00',
    end: '2023-02-07T14:00:00'
  },
  {
    title: 'Megan - 2310',
    start: '2023-02-07T15:00:00',
    end: '2023-02-07T16:00:00'
  },
  {
    title: 'Osayamen - 3302',
    start: '2023-02-08T12:00:00',
    end: '2023-02-08T13:00:00'
  },
  {
    title: 'Steven - 2310',
    start: '2023-02-08T12:00:00',
    end: '2023-02-08T13:00:00'
  },
  {
    title: 'Sebastian - 4301',
    start: '2023-02-08T13:00:00',
    end: '2023-02-08T15:00:00'
  },
  {
    title: 'Pranav - 3320',
    start: '2023-02-08T13:00:00',
    end: '2023-02-08T14:00:00'
  },
  {
    title: 'Isaac - 2310',
    start: '2023-02-09T10:00:00',
    end: '2023-02-09T11:00:00'
  },
  {
    title: 'Benjamin - 3201',
    start: '2023-02-09T11:00:00',
    end: '2023-02-09T13:00:00'
  },
  {
    title: 'Bryce - 3320',
    start: '2023-02-09T11:30:00',
    end: '2023-02-09T12:30:00'
  },
  {
    title: 'Joshua - 3301',
    start: '2023-02-09T13:00:00',
    end: '2023-02-09T15:00:00'
  },
  {
    title: 'Gordon - 3301',
    start: '2023-02-09T13:00:00',
    end: '2023-02-09T14:00:00'
  },
  {
    title: 'Megan - 2310',
    start: '2023-02-09T15:00:00',
    end: '2023-02-09T16:00:00'
  },
  {
    title: 'Mandy - 1202',
    start: '2023-02-10T11:30:00',
    end: '2023-02-10T12:30:00'
  }
]
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
                slotDuration="00:15:00"
                slotMinTime="10:00"
                slotMaxTime="16:30"
                height={'48rem'}
                weekends={false}
                // dayHeaderFormat={{weekday: 'long'}}
                allDaySlot={false}
                events={events}
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
