import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Matheus Raduan</title>
        <meta
          name="description"
          content="Website of web developer Matheus Raduan"
        />
      </Head>
      <Layout>
        <Hero />
      </Layout>
    </>
  );
}
