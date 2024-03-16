import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import styles from "./Test.module.css";
import Question from "../../components/Question/Question";
import { useDispatch, useSelector } from "react-redux";
import ProgressLine from "../../components/UI/ProgressLine/ProgressLine";
import {clearCurrentTestState, setCurrentTest} from "../../store/slices/testSlice";
import { testAPI } from "../../services/TestService";

const Test = () => {
   let { id } = useParams();
   id = +id;

   const dispatch = useDispatch();

   const {data: test, error, isLoading} = testAPI.useFetchTestQuery(id)

   const currentQuestionIndex = useSelector(
      (state) => state.test.currentQuestionIndex
   );

   useEffect(() => {
      dispatch(clearCurrentTestState())
      dispatch(setCurrentTest(test));
   }, [test]);

   return (
      isLoading ? (<p>Loading</p>) :
      <main className={styles.testPage}>
         <div className={[styles.content, "wrapper"].join(" ")}>
            <h1 className={styles.testName}>{test.name}</h1>

            <Question test={test} />

            <ProgressLine
               questionNumber={currentQuestionIndex + 1}
               questionAmount={test.questions.length}
            />
         </div>
      </main>
   );
};

export default Test;
