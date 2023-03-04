import styles from "@/styles/Committees.module.css";
import Member from "@/components/Member"




export default function Executives() {


return(


     <div className={styles.image__container}>
     <Member name="James Odebiyi" title="Lead Web Developer"/>
     <Member name="Phelps" title="Assistant Web Developer"/>
     <Member name="Steven Nguyen" title="Assistant Web Developer"/>
     <Member name="Rita Kaushik" title="Assistant Web Developer"/>
     <Member name="Arhum Khan" title="Assistant Web Developer"/>
     </div>



)



}