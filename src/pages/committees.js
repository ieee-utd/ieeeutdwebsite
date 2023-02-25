import Head from "next/head";
import Executives from "@/components/Executives";
import EventsCommittee from "@/components/EventsCommittee";
import TechCommittee from "@/components/TechCommittee";
import Tutoring from "@/components/Tutoring";
import Forge from "@/components/Forge";
import Developers from "@/components/Developers";
import styles from "@/styles/Committees.module.css";


export default function Committees() {
  return (
    <div className="container">
     <div className={styles.title}>
      Executives
     </div>
     
     <Executives />


     <div className={styles.title}>
      Events Committee
     </div>
     <div className={styles.description}>
      Plan and market upcoming events, moderate the social media accounts, and network with companies
     </div>
     <EventsCommittee />


     <div className={styles.title}>
      Tech Committee
     </div>
     <div className={styles.description}>
      Organize and run the IEEE Microcontroller and Soldering workshops
     </div>
     <TechCommittee />


     <div className={styles.title}>
      Tutoring Committee
     </div>
     <div className={styles.description}>
      Student-led tutoring for many engineering courses in person and online
     </div>
     <Tutoring />


     <div className={styles.title}>
      Forge
     </div>
     <div className={styles.description}>
      Engineer projects for solutions to real-world problems faced by the UT Dallas community, 
      designed, built, tested, and used by UTD students, faculty and staff
     </div>
     <Forge />
     

     <div className={styles.title}>
      Web Developers
     </div>
     <div className={styles.description}>
      Developed the website
     </div>
     <Developers />

     
     
    </div>
  );
}
