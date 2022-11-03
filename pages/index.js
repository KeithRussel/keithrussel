import React from "react";
import Head from "next/head";
import Skills from "../components/Skills";
import Hero from "../components/Hero/Hero";

function HomePage() {
  return (
    <>
      <Head>
        <title>Keith Russel | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero
        mypic={"/uploads/image1.jpg"}
        name={"Russel Maniacop"}
        description={
          "I'm a code hobbyist specializing in Web Development. Bringing designs into live website and webapp projects."
        }
      />
      <Skills />
    </>
  );
}

export default HomePage;
