import React from "react";
import styles from "./CategoryList.module.css";
import Category from "../Category/Category";

const categories = ["Программирование", "Математика", "Языки", "История"];

const CategoryList = () => {
   return (
      <div className={styles.categories}>
         <Category category="Все" defaultChecked={true}/>
         {categories.map((category) => (
            <Category key={category} category={category} />
         ))}
         {/* <button className={[styles.category, styles.current].join(" ")}>
            Все
         </button>
         <button className={styles.category}>Программирование</button>
         <button className={styles.category}>Математика</button>
         <button className={styles.category}>Языки</button>
         <button className={styles.category}>История</button> */}
      </div>
   );
};

export default CategoryList;
