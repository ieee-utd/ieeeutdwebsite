import Image from "next/image"
import placeholder from "@/assets/gray.png";
import styles from "@/styles/Committees.module.css";

export default function Member({name="default", title, email, linkedin}) {



    return(
        <div className={styles.profile__container}>
            <Image className={styles.image}  src={placeholder} alt="pic" />
            <div className={styles.info}>
                <p className={styles.test}>{name}</p>
                <p className={styles.info__title}>{title}</p>
            </div>
        </div>
    )
}