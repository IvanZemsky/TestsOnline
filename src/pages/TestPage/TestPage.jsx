import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import styles from "./TestPage.module.css";
import Question from "../../components/Question/Question";
import tests from "../../tests";
import { useDispatch, useSelector } from "react-redux";
import ProgressLine from "../../components/UI/ProgressLine/ProgressLine";
import { clearCurrentTestData } from "../../store/slices/testSlice";

const TestPage = () => {
   const dispatch = useDispatch();

   let { id } = useParams();
   id = +id;

   const currentQuestionIndex = useSelector(
      (state) => state.test.currentQuestionIndex
   );

   const test = useMemo(() => tests.find((test) => test.id === id), [id]);

   useEffect(() => {
      return () => {
         console.log("unmounted");
         dispatch(clearCurrentTestData());
      };
   }, []);

   return (
      <div className={styles.testPage}>
         <div className={[styles.content, "wrapper"].join(" ")}>
            <h1 className={styles.testName}>{test.name}</h1>

            <Question test={test} />

            <ProgressLine
               questionNumber={currentQuestionIndex + 1}
               questionAmount={test.questions.length}
            />
         </div>
      </div>
   );
};

export default TestPage;
