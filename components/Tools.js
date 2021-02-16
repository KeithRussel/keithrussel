import React from 'react';
import Image from 'next/image';
import styles from '../styles/Layout.module.css';

const Tools = () => {
  return (
    <section id={styles.tools}>
      <div className={styles.container}>
        <h1>Others</h1>
        <div className={styles.dGrid}>
          <Image
            src='https://user-images.githubusercontent.com/806104/98771085-46d8f180-23a9-11eb-9caf-9d4c0f605749.png'
            alt='reactjs'
            width={250}
            height={250}
          />
          <Image
            src='https://media.slid.es/uploads/327261/images/5065937/pm-logo-vert.png'
            alt='reactjs'
            width={250}
            height={250}
          />
          <Image
            src='https://img.icons8.com/color/480/000000/bootstrap.png'
            alt='reactjs'
            width={250}
            height={250}
          />
          <Image
            src='https://img.icons8.com/color/480/000000/npm.png'
            alt='reactjs'
            width={250}
            height={250}
          />
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'
            alt='reactjs'
            width={250}
            height={250}
          />
          <Image
            src='https://img.icons8.com/fluent/480/000000/github.png'
            alt='reactjs'
            width={250}
            height={250}
          />
        </div>
      </div>
    </section>
  );
};

export default Tools;
