import React from "react";
import tests from "../../tests";
import TestCard from "../../components/UI/TestCard/TestCard";
import style from "./Tests.module.css";

const Tests = () => {

   // state for tests

   // getting from useEffect

   // loader

   return (
      <div className="tests">
         <div className={[style.testsContent, "wrapper"].join(" ")}>
            {tests.map((test) => (
               <TestCard key={test.id} test={test} />
            ))}
         </div>
      </div>
   );
};

export default Tests;
