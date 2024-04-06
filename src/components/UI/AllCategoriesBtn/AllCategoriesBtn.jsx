import React from "react";
import SquaresIcon from "./../icons/SquaresIcon";
import styles from "./AllCategoriesBtn.module.css";

const AllCategoriesBtn = ({ setIsActive }) => {
   return (
      <button className={styles.categoriesBtn} onClick={() => setIsActive(true)}>
         <SquaresIcon />
      </button>
   );
};

export default AllCategoriesBtn;
