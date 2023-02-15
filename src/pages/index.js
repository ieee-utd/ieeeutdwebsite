import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <main>Home page</main>
    </>
  );
}
