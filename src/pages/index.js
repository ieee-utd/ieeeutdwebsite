import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logo from "@/assets/ieeelogotransparent.png";
import Image from "next/image";
import CarouselComponent from "@/components/CarouselComponent";
import WhoWeAre from "@/components/WhoWeAre";
import NewsLetterAbout from "@/components/NewsLetterAbout";

export default function Home() {
  return (
    <>
      <Head>
        <title>IEEE at UT Dallas - The Student Branch of IEEE at UTD</title>
        <meta
          name="description"
          content="This is the website of the UTD branch of IEEE"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.carousel}>
          <div className={styles.overlay}>
            <div className={styles.title__logo}>
              <Image src={logo} alt="transparentlogo" className={styles.logo} />
              <p className={styles.title}>IEEE UTD</p>
            </div>
            <span className={styles.typewriter}>
              <p>Advancing Technology for Humanity</p>
            </span>
          </div>
          <CarouselComponent />
        </div>
        {/*  About us */}
        <WhoWeAre />
        <NewsLetterAbout />
      </main>
    </>
  );
}
