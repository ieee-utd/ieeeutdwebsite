import Image from "next/image";
import styles from "@/styles/Committees.module.css";
import { FaLinkedin } from "react-icons/fa";
import { SiMicrosoftoutlook } from "react-icons/si";
import committeeMembers from "./committeeMembers";
import { useEffect, useRef, useState } from "react";
import blank from "@/assets/IEEE/blank.png";

export default function Member({
  name = "default",
  title,
  email,
  linkedin,
  image=committeeMembers[committeeMembers.length - 1],
}) {

  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(image);
  if (image === "") {
    image = blank;
  }

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
        <div className="tw-w-fit tw-p-8 tw-flex tw-flex-col tw-justify-center tw-items-start">
            <div className={styles.outer_image}>
                <div className="tw-mb-[2rem]">
                    <Image cover ref={imgRef} src={image} alt="pic" className="tw-aspect-[3/4] tw-object-cover"/>
                </div>
            </div>
            <div className="tw-flex tw-flex-col">
                <p className="tw-text-[#2C6A9B] tw-font-bold tw-text-[2vw]">{name}</p>
                <p className="tw-font-bold tw-my-4 tw-text-[1.5vw] tw-text-start">{title}</p>
                <div className="tw-flex tw-gap-6 tw-flex-start">
                    <a href={linkedin}>
                        <FaLinkedin className="tw-transition tw-ease-in-out tw-delay-150 tw-text-3xl w-cursor-pointer hover:tw-fill-orange" />
                    </a>
                    <a href={`mailto:${email}`}>
                    <SiMicrosoftoutlook className="tw-transition tw-ease-in-out tw-delay-150 tw-text-3xl tw-cursor-pointer hover:tw-fill-blue" />
                    </a>
                </div>
            </div>
        </div>
  );
}
