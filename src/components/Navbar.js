import styles from "@/styles/Navigation.module.css";
import Image from "next/image";
import NavOption from "./NavOption";
import logo from "../assets/ieeeutdlogo.png";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.title__logo}>
        <Image className={styles.logo} src={logo} alt="IEEELOGO" />
        <div className={styles.navbar__title}>IEEE UTD</div>
      </div>
      <NavOption menuOption="Home" />
      <NavOption menuOption="Tutoring" page="tutoring" />
      <NavOption menuOption="Events" page="events" />
      <NavOption menuOption="Committees" page="committees" />
      <NavOption menuOption="Forge" page="forge" />
      <div className={styles.hamburger_container}>
        <HamburgerMenu />
      </div>
    </header>
  );
}
