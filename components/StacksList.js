import React, { useRef, useEffect } from 'react';
import styles from '../styles/Layout.module.css';

const StackList = () => {
  const listEl = useRef([]);

  const addComma = () => {
    let list = listEl.current.children;

    const listArray = [...list];

    listArray.forEach((el) => (el.innerHTML += ',&nbsp;'));
  };

  useEffect(() => {
    addComma();
  }, []);
  return (
    <div className={styles.row}>
      <h4>Web Stacks:</h4>
      <div>
        <ul ref={listEl}>
          <li>HTML</li>
          <li>CSS/SASS</li>
          <li>Javascript</li>
          <li>PHP</li>
          <li>Wordpress</li>
          <li>Bootstrap</li>
          <li>Reactjs</li>
          <li>Nodejs</li>
          <li>Expressjs</li>
          <li>Redux</li>
        </ul>
      </div>
    </div>
  );
};

export default StackList;
