import styles from "../styles/Footer.module.css";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
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
            <p>University of Texas at Dallas</p>
          </div>
        </div>
        <p>© Copyright {new Date().getFullYear()} IEEE at UTD </p>
      </div>
      <div className="tw-text-white p-5">
        <ul>
          <p className="tw-text-2xl">Contact Us</p>
          <p>IEEE UTD</p>
          <p>SPN 2.220</p>
          <p>3000 Synergy Park Blvd,</p>
          <p>Richardson TX, 75080</p>
          <p className="tw-underline tw-decoration-ieeeorangedim tw-mt-2">
            ieeeutd@gmail.com
          </p>
        </ul>
      </div>
      <div className="tw-p-5 tw-flex-col">
        <ul>
          <div className="tw-group tw-flex tw-gap-6 tw-pb-5">
            <FaInstagram className="tw-transition tw-ease-in-out tw-delay-150 tw-text-white tw-text-5xl tw-cursor-pointer hover:tw-fill-white group-hover:tw-text-ieeeorangedim" />
            <FaFacebook className="tw-transition tw-ease-in-out tw-delay-150 tw-text-white tw-text-5xl tw-cursor-pointer hover:tw-fill-white group-hover:tw-text-ieeeorangedim" />
            <FaLinkedin className="tw-transition tw-ease-in-out tw-delay-150 tw-text-white tw-text-5xl tw-cursor-pointer hover:tw-fill-white group-hover:tw-text-ieeeorangedim" />
            <FaYoutube className="tw-transition tw-ease-in-out tw-delay-150 tw-text-white tw-text-5xl tw-cursor-pointer hover:tw-fill-white group-hover:tw-text-ieeeorangedim" />
          </div>
          <NewsLetter />
        </ul>
      </div>
    </footer>
  );
}
