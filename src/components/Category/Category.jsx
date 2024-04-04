import React from "react";
import styles from "./Category.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from "../../store/slices/filterSlice";

const Category = ({category}) => {
   const dispatch = useDispatch();

   const currentCategory = useSelector(state => state.filter.filters.category);

   const isChecked = category.value === currentCategory ? true : false;

   const handleCategoryClick = (newCategory) => {
      dispatch(setCategory(newCategory));
   };

   return (
      <div className={styles.category}>
         <input
            className={styles.categoryRadio}
            type="radio"
            id={category.value}
            name="category"
            value={category.value}
            defaultChecked={isChecked}
            onChange={() => handleCategoryClick(category.value)}
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