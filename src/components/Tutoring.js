import styles from "@/styles/Committees.module.css";
import Member from "@/components/Member";
import committeeMembers from "./committeeMembers";


export default function Tutoring() {


return(

     <div className={styles.image__container}>
     <Member name="Nithila Shenoy" title="Co-Director" image = {committeeMembers[12]["src"]} linkedin = "https://www.linkedin.com/in/nithila-shenoy-991b4a191/" email = "nrs210005@utdallas.edu"/>
     <Member name="Kevin Debord" title="Co-Director" image = {committeeMembers[17]["src"]} linkedin = "https://www.linkedin.com/in/kevinjdebord/" email = "kjd200004@utdallas.edu"/>
     <Member name="Stephanie Barnard" title="Events Secretary" image = {committeeMembers[13]["src"]} linkedin = "https://www.linkedin.com/in/stephanie-barnard/" email = "sib220003@utdallas.edu"/>
     </div>

)



}