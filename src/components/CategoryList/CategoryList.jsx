import React from "react";
import styles from "./CategoryList.module.css";
import Category from "../Category/Category";
import AllCategoriesBtn from './../UI/AllCategoriesBtn/AllCategoriesBtn';

const categories = ["Программирование", "Математика", "Языки", "История"];

const CategoryList = ({ handleCategoryClick }) => {
   return (
      <div className={styles.categories}>
         <Category
            category="Все"
            handleCategoryClick={handleCategoryClick}
         />

         {categories.map((category) => (
            <Category
               key={category}
               handleCategoryClick={handleCategoryClick}
               category={category}
            />
         ))}

         <AllCategoriesBtn />
      </div>
   );
};

export default CategoryList;
