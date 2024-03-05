import React from "react";
import styles from "./Category.module.css";

const Category = ({category, handleCategoryClick }) => {

   const isChecked = localStorage.getItem('category') === category ? true : false;

   return (
      <div>
         <input
            className={styles.categoryRadio}
            type="radio"
            id={category}
            name="category"
            value={category}
            defaultChecked={isChecked}
            onChange={() => handleCategoryClick(category)}
         />
         <label
            className={styles.categoryText}
            htmlFor={category}
         >
            {category}
         </label>
      </div>
   );
};

export default Category;