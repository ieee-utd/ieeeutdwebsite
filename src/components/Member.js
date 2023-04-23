import Image from "next/image";
import styles from "@/styles/Committees.module.css";
import { FaLinkedin } from "react-icons/fa";
import { SiMicrosoftoutlook } from "react-icons/si";
import committeeMembers from "./committeeMembers";
import { useEffect, useRef, useState } from "react";

export default function Member({
  name = "default",
  title,
  email,
  linkedin,
  image=committeeMembers[committeeMembers.length - 1]["src"],
}) {

  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(image);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
		  entries.forEach((entry) => {
			if (entry.isIntersecting) {
			  setIsVisible(true);
			  observer.unobserve(entry.target);
			}
		  });
		});
		observer.observe(imgRef.current);
	  }, []);

  return (
    <div className={`${styles.profile__container} ${isVisible ? styles.fade__in : ''}`}>
      <div className={styles.image}>
        <Image width={350} ref={imgRef} src={image} alt="pic" />
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.info__title}>{title}</p>
        <div className="tw-self-center tw-flex tw-gap-6">
          <a href={linkedin}>
            <FaLinkedin className="tw-transition tw-ease-in-out tw-delay-150 tw-text-3xl w-cursor-pointer hover:tw-fill-orange" />
          </a>
          <a href={email}>
            <SiMicrosoftoutlook className="tw-transition tw-ease-in-out tw-delay-150 tw-text-3xl tw-cursor-pointer hover:tw-fill-blue" />
          </a>
        </div>
      </div>
    </div>
  );
}
