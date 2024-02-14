import React, { memo, useEffect } from "react";
import styles from "./Header.module.css";

const Header = () => {
   useEffect(() => console.log("header render " + Date.now()));

   return (
      <header className={styles.header}>
         <div className={[styles.content, 'wrapper'].join(' ')}>
            <a href="#" className={styles.logo}>
               QuestsWebSite
            </a>
         </div>
      </header>
   );
};

export default Header;
