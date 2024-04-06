import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import ThemeBtn from './../UI/ThemeBtn/ThemeBtn';
import Logo from './../UI/Logo/Logo';

const Header = () => {
   return (
      <header className={styles.header}>
         <div className={[styles.content, "wrapper"].join(" ")}>
            <Logo />
            <nav className={styles.links}>
               <Link to="/tests" className={styles.link}>
                  <span>Тесты</span>
               </Link>
            </nav>

            <ThemeBtn />
         </div>
      </header>
   );
};

export default Header;
