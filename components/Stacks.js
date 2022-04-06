import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Layout.module.css';

const Stacks = () => {
  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);
  const [js, setJs] = useState(false);
  const [php, setPhp] = useState(false);
  const [wp, setWp] = useState(false);
  const [react, setReact] = useState(false);
  const [node, setNode] = useState(false);
  const [mongo, setMongo] = useState(false);
  const [express, setExpress] = useState(false);
  const [redux, setRedux] = useState(false);
  const [next, setNext] = useState(false);
  const [api, setApi] = useState(false);

  const handleMouseEnter = (e) => {
    if (e.target.alt === 'html') {
      setHtml(true);
    } else if (e.target.alt === 'css') {
      setCss(true);
    } else if (e.target.alt === 'js') {
      setJs(true);
    } else if (e.target.alt === 'php') {
      setPhp(true);
    } else if (e.target.alt === 'wp') {
      setWp(true);
    } else if (e.target.alt === 'react') {
      setReact(true);
    } else if (e.target.alt === 'node') {
      setNode(true);
    } else if (e.target.alt === 'mongo') {
      setMongo(true);
    } else if (e.target.alt === 'express') {
      setExpress(true);
    } else if (e.target.alt === 'redux') {
      setRedux(true);
    } else if (e.target.alt === 'next') {
      setNext(true);
    } else if (e.target.alt === 'api') {
      setApi(true);
    }
  };

  const handleMouseLeave = (e) => {
    setHtml(false);
    setCss(false);
    setJs(false);
    setPhp(false);
    setWp(false);
    setReact(false);
    setNode(false);
    setMongo(false);
    setExpress(false);
    setRedux(false);
    setNext(false);
    setApi(false);
  };

  return (
    <section id={styles.stacks}>
      <div className={styles.container}>
        <h1>Stacks</h1>
        <div className={styles.dGrid}>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {!html && (
              <Image
                id='test'
                src='https://img.icons8.com/color/480/000000/html-5.png'
                alt='html'
                width={250}
                height={250}
              />
            )}
            {html && (
              <div className={styles.stackBox}>
                <div>HTML</div>
              </div>
            )}
          </div>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {!css && (
              <Image
                src='https://img.icons8.com/color/480/000000/css3.png'
                alt='css'
                width={250}
                height={250}
              />
            )}

            {css && (
              <div className={styles.stackBox}>
                <div>CSS</div>
              </div>
            )}
          </div>

          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {!js && (
              <Image
                src='https://img.icons8.com/color/480/000000/javascript.png'
                alt='js'
                width={250}
                height={250}
              />
            )}
            {js && (
              <div className={styles.stackBox}>
                <div>Javascript</div>
              </div>
            )}
          </div>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {!php && (
              <Image
                src='https://img.icons8.com/officel/480/000000/php-logo.png'
                alt='php'
                width={250}
                height={250}
              />
            )}
            {php && (
              <div className={styles.stackBox}>
                <div>PHP</div>
              </div>
            )}
          </div>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {!wp && (
              <Image
                src='https://img.icons8.com/color/480/000000/wordpress.png'
                alt='wp'
                width={250}
                height={250}
              />
            )}
            {wp && (
              <div className={styles.stackBox}>
                <div>Wordpress</div>
              </div>
            )}
          </div>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {!react && (
              <Image
                src='https://img.icons8.com/plasticine/480/000000/react.png'
                alt='react'
                width={250}
                height={250}
              />
            )}
            {react && (
              <div className={styles.stackBox}>
                <div>Reactjs</div>
              </div>
            )}
          </div>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {!node && (
              <Image
                src='https://img.icons8.com/color/480/000000/nodejs.png'
                alt='node'
                width={250}
                height={250}
              />
            )}
            {node && (
              <div className={styles.stackBox}>
                <div>Nodejs</div>
              </div>
            )}
          </div>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {!mongo && (
              <Image
                src='https://img.icons8.com/color/480/000000/mongodb.png'
                alt='mongo'
                width={250}
                height={250}
              />
            )}
            {mongo && (
              <div className={styles.stackBox}>
                <div>Mongodb</div>
              </div>
            )}
          </div>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {!express && (
              <Image
                src='/uploads/express.png'
                alt='express'
                width={250}
                height={250}
                className={styles.py}
              />
            )}
            {express && (
              <div className={styles.stackBox}>
                <div>Express</div>
              </div>
            )}
          </div>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {!redux && (
              <Image
                src='https://img.icons8.com/color/480/000000/redux.png'
                alt='redux'
                width={250}
                height={250}
                className={styles.py}
              />
            )}
            {redux && (
              <div className={styles.stackBox}>
                <div>Redux</div>
              </div>
            )}
          </div>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {!next && (
              <Image
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png'
                alt='next'
                width={250}
                height={250}
                className={styles.py}
              />
            )}
            {next && (
              <div className={styles.stackBox}>
                <div>Nextjs</div>
              </div>
            )}
          </div>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {!api && (
              <Image
                src='https://img.icons8.com/color/480/000000/api-settings.png'
                alt='api'
                width={250}
                height={250}
                className={styles.py}
              />
            )}
            {api && (
              <div className={styles.stackBox}>
                <div>Restful API</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stacks;
