import React, { memo, useEffect } from "react";
import "./Header.css";

const Header = () => {
   useEffect(() => console.log("header render " + Date.now()));

   return (
      <header className="header">
         <div className="header__content wrapper">
            <a href="#" className="header__logo">
               QuestsWebSite
            </a>
         </div>
      </header>
   );
};

export default Header;
