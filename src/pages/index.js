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
import Murata from "@/assets/murata.png";
import Intertek from "@/assets/intertek.png";
import Texas from "@/assets/texas.png";


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
        {/*What we do*/}
        <WhatWeDo />
        <GridSection />
        <div className={styles.sponsors__section}>
          <div className={styles.sponsors__title}>Corporate Sponsors</div>
          <div className={styles.logo__section}>
            <div className={styles.texas}>
              <Image
                
                src={Texas}
                alt="texas-instruments-logo"
             
              />
            </div>
            <div className={styles.murata}>
              <Image
                
                src={Murata}
                alt="murata-logo"
          
                
              />
            </div>
            <div className={styles.intertek}>
            <Image
              
              alt="intertek-logo"
              src={Intertek}
              
            />
            </div>
          </div>
        </div>
        <NewsLetterAbout />
      </main>
    </>
  );
}
