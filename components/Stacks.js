import React from 'react';
import Image from 'next/image';
import styles from '../styles/Layout.module.css';

const Stacks = () => {
  return (
    <section id={styles.stacks}>
      <div className={styles.container}>
        <h1>Stacks</h1>
        <div className={styles.dGrid}>
          <Image
            src='https://img.icons8.com/color/480/000000/html-5.png'
            alt='reactjs'
            width={250}
            height={250}
          />
          <Image
            src='https://img.icons8.com/color/480/000000/css3.png'
            alt='reactjs'
            width={250}
            height={250}
          />
          <Image
            src='https://img.icons8.com/color/480/000000/javascript.png'
            alt='reactjs'
            width={250}
            height={250}
          />
          <Image
            src='https://img.icons8.com/officel/480/000000/php-logo.png'
            alt='reactjs'
            width={250}
            height={250}
          />
          <Image
            src='https://img.icons8.com/color/480/000000/wordpress.png'
            alt='reactjs'
            width={250}
            height={250}
          />
          <Image
            src='https://img.icons8.com/plasticine/480/000000/react.png'
            alt='reactjs'
            width={250}
            height={250}
          />
          <Image
            src='https://img.icons8.com/color/480/000000/nodejs.png'
            alt='reactjs'
            width={250}
            height={250}
          />
          <Image
            src='https://img.icons8.com/color/480/000000/mongodb.png'
            alt='reactjs'
            width={250}
            height={250}
          />
          <Image
            src='/uploads/express.png'
            alt='reactjs'
            width={250}
            height={250}
            className={styles.py}
          />
          <Image
            src='https://img.icons8.com/color/480/000000/redux.png'
            alt='reactjs'
            width={250}
            height={250}
            className={styles.py}
          />
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png'
            alt='reactjs'
            width={250}
            height={250}
            className={styles.py}
          />
          <Image
            src='https://img.icons8.com/color/480/000000/api-settings.png'
            alt='reactjs'
            width={250}
            height={250}
            className={styles.py}
          />
        </div>
      </div>
    </section>
  );
};

export default Stacks;
