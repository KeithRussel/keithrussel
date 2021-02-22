import React from 'react';
import Head from 'next/head';
import styles from '../styles/Layout.module.css';

const contact = () => {
  return (
    <>
      <Head>
        <title>Keith Russel | Contact</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <section id={styles.contact}>
        <div className={styles.container}>
          <h1>Contact</h1>
          <p>Work In Progress... Contact Page</p>
        </div>
      </section>
    </>
  );
};

export default contact;
