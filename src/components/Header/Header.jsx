import React, { memo, useEffect } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {

   return (
      <header className={styles.header}>
         <div className={[styles.content, 'wrapper'].join(' ')}>
            <a href="#" className={styles.logo}>
               QuestsWebSite
            </a>
            <Link to="/">Тесты</Link>
         </div>
      </header>
   );
};

export default Header;
