import styles from "../styles/Footer.module.css";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" bg-ieeeorange h-1/2 w-full  flex md:flex-row flex-col justify-around items-start p-20">
      <div className="text-white p-5">
        <p>© Copyright of IEEE at UTD</p>
      </div>
      <div className="p-5">
        <ul>
          <div className="align-items: center">Our Socials</div>
          <div className="group flex gap-6 pb-5">
            <FaInstagram className="transition ease-in-out delay-150 text-white text-6xl cursor-pointer hover:fill-white group-hover:text-ieeeorangedim" />
            <FaFacebook className="transition ease-in-out delay-150 text-white  text-6xl cursor-pointer hover:fill-white group-hover:text-ieeeorangedim " />
            <FaLinkedin className="transition ease-in-out delay-150 text-white  text-6xl cursor-pointer hover:fill-white group-hover:text-ieeeorangedim" />
            <FaYoutube className="transition ease-in-out delay-150 text-white text-6xl cursor-pointer hover:fill-white group-hover:text-ieeeorangedim" />
          </div>
        </ul>
      </div>
    </footer>
  );
}
