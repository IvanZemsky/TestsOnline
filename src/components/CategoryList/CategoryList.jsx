import React from "react";
import styles from "./CategoryList.module.css";
import Category from "../Category/Category";
import { setCategoriesToShow } from "./setCategoriesToShow";
import { categories } from "../../data/categories";

const CategoryList = ({ amount, isWrapped }) => {
   let categoriesToShow = setCategoriesToShow(categories, amount);

   const wrapStyle = isWrapped ? styles.wrapped : null;

   return (
      <form className={[styles.categories, wrapStyle].join(" ")}>
         {categoriesToShow.map((category) => (
            <Category key={category.value} category={category} />
         ))}
      </form>
   );
};

export default CategoryList;
