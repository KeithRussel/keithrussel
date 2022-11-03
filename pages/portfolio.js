import React, { useState } from "react";
import Head from "next/head";
import Portfolios from "../components/Portfolio/Portfolios";

const portfolio = () => {
  return (
    <>
      <Head>
        <title>Keith Russel | Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Portfolios />
    </>
  );
};

export default portfolio;
