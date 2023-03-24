import { GiHamburgerMenu } from "react-icons/gi";
import styles from "../styles/Navigation.module.css";

export default function HamburgerMenu() {
  return <GiHamburgerMenu size={64} className={styles.hamburger__menu} />;
}
