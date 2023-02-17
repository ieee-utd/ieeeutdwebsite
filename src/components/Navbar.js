import styles from "@/styles/Navigation.module.css";
import Image from "next/image";
import Link from "next/Link";

import logo from "../assets/ieeeutdlogo.png";
import HamburgerMenu from "./HamburgerMenu";
// comment
export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.title__logo}>
        <Image className={styles.logo} src={logo} alt="IEEELOGO" />
        <div className={styles.navbar__title}>IEEE UTD</div>
      </div>
      <div className="group hidden gap-6 pb-5 mt-6 md:flex mr-10">
        <Link
          href={"/"}
          className="transition ease-in-out delay-150 text-white cursor-pointer text-2xl group-hover:text-fadedblue"
        >
          <p className={styles.navbar__hover__underline}>Home</p>
        </Link>
        <Link
          className="transition ease-in-out delay-150 text-white cursor-pointer text-2xl group-hover:text-fadedblue"
          href={"/events"}
        >
          <p className={styles.navbar__hover__underline}>Events</p>
        </Link>
        <Link
          className="transition ease-in-out delay-150 text-white cursor-pointer text-2xl group-hover:text-fadedblue"
          href={"/tutoring"}
        >
          <p className={styles.navbar__hover__underline}>Tutoring</p>
        </Link>
        <Link
          className="transition ease-in-out delay-150 text-white cursor-pointer text-2xl group-hover:text-fadedblue"
          href={"/committees"}
        >
          <p className={styles.navbar__hover__underline}>Committees</p>
        </Link>
        <Link
          className="transition ease-in-out delay-150 text-white cursor-pointer text-2xl group-hover:text-fadedblue"
          href={"/forge"}
        >
          <p className={styles.navbar__hover__underline}>Forge</p>
        </Link>
      </div>
      <div className={styles.hamburger_container}>
        <HamburgerMenu />
      </div>
    </header>
  );
}
