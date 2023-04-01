import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { gridImages } from "./gridimages";

export default function GridPhotos() {
  return (
    <div className={styles.image__grid}>
      <Image
        className={styles.grid__image}
        src={gridImages["images"][0]["src"]}
        alt="tutoring session"
      />
      <Image
        className={styles.grid__image}
        src={gridImages["images"][1]["src"]}
        alt="ecsw workshop"
      />
      <Image
        className={styles.grid__image}
        src={gridImages["images"][2]["src"]}
        alt="general body meeting"
      />
      <Image
        className={styles.grid__image}
        src={gridImages["images"][3]["src"]}
        alt="another general body meeting"
      />
    </div>
  );
}
