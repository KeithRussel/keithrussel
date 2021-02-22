import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Layout.module.css';
import Stacks from '../components/Stacks';
import Tools from '../components/Tools';

function HomePage() {
  return (
    <>
      <Head>
        <title>Keith Russel | Home</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div>
        <div className={styles.hero}>
          <div className={styles.bgImg}></div>
          <div className={styles.p1}>
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
            <p>
              Looking for an entry level or internship as Reactjs & Nodejs
              Developer.
            </p>
          </div>
        </div>
      </div>
      <Stacks />
      <Tools />
    </>
  );
}

export default HomePage;
