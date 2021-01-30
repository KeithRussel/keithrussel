import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';

function HomePage() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div>
          <Image
            src='/uploads/image1.jpg'
            alt='myimg'
            width={500}
            height={500}
          />
        </div>

        <div className={styles.details}>
          <h2>Personal Details:</h2>
          <div className={styles.row}>
            <h4>Name:</h4> Russel Maniacop
          </div>
          <div className={styles.row}>
            <h4>Graduated From:</h4> University of Luzon
          </div>
          <div className={styles.row}>
            <h4>Interests:</h4>{' '}
            <ul>
              <li>Youtube tutorials, </li>
              <li>Chess, </li>
              <li>Dota2, </li>
              <li>Coding, </li>
              <li>Cryptocurrency trading </li>
            </ul>
          </div>
          <div className={styles.row}>
            <h4>Web Stacks:</h4>
            <div>
              <ul>
                <li>HTML, </li>
                <li>CSS/SASS, </li>
                <li>Javascript, </li>
                <li>PHP, </li>
                <li>Wordpress, </li>
                <li>Bootstrap, </li>
                <li>Reactjs, </li>
                <li>Nodejs, </li>
                <li>Expressjs, </li>
                <li>Redux</li>
              </ul>
            </div>
          </div>
          <div className={styles.row}>
            <h4>Experience:</h4>
            <div className={styles.exp}>
              <p>
                Code Unicorn - <span>Entry Web Developer (2016-2017)</span>
                <div>Urdaneta City, Pangasinan</div>
              </p>
              <p>
                Pixelhub - <span>Jr. Web Developer (2017-2018)</span>
                <div>Dagupan City, Pangasinan</div>
              </p>
              <p>
                Xin Marketing - <span>Project Specialist (2018-2019)</span>
                <div>Taguig City, BGC</div>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.border}></div>
      <section id={styles.portfolio}>
        <div>
          <h1>Portfolio</h1>
          <div className={styles.portfolioImg}>
            <div>
              <Image
                src='/uploads/sample.jpg'
                alt='myimg'
                width={500}
                height={500}
              />
              <Link href='/'>
                <a>
                  <h4>Watergate</h4>
                </a>
              </Link>
            </div>
            <div>
              <Image
                src='/uploads/sample.jpg'
                alt='myimg'
                width={500}
                height={500}
              />
              <Link href='/'>
                <a>
                  <h4>Watergate</h4>
                </a>
              </Link>
            </div>
            <div>
              <Image
                src='/uploads/sample.jpg'
                alt='myimg'
                width={500}
                height={500}
              />
              <Link href='/'>
                <a>
                  <h4>Watergate</h4>
                </a>
              </Link>
            </div>
            <div>
              <Image
                src='/uploads/sample.jpg'
                alt='myimg'
                width={500}
                height={500}
              />
              <Link href='/'>
                <a>
                  <h4>Watergate</h4>
                </a>
              </Link>
            </div>
            <div>
              <Image
                src='/uploads/sample.jpg'
                alt='myimg'
                width={500}
                height={500}
              />
              <Link href='/'>
                <a>
                  <h4>Watergate</h4>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
