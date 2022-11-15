import React, { useState } from "react";
import styles from "../../styles/portfoliopage/Portfolio.module.css";
import PortfolioItem from "./PortfolioItem";

const Portfolios = () => {
  const [state, setState] = useState([
    {
      title: "Email Tool",
      link: "https://emailtools.onrender.com/",
      lists: [
        "Node - ExpressJS",
        "Json Web Token",
        "MongoDB",
        "ReactJS",
        "React Router Dom",
        "React Toastify",
        "Redux Toolkit (RTK)",
        "Css Library: Emotion React-Styled",
        "Google Developer Tools",
        "Nodemailer API",
      ],
      img: "/uploads/emailtool.png",
    },
    {
      title: "Bulletin Board",
      link: "http://bulletinboard_bykit.surge.sh/",
      lists: [
        "ReactJS",
        "React Router DOM",
        "React Icons",
        "React uuid",
        "Css Library: Emotion React-Styled",
      ],
      img: "/uploads/bulletinboard.png",
    },
    {
      title: "Reddit Client",
      link: "http://redditminimal-byrussel.surge.sh/",
      lists: [
        "ReactJS",
        "Css Library: Emotion React-Styled",
        "Redux ToolKit(RTK)",
        "Reddit API",
      ],
      img: "/uploads/redditapp.png",
    },
    {
      title: "MK Javier",
      link: "https://mkjavier.com/",
      lists: ["NextJS", "ReactJS", "React Bootstrap", "SEO"],
      img: "/uploads/mkjavier.png",
    },
    {
      title: "Emailnator Mobile App (Previous name Gmailnator)",
      link: "https://www.emailnator.com/",
      lists: ["React Native", "ReactJS", "Redux", "Axios", "CSS"],
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
    {
      title: "Business Listing Site (Work In Progress)",
      link: "https://coral-app-zz4qu.ondigitalocean.app/",
      lists: [
        "NextJS",
        "ReactJS",
        "Emotion React-Styled CSS Library",
        "Strapi for Content Management System",
        "Sqlite DB for Development",
        "Postgresql for Production",
        "Deployed in Digital Ocean",
      ],
      img: "/uploads/listingsite-wip.png",
      alt: "Work In Progress",
      notice: "This Project is still Work In Progress",
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
