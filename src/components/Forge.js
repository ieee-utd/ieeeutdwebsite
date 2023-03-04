
import styles from "@/styles/Committees.module.css";
import Member from "@/components/Member"


export default function Executives() {


return(

     <div className={styles.image__container}>
     <Member name="Dylan Nguyen" title="Co-Head"/>
     <Member name="Bhabishya Shrestha" title="Assistant Tech Director"/>
     <Member name="Aaron Lin" title="Assistant Business Director"/>
</div>



)



}