import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import {
  faBars,
  faTimes,
  faHome,
  faBook,
  faBlog,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function useOuterClick(callback) {
  const innerRef = useRef();
  const callbackRef = useRef();

  // set current callback in ref, before second useEffect uses it
  useEffect(() => {
    // useEffect wrapper to be safe for concurrent mode
    callbackRef.current = callback;
  });

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);

    // read most recent callback and innerRef dom node from refs
    function handleClick(e) {
      if (
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.target)
      ) {
        callbackRef.current(e);
      }
    }
  }, []); // no need for callback + innerRef dep

  return innerRef; // return ref; client can omit `useRef`
}

const Header = () => {
  const [click, setClick] = useState(false);
  const innerRef = useOuterClick((e) => {
    if (click) {
      setClick(false);
    }
  });

  const handleClick = () => setClick(!click);

  return (
    <div className={styles.header}>
      <div
        className={click ? styles.mobileHeaderNav : styles.hide}
        ref={innerRef}
      >
        <ul>
          <li>
            <FontAwesomeIcon icon={faHome} />
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faBook} />
            <Link href="/portfolio">
              <a>Portfolio</a>
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faBlog} />
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faAddressCard} />
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.wrapper}>
        <h2>KeithRussel</h2>
        <ul className={styles.headerNav}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a>Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
        <div className={styles.mobileNav} onClick={handleClick}>
          {click ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
