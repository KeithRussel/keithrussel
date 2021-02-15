import React, { useRef, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';
import InterestList from '../components/InterestList';
import StackList from '../components/StacksList';

function HomePage() {
  return (
    <>
      <Head>
        <title>Keith Russel | Home</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className={styles.hero}>
        <div>
          <Image
            src='/uploads/image1.jpg'
            alt='myimg'
            width={200}
            height={200}
            loading='lazy'
          />
          <h1>
            Hello, I'm <span>Russel Maniacop</span>
          </h1>
          <p>Looking for entry level or internship to enhance my skills.</p>
        </div>
      </div>
      <div className={styles.container}>
        <h1>Stacks</h1>
        <div className={styles.dGrid}>
          <Image
            src='/uploads/reactjs.png'
            alt='reactjs'
            width={500}
            height={500}
          />
          <Image
            src='/uploads/reactjs.png'
            alt='reactjs'
            width={500}
            height={500}
          />
          <Image
            src='/uploads/reactjs.png'
            alt='reactjs'
            width={500}
            height={500}
          />
          <Image
            src='/uploads/reactjs.png'
            alt='reactjs'
            width={500}
            height={500}
          />
          <Image
            src='/uploads/reactjs.png'
            alt='reactjs'
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
