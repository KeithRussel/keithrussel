import React from "react";
import Head from "next/head";
import Skills from "../components/Skills/Skills";
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
      <Skills
        skills_title={"Tech that I used and familiar with"}
        skills_description={
          "As a developer, I am heavily focused on using these tech stacks and passionate when comes to learning about the web for self-improvement and interest."
        }
        tools_title={"Tools & Others"}
        tools_description={
          "Here are the tools that I am using when developing a web projects."
        }
      />
    </>
  );
}

export default HomePage;
