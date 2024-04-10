import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import styles from "./Test.module.css";
import Question from "../../components/Question/Question";
import { useDispatch, useSelector } from "react-redux";
import ProgressLine from "../../components/UI/ProgressLine/ProgressLine";
import {setCurrentTest} from "../../store/slices/testSlice";
import { testAPI } from "../../services/TestService";
import Loading from "../../components/Loading/Loading";
import Wrapper from '../../components/UI/Wrapper/Wrapper';

const Test = () => {
   const dispatch = useDispatch();

   let { id } = useParams();
   id = +id;

   const { data: test, error, isLoading } = testAPI.useFetchTestQuery(id);

   useEffect(() => {
      if (test && !isLoading) {
         dispatch(setCurrentTest(test));
      }
   }, [dispatch, test]);

   const currentQuestionIndex = useSelector((state) => state.test.currentQuestionIndex);

   if (isLoading) {
      return <Loading />;
   }

   if (error) {
      return <p>Ошибка</p>;
   }

   return (
      <main className={styles.testPage}>
         <Wrapper>
            <div className={styles.content}>
               <h1 className={styles.testName}>{test.name}</h1>

               <Question test={test} />

               <ProgressLine
                  questionNumber={currentQuestionIndex + 1}
                  questionAmount={test.questions.length}
               />
            </div>
         </Wrapper>
      </main>
   );
};

export default Test;