import styles from "@/styles/Navigation.module.css";
import Link from "next/link";

export default function NavOption({ menuOption, page = "" }) {
  return (
    <Link className={styles.navbar__options} href={`/${page}`}>
      <p className={styles.navbar__hover__underline}>{menuOption}</p>
    </Link>
  );
}
