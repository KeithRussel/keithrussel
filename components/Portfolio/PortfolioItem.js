import React from "react";
import Image from "next/image";
import styles from "../../styles/portfoliopage/Portfolio.module.css";
import Link from "next/link";

const PortfolioItem = ({ item }) => {
  // let { item } = props;

  return (
    <>
      <div className={styles.row} key={item.title}>
        <div className={styles.col}>
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
        <div className={styles.col}>
          {item.notice && <p className={styles.notice}>{item.notice}</p>}
          <Image
            // src="https://picsum.photos/1300/640"
            src={item.img}
            alt={item.alt}
            width={1300}
            height={440}
            objectFit="contain"
          />
        </div>
      </div>
    </>
  );
};

export default PortfolioItem;
