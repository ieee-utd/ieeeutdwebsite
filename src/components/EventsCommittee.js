
import styles from "@/styles/Committees.module.css";
import Member from "@/components/Member";
import committeeMembers from "./CommitteeMembers";


export default function EventsCommittee() {


return(

     <div className={styles.image__container}>
     <Member name="Muhammad Ikram" title="Co-Director" image = {committeeMembers[10]["src"]} linkedin = "https://www.linkedin.com/in/muhammad-i-957186136/" email = "mii200001@utdallas.edu"/>
     <Member name="Bhavya Chandran" title="Co-Director" image = {committeeMembers[4]["src"]} linkedin = "https://www.linkedin.com/in/bhavya-chandran-b9391520a/" email = "bxc210014@utdallas.edu"/>
     <Member name="James Odebiyi" title="Events Secretary" image = {committeeMembers[7]["src"]} linkedin = "https://www.linkedin.com/in/james-odebiyi-a87049214/" email = "jxo190003@utdallas.edu"/>
</div>



)



}