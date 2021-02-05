import React, { useRef, useEffect } from 'react';
import styles from '../styles/Layout.module.css';

const InterestList = () => {
  const listEl = useRef([]);

  const addComma = () => {
    let list = listEl.current.children;

    const listArray = [...list];

    listArray.forEach((el) => (el.innerHTML += ',&nbsp;'));

    console.log(listArray);
  };

  useEffect(() => {
    addComma();
  }, []);
  return (
    <div className={styles.row}>
      <h4>Interests:</h4>
      <ul ref={listEl}>
        <li>Youtube tutorials</li>
        <li>Chess</li>
        <li>Dota2</li>
        <li>Coding</li>
        <li>Cryptocurrency trading</li>
      </ul>
    </div>
  );
};

export default InterestList;
