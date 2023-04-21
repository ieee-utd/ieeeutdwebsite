import Head from "next/head";
import styles from "../styles/Tutoring.module.css";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import scrollGridPlugin from "@fullcalendar/scrollgrid";
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import Image from "next/image";
import discordImage from "public/discord.png";
import youtubeImage from "public/youtube.png";
import utdMap from "public/utdmap.png";
import escnMap from "public/escnmap.png"
import banner from "public/tutoring_banner.jpg"
import labtools from "public/labtools.jpg"
import { useEffect } from "react";

export default function Tutoring() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const calendarId = process.env.NEXT_PUBLIC_TUTORING_CALENDAR_ID;
  let eventIndex = 0;
  const colors = ['#8f1600', '#9c5d00', '#7a9c00', '#009c17', '#007d9c', '#00009c']; //temp colors
  const handleEventDidMount = (eventInfo) => {
    const eventColor = colors[eventIndex % colors.length];
    eventIndex++;
    eventInfo.el.style.backgroundColor = eventColor;
    eventInfo.el.style.color ='black';
  };
  useEffect(() => {
    const fullCalendarEl = document.querySelector('.fc');

    if (fullCalendarEl) {
      const eventTimeEls = document.querySelectorAll('.fc-event');
      fullCalendarEl.style.backgroundColor = '#f5f5f5';
      fullCalendarEl.style.color = 'black';
      const events = document.querySelectorAll('.fc-v-event');
      events.forEach((event) => {
        event.style.backgroundColor = 'black';
        event.style.color = 'white';
      });
    }
  }, []);
  return (
    <>
      <Head></Head>
      <main>
        <div className={styles["header-container"]}>
          <Image priority={true} placeholder={"blur"} className="object-cover h-[200px] md:h-[700px] brightness-50" src={banner} alt="Tutoring Banner"/>
          <h1 className={styles.title}>TUTORING</h1>
        </div>
        <div className={styles["section-one-container"]}>
          <div className={styles["course-list-container"]}>
            <h2>Courses</h2>
            <p className={"pb-12 underline font-medium text-white text-3xl"}>We provide tutoring for the following courses:</p>
            <div className={styles["course-list"]}>
              {/* maybe add hyperlinks to utd course info page */}
              <li>Introduction to Electrical Engineering II <br/>(CE/EE 1202) </li>
              <li>Introduction to Programming <br/>(CS 1325)</li>
              <li>Introduction to Digital Systems <br/>(CE/EE 2310)</li>
              <li>Fundamentals I <br/>(CE/EE 3201)</li>
              <li>Digital Circuits <br/>(CE/EE 3320)</li>
              <li>Electrical Network Analysis <br/>(CE/EE 3301)</li>
              <li>Signals and Systems <br/>(CE/EE 3302)</li>
              <li>Electromagnetic Engineering <br/>(CE/EE 4301)</li>
            </div>
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
                schedulerLicenseKey={'CC-Attribution-NonCommercial-NoDerivatives'}
                plugins={[timeGridPlugin, googleCalendarPlugin, scrollGridPlugin]}  
                googleCalendarApiKey={apiKey}
                events={{googleCalendarId: calendarId}}
                eventDidMount={handleEventDidMount} // custom render function
                initialDate={'2023-02-06'}  //START DATE FOR THE WEEK
                slotDuration="00:15:00"
                slotMinTime="10:00"
                slotMaxTime="16:00"
                slotEventOverlap={false}
                height={'44rem'}
                weekends={false}
                allDaySlot={false}
                dayMinWidth={225}
                contentHeight='auto'
                stickyFooterScrollbar={true}
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
          <h2>Resources</h2>
          <h3 className="pl-[5%] text-white text-[250%] underline ">Lab Tools</h3>
          <div className="flex flex-col justify-center content-center">
            <div className="pl-[5%] text-white text-[120%] w-[80%] py-4 pr-4" >
                <p>Our tutoring room is equipped with a variety of electrical engineering tools to help students learn and master the subject. Here are some of the tools available in the room:</p>
                <ul className="">
                  <li className="pl-[2%] pb-2">Oscilloscopes: Our tutoring room has a range of oscilloscopes that students can use to visualize and analyze electrical signals. These tools can help students understand waveforms, measure voltage and frequency, and diagnose problems in circuits.</li>
                  <li className="pl-[2%] pb-2">Campus computers: We have several computers available for students to use during tutoring sessions. These computers are loaded with a range of software programs commonly used in electrical engineering, such as MATLAB, LTSpice, and Multisim.</li>
                  <li className="pl-[2%] pb-2">Power supplies: Our tutoring room has a variety of power supplies that students can use to provide voltage and current to their circuits. These tools are essential for testing and troubleshooting electrical devices.</li>
                  <li className="pl-[2%] pb-2">Multimeters: We also have multimeters available for students to use during tutoring sessions. These tools can measure voltage, current, and resistance in electrical circuits, providing students with valuable information about their projects.</li>
                  <li className="pl-[2%] pb-2">Other general purpose electrical engineering tools: In addition to the above tools, our tutoring room is also equipped with a variety of other general purpose electrical engineering tools, such as function generators, signal generators, and logic analyzers. These tools can help students learn about a range of electrical engineering concepts and techniques.</li>
                </ul>
                <p>We encourage all students to take advantage of the tools available in our tutoring room. Our knowledgeable tutors are available to help students learn how to use these tools effectively and gain a deeper understanding of electrical engineering concepts.</p>
            </div>
            <Image className="relative left-[30%] w-[60%] max-w-[600px] content-center justify-center" src={labtools}></Image>
          </div>

          <p></p>
          <h3 className="pt-3 pl-[5%] text-white text-4xl underline ">Discord Server</h3>
          <p className="pl-[5%] text-white text-[120%] w-[80%] py-4 pr-4">Our tutoring program includes a Discord server where students can connect with tutors in real-time. Whenever a tutor is available, students can join a voice call or send a message to receive help with their coursework. Our Discord server is a convenient way for students to get the support they need, whether they&apos;re working on a problem set or studying for an exam. We encourage all students to join the server and take advantage of this valuable resource.</p>
          <a rel="noreferrer" target="_blank" className="pl-[5%] w-fit" href="https://discord.com/invite/23Fn3CVPZB">
            <Image className="pl-[5%] m-0 w-[50%] max-w-[500px] "src={discordImage}/>
          </a>
          {/* <a href="https://discord.com/invite/23Fn3CVPZB" className="pl-[5%] text-[120%] w-[80%] py-4 pr-4">Discord</a> */}
          <h3 className="pt-3 pl-[5%] text-white text-4xl underline ">Exam Review Sessions</h3>
          <p className="pl-[5%] text-white text-[120%] w-[80%] py-4 pr-4">Our tuoring program also offers exam review sessions for specific classes, which are live-streamed on Microsoft Teams and later uploaded to our YouTube channel. These sessions are designed to help students prepare for upcoming exams by reviewing key concepts, practicing problems, and answering questions. Our knowledgeable tutors lead these review sessions, providing students with valuable insights and guidance to help them succeed. Whether you&apos;re struggling with a particular topic or simply want to review the material before an exam, our review sessions are a great resource to help you prepare. We encourage all students to attend these live sessions or watch the recorded videos on our YouTube channel to strengthen their understanding of the material and boost their confidence before exams.</p>
          <a rel="noreferrer" target="_blank" className="pl-[5%] w-fit" href="https://www.youtube.com/@ieeeutdallas1989">
            <Image className="pl-[5%] m-0 w-[50%] max-w-[200px] " src={youtubeImage}/>
          </a>
        </div>
      </main>
    </>
  );
}
