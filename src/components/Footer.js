import styles from "../styles/Footer.module.css";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";
import logo from "../assets/ieeelogowhite.png";
import NewsLetter from "../components/NewsLetter";

export default function Footer() {
  return (
    <footer className=" tw-bg-ieeeorange tw-h-1/2 tw-w-full  tw-flex md:tw-flex-row tw-flex-col tw-justify-around tw-items-start tw-p-20">
      <div className="tw-text-white tw-p-5 tw-flex tw-flex-col">
        <div className="tw-flex tw-flex-row">
          <Image className={styles.logo} src={logo} alt="IEEELOGO" />
          <div className="tw-flex tw-flex-col tw-w-60">
            <div className={styles.title}>IEEE UTD</div>
            <p className={styles.font__text}>University of Texas at Dallas</p>
          </div>
        </div>
        <div className={styles.copyright__group}>
          <p className={styles.copyright}>©</p>
          <p className={styles.copyright__text}>
            Copyright {new Date().getFullYear()} IEEE at UTD
          </p>
        </div>
      </div>
      <div className="tw-text-white p-5">
        <ul>
          <div className="tw-text-2xl">
            <p className={styles.font__text}>Contact Us</p>
          </div>
          <p className={styles.font__text}>IEEE UTD</p>
          <p className={styles.font__text}>ECSN 2.318,</p>
          <p className={styles.font__text}>Richardson TX, 75080</p>
          <div className="tw-underline tw-decoration-ieeeorangedim tw-mt-2">
            <p className={styles.font__text}>ieeeutd@gmail.com</p>
          </div>
        </ul>
      </div>
      <div className="tw-p-5 tw-flex-col">
        <ul>
          <div className="tw-group tw-flex tw-gap-6 tw-pb-5">
            <a href="https://www.instagram.com/ieeeutd/">
              <FaInstagram className="tw-transition tw-ease-in-out tw-delay-150 tw-text-white tw-text-5xl tw-cursor-pointer hover:tw-fill-white group-hover:tw-text-ieeeorangedim" />
            </a>
            <a href="https://www.facebook.com/IEEEUTD/">
              <FaFacebook className="tw-transition tw-ease-in-out tw-delay-150 tw-text-white tw-text-5xl tw-cursor-pointer hover:tw-fill-white group-hover:tw-text-ieeeorangedim" />
            </a>
            <a href="https://www.linkedin.com/company/ieee-utd/">
              <FaLinkedin className="tw-transition tw-ease-in-out tw-delay-150 tw-text-white tw-text-5xl tw-cursor-pointer hover:tw-fill-white group-hover:tw-text-ieeeorangedim" />
            </a>
            <a href="https://www.youtube.com/@ieeeutdallas1989">
              <FaYoutube className="tw-transition tw-ease-in-out tw-delay-150 tw-text-white tw-text-5xl tw-cursor-pointer hover:tw-fill-white group-hover:tw-text-ieeeorangedim" />
            </a>
          </div>
        </ul>
      </div>
    </footer>
  );
}
