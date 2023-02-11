import Head from "next/head";
import styles from "../styles/Tutoring.module.css";
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
        </div>
      </main>
    </>
  );
}
