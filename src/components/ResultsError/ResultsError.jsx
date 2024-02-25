import React from 'react'
import styles from './ResultsError.module.css'
import { Link } from "react-router-dom"

const ResultsError = ({testId}) => {
  return (
    <div className={styles.resultsError}>
      <div className={[styles.resultsContent, 'wrapper'].join("")}>
         <h1>Вы ещё не прошли этот тест</h1>
         <div className={styles.links}>
            <Link to={`/tests/${testId}`}>
               Перейти к тесту
            </Link>
            <Link to="/tests">
               На страницу тестов
            </Link>
         </div>
      </div>
    </div>
  )
}

export default ResultsError
