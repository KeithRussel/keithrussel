import React, {useState} from 'react';
import Image from 'next/image';
import styles from '../styles/Layout.module.css';

const Tools = () => {
  const [vscode, setVsCode] = useState(false)
  const [postman, setPostman] = useState(false)
  const [bootstrap, setBootstrap] = useState(false)
  const [npm, setNpm] = useState(false)
  const [figma, setFigma] = useState(false)
  const [github, setGithub] = useState(false)

  const handleMouseEnter = e => {
    if (e.target.alt === 'vscode') {
      setVsCode(true);
    } else if (e.target.alt === 'postman') {
      setPostman(true);
    } else if (e.target.alt === 'bootstrap') {
      setBootstrap(true);
    } else if (e.target.alt === 'npm') {
      setNpm(true);
    } else if (e.target.alt === 'figma') {
      setFigma(true);
    } else if (e.target.alt === 'github') {
      setGithub(true);
    }
  }

  const handleMouseLeave = (e) => {
    setVsCode(false);
    setPostman(false);
    setBootstrap(false);
    setNpm(false);
    setFigma(false);
    setGithub(false);
  };

  return (
    <section id={styles.tools}>
      <div className={styles.container}>
        <h1>Others</h1>
        <div className={styles.dGrid}>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {!vscode && (
              <Image
                id='test'
                src='https://user-images.githubusercontent.com/806104/98771085-46d8f180-23a9-11eb-9caf-9d4c0f605749.png'
                alt='vscode'
                width={250}
                height={250}
              />
            )}
            {vscode && (
              <div className={styles.stackBox}>
                <div>VSCODE</div>
              </div>
            )}
          </div>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {!postman && (
              <Image
                id='test'
                src='https://media.slid.es/uploads/327261/images/5065937/pm-logo-vert.png'
                alt='postman'
                width={250}
                height={250}
              />
            )}
            {postman && (
              <div className={styles.stackBox}>
                <div>Postman</div>
              </div>
            )}
          </div>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {!bootstrap && (
              <Image
                id='test'
                src='https://img.icons8.com/color/480/000000/bootstrap.png'
                alt='bootstrap'
                width={250}
                height={250}
              />
            )}
            {bootstrap && (
              <div className={styles.stackBox}>
                <div>Bootstrap</div>
              </div>
            )}
          </div>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {!npm && (
              <Image
                id='test'
                src='https://img.icons8.com/color/480/000000/npm.png'
                alt='npm'
                width={250}
                height={250}
              />
            )}
            {npm && (
              <div className={styles.stackBox}>
                <div>NPM</div>
              </div>
            )}
          </div>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {!figma && (
              <Image
                id='test'
                src='https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'
                alt='figma'
                width={250}
                height={250}
              />
            )}
            {figma && (
              <div className={styles.stackBox}>
                <div>Figma</div>
              </div>
            )}
          </div>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {!github && (
              <Image
                id='test'
                src='https://img.icons8.com/fluent/480/000000/github.png'
                alt='github'
                width={250}
                height={250}
              />
            )}
            {github && (
              <div className={styles.stackBox}>
                <div>Github</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
