import React from "react";
import styles from "./TestCard.module.css";

const TestCard = ({ test }) => {
   const { name, desc, cover } = test;

   return (
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
      </div>
   );
};

export default TestCard;
