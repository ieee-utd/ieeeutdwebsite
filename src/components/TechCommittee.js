import styles from "@/styles/Committees.module.css";
import Member from "@/components/Member";
import committeeMembers from "./CommitteeMembers";


export default function TechCommittee() {


return(

     <div className={styles.image__container}>
     <Member name="Muneeb Shahid" title="Co-Director" image = {committeeMembers[11]["src"]} linkedin = "https://www.linkedin.com/in/muneebshahid213/" email = "mss200007@utdallas.edu"/>
     <Member name="Logan Gonzalez" title="Co-Director" image = {committeeMembers[9]["src"]} email = "Itg200003@utdallas.edu"/>
</div>



)



}