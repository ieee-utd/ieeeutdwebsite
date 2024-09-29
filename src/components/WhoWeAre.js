import styles from "@/styles/WhoWeAre.module.css";
import Image from "next/image";
import logo from "@/assets/ieeeutdlogo.png";

export default function WhoWeAre() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Who we are</div>
      <div className={styles.logo__about}>
        <div className={styles.logo__space}>
          <Image className={styles.logo} src={logo} alt="ieeelogo" />
        </div>
        <div className={styles.aboutContainer}>
          <p className={styles.aboutText}>
            IEEE UT Dallas is one of the largest technical professional
            societies in its region with the main goal to help provide our
            students with many networking opportunities and offer skills that
            will increase their knowledge as an engineer in the job field.
          </p>
        </div>
      </div>
    </div>
  );
}
