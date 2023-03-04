
import styles from "@/styles/Committees.module.css";
import Member from "@/components/Member"


export default function Executives() {


return(


     /*<div className={styles.image__container}>
     
     <Image className={styles.image}  src={placeholder} alt="pic" />
     <Image className={styles.image}  src={placeholder} alt="pic" />
     <Image className={styles.image}  src={placeholder} alt="pic" />
     </div>
     */

<div className={styles.image__container}>
<Member name="Muhammad Ikram" title="Co-Director"/>
<Member name="Bhavya Chandran" title="Co-Director"/>
<Member name="James Odebiyi" title="Events Secretary"/>
</div>



)



}