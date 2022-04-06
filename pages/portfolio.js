import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Layout.module.css";
import PortfolioItem from "./portfolioItem";

const portfolio = () => {
  const [state, setState] = useState([
    {
      title: "MK Javier",
      url: "https://mkjavier.com/",
      lists: ["NextJS", "ReactJS", "React Bootstrap", "SEO"],
      img: "/uploads/mkjavier_p.png",
    },
    {
      title: "Gmailnator Mobile App (Not on Playstore yet)",
      url: "https://www.gmailnator.com/",
      lists: ["React Native", "ReactJS", "Redux", "Axios"],
      img: "/uploads/gmailnator_p.png",
    },
    {
      title: "Shop It",
      url: "https://shopitapp.herokuapp.com/",
      lists: [
        "ExpressJS",
        "MongoDB",
        "ReactJS",
        "NodeJS",
        "JWT auth",
        "Redux",
        "React Bootstrap",
        "React Paypal",
        "Multer",
      ],
      img: "/uploads/shopit.png",
    },
    {
      title: "Pangasinan",
      url: "https://www.pangasinan.gov.ph/",
      lists: ["Wordpress", "Sass", "PHP"],
      img: "/uploads/pangasinan_p.png",
    },
    {
      title: "Watergate",
      url: "https://www.watergatehotelbutuan.ph/",
      lists: ["Wordpress", "Sass", "PHP"],
      img: "/uploads/watergate_p.png",
    },
  ]);
  return (
    <>
      <Head>
        <title>Keith Russel | Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={styles.wrapper}>
        {state.map((item, index) => {
          return (
            <PortfolioItem
              item={item}
              arr={state}
              setItem={setState}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default portfolio;
