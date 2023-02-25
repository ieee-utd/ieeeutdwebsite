import styles from "@/styles/Committees.module.css";
import placeholder from "@/assets/gray.png";
import Image from "next/image"


export default function Executives() {


return(


     <div className={styles.image__container}>
     
     <Image className={styles.image}  src={placeholder} alt="pic" />
     <Image className={styles.image}  src={placeholder} alt="pic" />
     <Image className={styles.image}  src={placeholder} alt="pic" />
     </div>



)



}