import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.mobileHeaderNav}>
        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About Us</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.wrapper}>
        <h2>My Logo</h2>
        <ul className={styles.headerNav}>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About Us</a>
            </Link>
          </li>
        </ul>
        <div className={styles.mobileNav}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </div>
  );
};

export default Header;
