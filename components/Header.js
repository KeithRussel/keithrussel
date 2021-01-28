import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
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
      </div>
    </div>
  );
};

export default Header;
