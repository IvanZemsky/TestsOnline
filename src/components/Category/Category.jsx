import React from "react";
import styles from "./Category.module.css";

const Category = ({category, handleCategoryClick }) => {

   const isChecked = category.value === 'all' ? true : false;

   return (
      <div>
         <input
            className={styles.categoryRadio}
            type="radio"
            id={category.value}
            name="category"
            value={category.value}
            defaultChecked={isChecked}
            onChange={() => handleCategoryClick(category)}
         />
         <label
            className={styles.categoryText}
            htmlFor={category.value}
         >
            {category.name}
         </label>
      </div>
   );
};

export default Category;