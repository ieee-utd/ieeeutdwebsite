import styles from "@/styles/Navigation.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import logo from "../assets/ieeeutdlogo.png";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setBurgerOpen(false);
  }, [router.asPath]);

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.first__container}>
          <Link href={"/"} className={styles.title__logo}>
            <Image className={styles.logo} src={logo} alt="IEEELOGO" />

            <div className={styles.navbar__title}>IEEE UTD</div>
          </Link>
        </div>

        <div className="tw-group tw-hidden tw-gap-6 tw-pb-5 tw-mt-6 md:tw-flex tw-mr-10">
          <Link
            href={"/"}
            className="tw-transition tw-ease-in-out tw-delay-150 tw-text-white tw-text-2xl group-hover:tw-text-fadedblue"
          >
            <p className={styles.navbar__hover__underline}>Home</p>
          </Link>
          <Link
            className="tw-transition tw-ease-in-out tw-delay-150 tw-text-white tw-cursor-pointer tw-text-2xl group-hover:tw-text-fadedblue"
            href={"/events"}
          >
            <p className={styles.navbar__hover__underline}>Events</p>
          </Link>
          <Link
            className="tw-transition tw-ease-in-out tw-delay-150 tw-text-white tw-cursor-pointer tw-text-2xl group-hover:tw-text-fadedblue"
            href={"/tutoring"}
          >
            <p className={styles.navbar__hover__underline}>Tutoring</p>
          </Link>
          <Link
            className="tw-transition tw-ease-in-out tw-delay-150 tw-text-white tw-cursor-pointer tw-text-2xl group-hover:tw-text-fadedblue"
            href={"/committees"}
          >
            <p className={styles.navbar__hover__underline}>Committees</p>
          </Link>
          <Link
            className="tw-transition tw-ease-in-out tw-delay-150 tw-text-white tw-cursor-pointer tw-text-2xl group-hover:tw-text-fadedblue"
            href={"/forge"}
          >
            <p className={styles.navbar__hover__underline}>Forge</p>
          </Link>
        </div>
        <HamburgerMenu burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
      </header>

      {burgerOpen ? (
        <ul className={styles.mobile_nav_list}>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/events"}>Events</Link>
          </li>
          <li>
            <Link href={"/tutoring"}>Tutoring</Link>
          </li>
          <li>
            <Link href={"/committees"}>Committees</Link>
          </li>
          <li>
            <Link href={"/forge"}>Forge</Link>
          </li>
        </ul>
      ) : (
        ""
      )}
    </>
  );
}
