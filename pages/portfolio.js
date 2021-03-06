import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';

const portfolio = () => {
  return (
    <>
      <Head>
        <title>Keith Russel | Portfolio</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <section id={styles.portfolio}>
        <div className={styles.container}>
          <h1>Portfolio</h1>
          <div className={styles.portfolioImg}>
            <div className={styles.border}>
              <figure>
                <Image
                  src='/uploads/brgyforum.png'
                  alt='brgyforum portfolio site'
                  width={500}
                  height={500}
                />
              </figure>
              <Link href='https://murmuring-everglades-39775.herokuapp.com/'>
                <a target='_blank'>
                  <h4>Brgy Forum</h4>
                </a>
              </Link>
            </div>
            <div className={styles.border}>
              <figure>
                <Image
                  src='/uploads/shopit.png'
                  alt='shopit portfolio site'
                  width={500}
                  height={500}
                />
              </figure>
              <Link href='https://shopitapp.herokuapp.com/'>
                <a target='_blank'>
                  <h4>Shopit</h4>
                </a>
              </Link>
            </div>
            <div className={styles.border}>
              <figure>
                <Image
                  src='/uploads/studentmanager.png'
                  alt='studentmanager portfolio site'
                  width={500}
                  height={500}
                />
              </figure>
              <Link href='https://intense-depths-40828.herokuapp.com/'>
                <a target='_blank'>
                  <h4>Student Manager</h4>
                </a>
              </Link>
            </div>
            <div className={styles.border}>
              <figure>
                <Image
                  src='/uploads/pangasinan.jpg'
                  alt='pangasinan portfolio site'
                  width={500}
                  height={500}
                />
              </figure>
              <Link href='https://www.pangasinan.gov.ph/'>
                <a target='_blank'>
                  <h4>Pangasinan</h4>
                </a>
              </Link>
            </div>
            <div className={styles.border}>
              <figure>
                <Image
                  src='/uploads/watergate.jpg'
                  alt='watergate portfolio site'
                  width={500}
                  height={500}
                />
              </figure>
              <Link href='https://www.watergatehotelbutuan.ph/'>
                <a target='_blank'>
                  <h4>Watergate</h4>
                </a>
              </Link>
            </div>
            <div className={styles.border}>
              <figure>
                <Image
                  src='/uploads/weatherapp.png'
                  alt='weatherapp portfolio site'
                  width={500}
                  height={500}
                />
              </figure>
              <Link href='https://weathertrackerapp.netlify.app/'>
                <a target='_blank'>
                  <h4>Weatherapp</h4>
                </a>
              </Link>
            </div>
            <div className={styles.border}>
              <figure>
                <Image
                  src='/uploads/pokedexplorer.png'
                  alt='pokedex portfolio site'
                  width={500}
                  height={500}
                />
              </figure>
              <Link href='https://p0kedexplorer.netlify.app/'>
                <a target='_blank'>
                  <h4>Pokedexplorer</h4>
                </a>
              </Link>
            </div>
            <div className={styles.border}>
              <figure>
                <Image
                  src='/uploads/laundrylog.png'
                  alt='laundrylog portfolio site'
                  width={500}
                  height={500}
                />
              </figure>
              <Link href='https://desolate-shelf-62199.herokuapp.com/'>
                <a target='_blank'>
                  <h4>Laundry log</h4>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default portfolio;
