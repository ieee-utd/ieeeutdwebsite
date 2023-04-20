
import styles from "@/styles/Committees.module.css";
import Member from "@/components/Member";
import committeeMembers from "./CommitteeMembers";

export default function Forge() {


return(

     <div className={styles.image__container}>
     <Member name="Dylan Nguyen" title="Co-Head" image = {committeeMembers[6]["src"]} linkedin = "https://www.linkedin.com/in/dylan-nguyen-693694226/" email = "dhn200002@utdallas.edu"/>
     <Member name="Bhabishya Shrestha" title="Assistant Tech Director" image = {committeeMembers[3]["src"]} linkedin = "https://www.linkedin.com/in/shrestha-bhabishya/" email = "bxs190031@utdallas.edu"/>
     <Member name="Aaron Lin" title="Assistant Business Director" image = {committeeMembers[0]["src"]} email = "axl210064@utdallas.edu"/>
</div>



)



}