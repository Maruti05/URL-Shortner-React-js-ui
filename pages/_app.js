import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
function MyApp({ Component, pageProps }) {
 
  return (
    <>
      <Head>
      <title>Short.url Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
