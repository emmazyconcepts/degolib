import "@/styles/globals.css";

import { Layout } from "../components";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

import "../styles/globals.css";
import { StateContext } from "../context/StateContext";

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Head>
        <link rel="shortcut icon" href="/1678107511_litbatt24_logo_8.jpeg" />
      </Head>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
