import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import ThemeBtn from "./../UI/ThemeBtn/ThemeBtn";
import Logo from "./../UI/Logo/Logo";
import Wrapper from "./../UI/Wrapper/Wrapper";

const Header = () => {
   return (
      <header className={styles.header}>
         <Wrapper>
            <div className={styles.content}>
               <Logo />
               <nav className={styles.links}>
                  <Link to="/tests" className={styles.link}>
                     <span>Тесты</span>
                  </Link>
               </nav>

               <ThemeBtn />
            </div>
         </Wrapper>
      </header>
   );
};

export default Header;
