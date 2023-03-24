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
    <footer className=" bg-ieeeorange h-1/2 w-full  flex md:flex-row flex-col justify-around items-start p-20">
      <div className="text-white p-5 flex flex-col">
        <div className="flex flex-row">
          <Image className={styles.logo} src={logo} alt="IEEELOGO" />
          <div className="flex flex-col w-60">
            <div className={styles.title}>IEEE UTD</div>
            <p>University of Texas at Dallas</p>
          </div>
        </div>
        <p>© Copyright {new Date().getFullYear()} IEEE at UTD </p>
      </div>
      <div className="text-white p-5">
        <ul>
          <p className="text-2xl">Contact Us</p>
          <p>IEEE UTD</p>
          <p>SPN 2.220</p>
          <p>3000 Synergy Park Blvd,</p>
          <p>Richardson TX, 75080</p>
          <p className="underline decoration-ieeeorangedim mt-2">
            ieeeutd@gmail.com
          </p>
        </ul>
      </div>
      <div className="p-5 flex-col">
        <ul>
          <div className="group flex gap-6 pb-5">
            <FaInstagram className="transition ease-in-out delay-150 text-white text-5xl cursor-pointer hover:fill-white group-hover:text-ieeeorangedim" />
            <FaFacebook className="transition ease-in-out delay-150 text-white  text-5xl cursor-pointer hover:fill-white group-hover:text-ieeeorangedim " />
            <FaLinkedin className="transition ease-in-out delay-150 text-white  text-5xl cursor-pointer hover:fill-white group-hover:text-ieeeorangedim" />
            <FaYoutube className="transition ease-in-out delay-150 text-white text-5xl cursor-pointer hover:fill-white group-hover:text-ieeeorangedim" />
          </div>
          <NewsLetter />
        </ul>
      </div>
    </footer>
  );
}
