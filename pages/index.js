import Head from "next/head";
import styles from "../styles/Home.module.css";

import Banner from "../compo/banner";

const handlebanner = () => {
  console.log("banner clicked");
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Louis Coffee Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText="View stores nearby" handleOnClick={handlebanner} />
      </main>
    </div>
  );
}
