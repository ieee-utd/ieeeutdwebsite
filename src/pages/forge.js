
import styles from "@/styles/Forge.module.css";

export default function Forge() {
  return (
  <div className={styles.mainContainer}>
      <div className={styles.main}>
        <h1>What is Forge?</h1>
        <p>Forge is a project-based committee that aims to engineer solutions to real-world problems faced by the UT Dallas community. 
          These projects are designed, built, tested, and used by UTD students, faculty and staff.</p>
      </div>
      <div className={styles.projects}>
          <h1>Projects</h1>
          <div className={styles.title_description}>
          <p>Forge currently offers the following projects</p>
          </div>
          <div className={styles.spacer}>
            <ul>
              <li>
                <h1>8-Bit Processor</h1>
                <p >Build an 8-bit CPU with a team, tasked with designing and implementing an instruction set while incorporating 
                  control, memory, a data path, an ALU, and an interface.</p>
                  <div className={styles.button}>
                  <a>Learn More</a>
                </div>
              </li>
              <li>
                <h1>Motion-Tracking Camera</h1>
                <p>Design a camera that tracks an object&apos;s movement (such as a face) using computer vision software and hardware 
                  (servos and a micro-controller) to follow it in real-time.</p>
                <div className={styles.button}>
                <a>Learn More</a>
                </div>
                </li>
              <li><h1>Dynamic Poster</h1>
              <p>Design and develop a dynamic picture frame using a micro-controller 
                that is able to display animated photos and videos</p>
                <div className={styles.button}>
                <a>Learn More</a>
                </div>
                </li>
              <li><h1>Voice-Controlled Car</h1>
              <p>Build a car that can be controlled by voice commands, using machine learning models 
                and micro-controllers to accurately interpret and respond to user input.</p>
                <div className={styles.button}>
                <a>Learn More</a>
                </div></li>
            </ul>
          </div>
      </div>
      
    </div>);
}
