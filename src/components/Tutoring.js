import styles from "@/styles/Committees.module.css";
import Member from "@/components/Member"


export default function Executives() {


return(

     <div className={styles.image__container}>
     <Member name="Nithila Shenoy" title="Co-Director"/>
     <Member name="Kevin Debord" title="Co-Director"/>
     <Member name="Stephanie Barnard" title="Events Secretary"/>
</div>



)



}