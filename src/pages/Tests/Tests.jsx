import React from "react";
import tests from "../../tests";
import { Link } from "react-router-dom";
import TestCard from "../../components/UI/TestCard/TestCard";
import style from "./Tests.module.css";

const Tests = () => {
   return (
      <div className="tests">
         <div className={[style.testsContent, "wrapper"].join(" ")}>
            {tests.map((test) => (
               <Link to={`/test/${test.id}`} key={test.id}>
                  <TestCard test={test} />
               </Link>
            ))}
         </div>
      </div>
   );
};

export default Tests;
