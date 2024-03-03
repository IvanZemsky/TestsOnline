import React, { memo } from "react";
import styles from "./TestCard.module.css";
import { Link } from "react-router-dom";

const TestCard = memo(({ test }) => {
   const { id, name, desc, cover } = test;

   return (
      <div className={styles.testCardBorder}>
         <div className={styles.testCard}>
            <div className={styles.imgWrap}>
               <img
                  className={styles.testImg}
                  src={cover}
                  alt={`Cover of the test: ${name}`}
               />
            </div>
            <div className={styles.info}>
               <h2 className={styles.name}>{name}</h2>
               <p className={styles.desc}>{desc}</p>
            </div>

            <Link
               className={styles.startBtn}
               to={`/tests/${id}`}
            >
               Начать
            </Link>
         </div>
      </div>
   );
});

export default TestCard;
