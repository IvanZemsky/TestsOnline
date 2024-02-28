import React from "react";
import styles from "./Intro.module.css";
import { Link } from "react-router-dom";

const Intro = () => {
   return (
      <section className={styles.intro}>
         <h1 className={styles.title}>
            <p>Добро пожаловать в TestsOnline:</p>
            <p>Проверьте свои знания в разных дисциплинах!</p>
         </h1>
         <hr className={styles.line} />
         <p className={styles.info}>
            Мы предлагаем широкий набор тестов по разнообразным дисциплинам для
            проверки своих знаний. Здесь вы можете найти тесты по математике,
            программированию, истории, изобразительному искусству, etc.
         </p>
         <Link className={styles.link} to="tests">
            Попробуйте!
         </Link>
      </section>
   );
};

export default Intro;
