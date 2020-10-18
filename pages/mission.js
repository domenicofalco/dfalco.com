import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>dfalco.com - mission</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Next.js - mission</h1>
      <Link href="/">go to homepage (CSR)</Link>
      <Link href="/about">go to about page (CSR)</Link>
    </div>
  );
}
