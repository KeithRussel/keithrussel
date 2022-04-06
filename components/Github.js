import React from 'react';
import styles from '../styles/Github.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Github = () => {
  return (
    <div className={styles.github}>
      <Link href='https://github.com/KeithRussel'>
        <a target='_blank'>Made by: Russel</a>
      </Link>
      <Image src='/uploads/Octocat.png' alt='Octocat' width={45} height={40} />
    </div>
  );
};

export default Github;
