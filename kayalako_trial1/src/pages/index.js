import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Next.js Website</title>
        <meta name="description" content="Welcome to my Next.js website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Website!</h1>
        <p className={styles.description}>
          This is a simple website built with Next.js.
        </p>
      </main>
    </div>
  );
}
