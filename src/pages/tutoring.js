import Head from "next/head";
import styles from "../styles/Tutoring.module.css";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import Image from "next/image";
import utdMap from "public/utdmap.png";
import escnMap from "public/escnmap.png"
import banner from "public/tutoring_banner.jpg"
import labtools from "public/labtools.jpg"

export default function Tutoring() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const calendarId = process.env.NEXT_PUBLIC_TUTORING_CALENDAR_ID;
  // console.log("apikey", apiKey);
  let eventIndex = 0;
  const colors = ['#8f1600', '#9c5d00', '#7a9c00', '#009c17', '#007d9c', '#00009c']; //temp colors
  const handleEventDidMount = (eventInfo) => {
    const eventColor = colors[eventIndex % colors.length];
    eventIndex++;
    eventInfo.el.style.backgroundColor = eventColor;
    eventInfo.el.style.eventTextColor ='black';
  };
  const handleViewDidMount = (viewInfo) => {
    viewInfo.el.style.borderColor = 'black';
  }
  return (
    <>
      <Head></Head>
      {/* header */}
      <main>
        <div className={styles["header-container"]}>
          <Image priority={true} placeholder={"blur"} className="object-cover h-[200px] md:h-[700px] brightness-50" src={banner} alt="Tutoring Banner"/>
          <h1 className={styles.title}>Tutoring</h1>
        </div>
        <div className={styles["section-one-container"]}>
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
          <div className="flex flex-1 flex-row flex-wrap justify-center min-w-[30%] w-full">
            <Image className={styles.imagemap} src={utdMap}/>
            <Image className={styles.imagemap} src={escnMap}/>
          </div>
          <p style={{paddingLeft: '10%', paddingRight: '10%', width: '100%', fontSize: '150%', color: 'white', fontFamily: 'Roboto Mono, monospace'}}>The tutoring room is located at ECSN 2.318. We are the room in the main lobby with IEEE signs and a big window. The entrance is in the hallway on the other side of the tutoring room.</p>
        </div>
        <div className={styles["section-three-container"]}>
          <p className={styles["tutoring-hours-title"]}>Tutoring hours</p>
          <div className={styles["calendar-container"]}>
            <div className={styles["calendar-container"]}>
              <FullCalendar className={"fc"}
                styles={{backgroundColor: 'black'}}
                plugins={[timeGridPlugin, googleCalendarPlugin]}  
                googleCalendarApiKey={apiKey}
                events={{googleCalendarId: calendarId}}
                viewDidMount={handleViewDidMount}
                eventDidMount={handleEventDidMount} // custom render function
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
          <h3 className="pl-[5%] text-white text-[250%] underline ">Lab Tools</h3>
          <div className="flex flex-row">
            <span className="pl-[5%] text-white text-[120%] py-4 pr-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            <Image className="pr-10 min-w-[10%] max-w-[30%] h-auto aspect-square" src={labtools}></Image>
          </div>
          <p></p>
          <h3 className="pl-16 text-white text-4xl underline ">Discord Server</h3>

        </div>
      </main>
    </>
  );
}
