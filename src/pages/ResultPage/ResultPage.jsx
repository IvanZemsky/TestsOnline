import React from 'react'
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import styles from './ResultPage.module.css'

const ResultPage = () => {

  const resultCounter = useSelector(state => state.test.resultCounter)

  const result = useSelector(state => state.test.result);
  console.log(result);

  const {id} = useParams();

  return (
    <div>
      {id}
    </div>
  )
}

export default ResultPage
