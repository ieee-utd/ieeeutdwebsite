import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>IEEE UTD Website</title>
        <meta
          name="description"
          content="This is the website of the UTD branch of IEEE"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p>James was here</p>
      </main>
    </>
  );
}
