import React from "react";
import styles from "./CategoryList.module.css";
import Category from "../Category/Category";

const categories = [
   { name: "Все", value: "all" },
   { name: "Программирование", value: "programming" },
   { name: "Математика", value: "math" },
   { name: "Языки", value: "languages" },
   { name: "История", value: "history" },
];

const CategoryList = ({isWrapped}) => {
   const wrapStyle = isWrapped ? styles.wrapped : null;

   return (
      <form className={[styles.categories, wrapStyle].join(" ")}>
         {categories.map((category) => (
            <Category
               key={category.value}
               category={category}
            />
         ))}
      </form>
   );
};

export default CategoryList;
