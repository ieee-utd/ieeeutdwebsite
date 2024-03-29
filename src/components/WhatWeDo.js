import styles from "@/styles/Home.module.css";
import GridInfo from "./GridInfo";
import GridSpecific from "./GridSpecific";

export default function WhatWeDo() {
  return (
    <div className={styles.main__container}>
      <div className={styles.what__we__do}>What we do</div>
      <div className={styles.what__container}>
        <GridInfo
          title="Tutoring"
          content="We tutor various CE/CS courses during the week between 10am-4pm."
          page="tutoring"
        />
        <GridInfo
          title="Events"
          content="We host many events such as
talks,workshops,networking events throughout the semester"
          page="events"
        />
        <GridInfo
          title="Workshops"
          content="Perfect your technical and leadership skills and boost your resume "
          page="events"
        />
        <GridSpecific
          title="Societies"
          content="Collaborate on exciting projects with like-minded peers"
          page1="robotics"
          page2="pes"
          page3="rfs" 
        />
      </div>
    </div>
  );
}
