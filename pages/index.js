import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import Stacks from "../components/Stacks";
import Tools from "../components/Tools";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
// import {  } from '@fortawesome/free-solid-svg-icons';

function HomePage() {
  return (
    <>
      <Head>
        <title>Keith Russel | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <div className={styles.hero}>
          <div className={styles.bgImg}></div>
          <div className={styles.p1}>
            <Image
              src="/uploads/image1.jpg"
              alt="myimg"
              width={200}
              height={200}
              loading="lazy"
            />
            <h1>
              Hello, I'm <span>Russel Maniacop</span>
            </h1>
            <p>
              Looking for an entry/junior level as Reactjs or MERN Stack
              Developer.
            </p>
            <div>
              <ul>
                <li>
                  <Link href="https://github.com/KeithRussel">
                    <a target="_blank">
                      <FontAwesomeIcon icon={faGithub} size="2x" />
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
                  <Link href="https://codepen.io/keiiiiithh">
                    <a target="_blank">
                      <FontAwesomeIcon icon={faCodepen} size="2x" />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Stacks />
      <Tools />
    </>
  );
}

export default HomePage;
