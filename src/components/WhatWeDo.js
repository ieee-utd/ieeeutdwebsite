import styles from "@/styles/Home.module.css";
import GridInfo from "./GridInfo";

export default function WhatWeDo() {
  return (
    <div className={styles.main__container}>
      <div className={styles.what__we__do}>Hello</div>
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
          page="tech"
        />
        <GridInfo
          title="Forge"
          content="This is a 10 week design program engineering solutions to real world problems"
          page="forge"
        />
      </div>
    </div>
  );
}
