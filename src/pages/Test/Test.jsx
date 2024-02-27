import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import styles from "./Test.module.css";
import Question from "../../components/Question/Question";
import tests from "../../tests";
import { useDispatch, useSelector } from "react-redux";
import ProgressLine from "../../components/UI/ProgressLine/ProgressLine";
import {
   clearCurrentTestState,
   setCurrentTest,
} from "../../store/slices/testSlice";

const TestPage = () => {
   let { id } = useParams();
   id = +id;

   useEffect(() => {
      dispatch(clearCurrentTestState())
      dispatch(setCurrentTest(test));
   }, []);

   const dispatch = useDispatch();

   const currentQuestionIndex = useSelector(
      (state) => state.test.currentQuestionIndex
   );

   const test = useMemo(() => tests.find((test) => test.id === id), [id]);

   if (!test) return <p>Ошибка!</p> // обработать

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
