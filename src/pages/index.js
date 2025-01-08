import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Content from "@/components/Content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Appscrip</title>
        <meta name="description" content="This is PLP for Appscrip" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://db.onlinewebfonts.com/c/ca671f001f1c1ac07ba12ef439e7e65a?family=Simplon+Norm"
          rel="stylesheet"
        ></link>
      </Head>
      <div className={styles.body}>
        <Header />
        <div className={styles.hr}></div>
        <Content />
        <Footer />
      </div>
    </>
  );
}
