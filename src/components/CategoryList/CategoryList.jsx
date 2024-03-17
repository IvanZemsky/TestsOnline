import React from "react";
import styles from "./CategoryList.module.css";
import Category from "../Category/Category";
import AllCategoriesBtn from "./../UI/AllCategoriesBtn/AllCategoriesBtn";

const categories = [
   { name: "Все", value: "all"},
   { name: "Программирование", value: "programming", },
   { name: "Математика", value: "math", },
   { name: "Языки", value: "languages", },
   { name: "История", value: "history", },
];

const CategoryList = ({ handleCategoryClick }) => {
   return (
      <div className={styles.categories}>
         
         {categories.map((category) => (
            <Category
               key={category.value}
               handleCategoryClick={handleCategoryClick}
               category={category}
            />
         ))}

         <AllCategoriesBtn />
      </div>
   );
};

export default CategoryList;
