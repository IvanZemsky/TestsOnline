import React, { memo, useEffect } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {toggleTheme} from '../../store/slices/themeSlice'

const Header = () => {
   const dispatch = useDispatch();

   return (
      <header className={styles.header}>
         <div className={[styles.content, "wrapper"].join(" ")}>
            <Link to="/" className={styles.logo}>
               TestsOnline
            </Link>

            <nav className={styles.links}>
               <Link to="/tests" className={styles.link}>
                  <span>Тесты</span>
               </Link>
            </nav>

            <button onClick={() => dispatch(toggleTheme())}>Тема</button>
         </div>
      </header>
   );
};

export default Header;
