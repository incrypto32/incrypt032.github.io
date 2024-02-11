import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Roboto_Mono as Font } from "@next/font/google";
import MainBio from "@/components/MainBio/MainBio";

const font = Font({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "auto",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Krishna</title>
        <meta
          name="description"
          content="Hi Im Krishnanand V P, Rust Engineer @ Edge & Node, Working on The Graph"
        />
        <meta property="og:title" content="Krishna" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.krishna.dev/" />
        <meta
          property="og:image"
          content="https://www.krishna.dev/images/krishna.jpeg"
        />
        <meta
          property="og:description"
          content="Hi Im Krishnanand V P, Rust Engineer @ Edge & Node, Working on The Graph"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${font.className}`}>
        <MainBio />
      </main>
    </>
  );
}
