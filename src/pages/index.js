import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logo from "@/assets/ieeelogotransparent.png";
import Image from "next/image";
import CarouselComponent from "@/components/CarouselComponent";
import WhoWeAre from "@/components/WhoWeAre";
import NewsLetterAbout from "@/components/NewsLetterAbout";
import WhatWeDo from "@/components/WhatWeDo";
import GridSection from "@/components/GridPhotos";
import Cogan from "@/assets/Cogan.jpg";
import Andrea from "@/assets/Andrea.jpg";
import Babak from "@/assets/Fahimi.jpg";
import Murata from "@/assets/murata.png";
import Intertek from "@/assets/intertek.png";
import Texas from "@/assets/texas.png";
import committeeMembers from "@/components/committeeMembers";

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
        <div>
          <Image src={require(committeeMembers[0]["src"])} alt="image1" />
          <Image src={require(committeeMembers[1]["src"])} alt="image2" />
          <Image src={require(committeeMembers[2]["src"])} alt="image3" />
          <Image src={require(committeeMembers[3]["src"])} alt="image4" />
        </div>
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
        {/*What we do*/}
        <WhatWeDo />
        <GridSection />
        <div className={styles.sponsors__section}>
          <div className={styles.sponsors__title}>Corporate Sponsors</div>
          <div className={styles.logo__section}>
            <Image
              className={styles.texas}
              src={Texas}
              width={500}
              height={250}
            />
            <Image
              className={styles.murata}
              src={Murata}
              width={500}
              height={250}
            />
            <Image
              className={styles.intertek}
              src={Intertek}
              width={500}
              height={250}
            />
          </div>
        </div>
        <NewsLetterAbout />
      </main>
    </>
  );
}
