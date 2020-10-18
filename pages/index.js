import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>dfalco.com - homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Next.js - this is the homepage</h1>
      <Link href="/mission">go to mission (CSR)</Link>
      <Link href="/about">go to about page (CSR)</Link>
    </div>
  );
}
