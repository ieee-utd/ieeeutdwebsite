
import styles from "@/styles/Committees.module.css";
import Member from "@/components/Member"




export default function Executives() {


return(


     <div className={styles.image__container}>
     <Member name="Allison Pham" title="President"/>
     <Member name="Caroline Lowes" title="Vice President"/>
     <Member name="Bryan Marcias" title="Vice President"/>
     <Member name="Alec Manley" title="Treasurer"/>
     <Member name="Krishna Chilukuri" title="Secretary"/>
     </div>



)



}