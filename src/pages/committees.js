import Head from "next/head";
import Executives from "@/components/Executives";
import styles from "@/styles/Committees.module.css";


export default function Committees() {
  return (
    <>
     <div className={styles.title}>
      Executives
     </div>
     <Executives />
     <div className={styles.title}>
      Events Committee
     </div>
     <div className={styles.title}>
      Tech Committee
     </div>
     <div className={styles.title}>
      Tutoring Committee
     </div>
     <div className={styles.title}>
      Forge
     </div>
     
    </>
  );
}
