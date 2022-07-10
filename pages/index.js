import React from "react";
import Head from "next/head";
import Skills from "../components/Skills";
import Hero from "../components/Hero";

function HomePage() {
  return (
    <>
      <Head>
        <title>Keith Russel | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <Skills />
    </>
  );
}

export default HomePage;
