import styles from "@/styles/Navigation.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Divider from '@mui/material/Divider';
import logo from "../assets/ieeeutdlogo.png";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);


  const router = useRouter();

  useEffect(() => {
    setBurgerOpen(false);
    setDropDown(false);
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

        <div className="tw-group tw-hidden tw-gap-6 tw-pb-5 tw-mt-6 lg-sm:tw-flex tw-mr-12">
          <Link
              className="tw-transition tw-ease-in-out tw-delay-150 tw-text-white tw-cursor-pointer tw-text-2xl group-hover:tw-text-fadedblue"
              href={"/about"}
            >
            <p className={styles.navbar__hover__underline}>About</p>
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
          <li
            className={"tw-list-none tw-transition tw-ease-in-out tw-delay-150 tw-text-white tw-cursor-pointer tw-text-2xl group-hover:tw-text-fadedblue " + (dropDown ? "tw-w-[20vw]" : "")}
            onMouseEnter={() => { setDropDown(true)}}
            onMouseLeave={() => { setDropDown(false)}}
          >
            <p className={styles.navbar__hover__underline}>Societies</p>
              {
                dropDown && (
                <ul className={styles.nav_list}>
                  <Divider />
                    <li>
                  <Link href={"/pes"}>
                      Power & Energy
                  </Link>
                    </li>
                  <Divider />
                    <li>
                  <Link href={"/robotics"}>
                      Robotics
                  </Link>
                    </li>
                  <Divider />
                  <li>
                    <Link href={"/rfs"}>
                        Radio Frequency
                    </Link>
                  </li>
                </ul>
                )
              }
            </li>
        </div>
        <HamburgerMenu burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
      </header>
      {burgerOpen && (
        <ul className={styles.mobile_nav_list}>
          <Divider />
          <Link href={"/"}>
          <li>
            Home
          </li>
          </Link>
          <Divider />
          <Link href={"/events"}>
          <li>
            Events
          </li>
          </Link>
          <Divider />
          <Link href={"/tutoring"}>
          <li>
            Tutoring
          </li>
          </Link>
          <Divider />
          <Link href={"/committees"}>
          <li>
            Committees
          </li>
          </Link>
          <Divider />
          <li
            onMouseEnter={() => { setDropDown(true)}}
            onMouseLeave={() => { setDropDown(false)}}
          >
          Societies
          </li>
          <Divider />
          {
            dropDown && ( <ul
            onMouseEnter={() => { setDropDown(true)}}
            onMouseLeave={() => { setDropDown(false)}}
            >
                <li>
              <Link href={"/pes"}>
                  Power & Energy
              </Link>
                </li>
              <Divider />
                <li>
              <Link href={"/robotics"}>
                  Robotics
              </Link>
                </li>
              <Divider />
              <li>
                <Link href={"/rfs"}>
                    Radio Frequency
                </Link>
              </li>
            </ul>)
          }
          
        </ul>
      )}
    </>
  );
}
