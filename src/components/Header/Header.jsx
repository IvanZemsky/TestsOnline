import React, { memo, useEffect } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {

   return (
      <header className={styles.header}>
         <div className={[styles.content, 'wrapper'].join(' ')}>
            <Link to="/" className={styles.logo}>
               TestsOnline
            </Link>
            <Link to="/tests" className={styles.link}>
               <span>Тесты</span>
            </Link>
         </div>
      </header>
   );
};

export default Header;
