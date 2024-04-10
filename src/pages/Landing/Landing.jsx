import React from "react";
import styles from "./Landing.module.css";
import Intro from "./sections/Intro/Intro";
import Wrapper from "../../components/UI/Wrapper/Wrapper";

const Landing = () => {
   return (
      <Wrapper>
         <main>
            <Intro />
         </main>
      </Wrapper>
   );
};

export default Landing;
