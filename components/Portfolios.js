import React, { useState } from "react";
// import styles from "../styles/Layout.module.css";
import styles from "../styles/portfoliopage/Portfolio.module.css";
import PortfolioItem from "./PortfolioItem";

const Portfolios = () => {
  const [state, setState] = useState([
    {
      title: "MK Javier",
      link: "https://mkjavier.com/",
      lists: ["NextJS", "ReactJS", "React Bootstrap", "SEO"],
      img: "/uploads/mkjavier.png",
    },
    {
      title: "Gmailnator Mobile App (Not on Playstore yet)",
      link: "https://www.gmailnator.com/",
      lists: ["React Native", "ReactJS", "Redux", "Axios"],
      img: "/uploads/gmailnator_p.png",
    },
    {
      title: "Shop It",
      link: "https://shopitapp.herokuapp.com/",
      lists: [
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "ReactJS",
        "JWT auth",
        "Redux",
        "React Bootstrap",
        "React Paypal",
        "Multer",
      ],
      img: "/uploads/shopit.png",
    },
    {
      title: "Student Manager",
      link: "https://intense-depths-40828.herokuapp.com/",
      lists: [
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "ReactJS",
        "JWT auth",
        "Context API",
        "Axios",
        "React Bootstrap",
      ],
      img: "/uploads/studentmanager.png",
    },
    {
      title: "Pangasinan",
      link: "https://www.pangasinan.gov.ph/",
      lists: [
        "HTML",
        "CSS",
        "Javascript",
        "PHP",
        "Wordpress",
        "Advance Custom Fields",
      ],
      img: "/uploads/pangasinan.png",
    },
    {
      title: "Watergate",
      link: "https://www.watergatehotelbutuan.ph/",
      lists: [
        "HTML",
        "CSS",
        "Javascript",
        "PHP",
        "Wordpress",
        "Advance Custom Fields",
      ],
      img: "/uploads/watergate.png",
    },
    {
      title: "Personal Portfolio",
      link: "https://keithrussel.vercel.app",
      lists: [
        "CSS",
        "Javascript",
        "Reactjs",
        "Nextjs",
        "Ghost CMS for posting blogs",
      ],
      img: "/uploads/portfolio.png",
    },
  ]);

  return (
    <>
      <div className={styles.container}>
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

export default Portfolios;
