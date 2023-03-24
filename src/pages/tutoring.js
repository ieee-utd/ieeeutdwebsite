import Head from "next/head";
import styles from "../styles/Tutoring.module.css";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import Image from "next/image";
import utdMap from "public/utdmap.png";
import escnMap from "public/escnmap.png"

export default function Tutoring() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const calendarId = process.env.NEXT_PUBLIC_TUTORING_CALENDAR_ID;
  // if(apiKey == undefined)
  //   console.log("apikey is undefined")
  // else
  //   console.log("working good")
  return (
    <>
      <Head></Head>
      {/* header */}
      <main>
        <div className={styles["section-one-container"]}>
          <h1 className={styles.title}>Tutoring</h1>
          <div className={styles["course-list-container"]}>
            <p className={styles["course-list-title"]}>We provide tutoring for the following courses:</p>
            <ul>
              {/* maybe add hyperlinks to utd course info page */}
              <li>Introduction to Electrical Engineering II (CE/EE 1202) </li>
              <li>Introduction to Programming (CS 1325)</li>
              <li>Introduction to Digital Systems (CE/EE 2310)</li>
              <li>Fundamentals I (CE/EE 3201)</li>
              <li>Digital Circuits (CE/EE 3320)</li>
              <li>Electrical Network Analysis (CE/EE 3301)</li>
              <li>Signals and Systems (CE/EE 3302)</li>
              <li>Electromagnetic Engineering (CE/EE 4301)</li>
            </ul>
          </div>
        </div>
        <div className={styles["section-two-container"]}>
          <div className={styles["section-two-title"]}>The <span>IEEE</span> Room</div>
          <div className={styles["image-container"]}>
            <Image width={700} height={700} src={utdMap}/>
            <Image width={700} height={700} src={escnMap}/>
          </div>
          <p>The tutoring room is located at ECSN 2.318. We are the room in the main lobby with IEEE signs and a big window. The entrance is in the hallway on the other side of the tutoring room.</p>
        </div>
        <div className={styles["section-three-container"]}>
          <p className={styles["tutoring-hours-title"]}>Tutoring hours</p>
          <div className={styles["calendar-container"]}>
            <div className={styles["calendar-container"]}>
              <FullCalendar className={styles.calendar}
                plugins={[timeGridPlugin, googleCalendarPlugin]}  
                googleCalendarApiKey={apiKey}
                events={{googleCalendarId: calendarId}}
                initialDate={'2023-02-06'}  //START DATE FOR THE WEEK
                slotDuration="00:15:00"
                slotMinTime="10:00"
                slotMaxTime="16:30"
                slotEventOverlap={false}
                height={'44rem'}
                weekends={false}
                allDaySlot={false}
                headerToolbar={{
                  left: '',
                  center: '',
                  right: '',
                }}
                eventClick= {function (event) {
                  // Prevent redirect to Google Calendar
                  event.jsEvent.preventDefault();
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles["section-four-container"]}>
          <h2 className={styles["test"]}>Resources</h2>
          <h3>Lab Tools</h3>
          <p></p>
          <h3>Discord Server</h3>

        </div>
      </main>
    </>
  );
}
