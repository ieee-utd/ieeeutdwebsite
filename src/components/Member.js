import Image from "next/image";
import placeholder from "@/assets/gray.png";
import styles from "@/styles/Committees.module.css";
import committeeMembers from "./CommitteeMembers";
import { FaLinkedin } from "react-icons/fa";
import {SiMicrosoftoutlook} from "react-icons/si";

export default function Member({name="default", title, email, linkedin, image}) {



    return(
        <div className={styles.profile__container}>
            <Image className={styles.image} src = {image} alt="pic" />
            <div className={styles.info}>
                <p className={styles.test}>{name}</p>
                <p className={styles.info__title}>{title}</p>
                <div className="tw-group tw-flex tw-gap-6 tw-pb-5">
                    <a href= {linkedin}>
                        <FaLinkedin className="tw-transition tw-ease-in-out tw-delay-150 tw-text-orange tw-text-5xl tw-cursor-pointer hover:tw-fill-orange group-hover:tw-text-ieeebluedim" />
                    </a>
                    <a href= {email}>
                        <SiMicrosoftoutlook className="tw-transition tw-ease-in-out tw-delay-150 tw-text-blue tw-text-5xl tw-cursor-pointer hover:tw-fill-blue group-hover:tw-text-ieeebluedim" />
                    </a>
                </div>
            </div>
        </div>
    )
}