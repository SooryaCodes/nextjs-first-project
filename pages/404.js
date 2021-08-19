import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
const router = useRouter()
  useEffect(() => {
    setTimeout(() =>{
      router.push("/")
    },10000)
  },[]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Coder.Dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Ooops..!&nbsp;
          <a href="https://instagram.com/_coder.dev" target="blank">
            404
          </a>
        </h1>
        <p className={styles.code}>Page not found.</p>
        <Link href="/">
          <a className={styles.btn}>Go to home</a>
        </Link>
      </main>
    </div>
  );
}