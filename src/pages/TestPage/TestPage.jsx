import React from "react";
import { useParams } from "react-router-dom";
import styles from "./TestPage.module.css";
import Question from "../../components/Question/Question";

const TestPage = (props) => {
   const { id } = useParams();

   return (
      <div className="test-page">
         <div className={[styles.content, "wrapper"].join(" ")}>
            <Question testId={id} />
         </div>
      </div>
   );
};

export default TestPage;
