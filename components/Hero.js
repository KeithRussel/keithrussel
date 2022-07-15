import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/landingpage/Hero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faLinkedin,
  faGithub,
  faJsfiddle,
} from "@fortawesome/free-brands-svg-icons";

const scroll = () => {
  const section = document.querySelector("#skills");
  section.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Hero = () => {
  return (
    <div id={styles.hero}>
      <div className={styles.hero_content}>
        <div className={styles.hero_name}>
          <Image
            src="/uploads/image1.jpg"
            alt="html"
            width={250}
            height={250}
          />
          <h1>
            Hello,{" "}
            <span>
              I'm Russel Maniacop <span className={styles.wave}>👋</span>
            </span>
          </h1>
          <p>
            I'm a code hobbyist specializing in Web Development. Bringing
            designs into live website and webapp projects.
          </p>
          <button onClick={scroll}>Get Started</button>
        </div>
        <div className={styles.hero_links}>
          <h2>Repos and LinkedIn</h2>
          <ul>
            <li>
              <Link href="https://github.com/KeithRussel">
                <a target="_blank">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://codepen.io/keiiiiithh">
                <a target="_blank">
                  <FontAwesomeIcon icon={faCodepen} size="2x" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/russel-maniacop-12981a161/">
                <a target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://jsfiddle.net/user/fiddles/all/">
                <a target="_blank">
                  <FontAwesomeIcon icon={faJsfiddle} size="2x" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
