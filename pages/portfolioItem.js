import React from "react";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import Link from "next/link";

const portfolioItem = (props) => {
  let { item } = props;

  return (
    <>
      <div className={styles.item} key={item.title}>
        <div className={styles.item_col}>
          <Link href={item.link}>
            <a target="_blank">
              <h1>{item.title}</h1>
            </a>
          </Link>
          <div>
            <ul className={styles.lists}>
              {item
                ? item.lists.map((list, index) => <li key={index}>{list}</li>)
                : null}
            </ul>
          </div>
        </div>
        <div className={styles.item_col}>
          <Image
            // src="https://picsum.photos/1300/640"
            src={item.img}
            alt="brgyforum portfolio site"
            width={1300}
            height={440}
            objectFit="contain"
          />
        </div>
      </div>
    </>
  );
};

export default portfolioItem;
