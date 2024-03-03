import React from "react";
import styles from "./CategoryList.module.css";
import Category from "../Category/Category";

const categories = ["Программирование", "Математика", "Языки", "История"];

const CategoryList = ({ handleCategoryClick }) => {
   return (
      <div className={styles.categories}>
         <Category
            category="Все"
            handleCategoryClick={handleCategoryClick}
            defaultChecked={true}
         />

         {categories.map((category) => (
            <Category
               key={category}
               handleCategoryClick={handleCategoryClick}
               category={category}
            />
         ))}
      </div>
   );
};

export default CategoryList;
