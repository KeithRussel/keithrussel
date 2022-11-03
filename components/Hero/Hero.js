import React from "react";
import Image from "next/image";
import styles from "../../styles/landingpage/Hero.module.css";
import {
  faCodepen,
  faLinkedin,
  faGithub,
  faJsfiddle,
} from "@fortawesome/free-brands-svg-icons";
import SocialList from "./SocialList";

const scroll = () => {
  const section = document.querySelector("#skills");
  section.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Hero = ({ name, description, mypic }) => {
  return (
    <div id={styles.hero}>
      <div className={styles.hero_content}>
        <div className={styles.hero_name}>
          <Image src={mypic} alt="mypic" width={250} height={250} />
          <h1>
            Hello,{" "}
            <span>
              I'm {name} <span className={styles.wave}>👋</span>
            </span>
          </h1>
          <p>{description}</p>
          <button onClick={scroll}>Get Started</button>
        </div>
        <div className={styles.hero_links}>
          <h2>Repos and LinkedIn</h2>
          <ul>
            <SocialList
              url={"https://github.com/KeithRussel"}
              icon={faGithub}
            />
            <SocialList
              url={"https://codepen.io/keiiiiithh"}
              icon={faCodepen}
            />
            <SocialList
              url={"https://www.linkedin.com/in/russel-maniacop-12981a161/"}
              icon={faLinkedin}
            />
            <SocialList
              url={"https://jsfiddle.net/user/keithrussel/fiddles/"}
              icon={faJsfiddle}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
