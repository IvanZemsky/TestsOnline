import React from "react";
import tests from "../../tests";
import { Link } from "react-router-dom";
import TestCard from "../../components/UI/TestCard/TestCard";
import "./Tests.css";

const Tests = () => {
   return (
      <div className="tests">
         <div className="tests__content wrapper">
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
