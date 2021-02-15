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
        <div className={styles.heroWrapper}>
          <div>
            <Image
              src='/uploads/image1.jpg'
              alt='myimg'
              width={500}
              height={500}
              loading='lazy'
            />
          </div>

          <div className={styles.details}>
            <h1>Personal Details:</h1>
            <div className={styles.row}>
              <h4>Name:</h4> Russel Maniacop
            </div>
            <div className={styles.row}>
              <h4>Email:</h4>{' '}
              <Link href='mailto:keithmaniacop@gmail.com'>
                <a target='_blank'>keithmaniacop@gmail.com</a>
              </Link>
            </div>
            <div className={styles.row}>
              <h4>Graduated From:</h4> University of Luzon
            </div>
            <InterestList />
            <StackList />
            <div className={styles.row}>
              <h4>Experience:</h4>
              <div className={styles.exp}>
                <p>
                  Fresh Design Studio -{' '}
                  <span>Entry Web Developer (2016-2017)</span>
                  <p>Urdaneta City, Pangasinan</p>
                </p>
                <p>
                  Pixelhub - <span>Jr. Web Developer (2017-2018)</span>
                  <p>Dagupan City, Pangasinan</p>
                </p>
                <p>
                  Xin Marketing - <span>Project Specialist (2018-2019)</span>
                  <p>Taguig City, BGC</p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.border}></div>
      </div>
    </>
  );
}

export default HomePage;
