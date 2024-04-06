import styles from "./TestsPanel.module.css";
import TestsSearch from "../../TestsSearch/TestsSearch";
import CategoryList from "../../CategoryList/CategoryList";
import AllCategoriesBtn from './../AllCategoriesBtn/AllCategoriesBtn';
import Modal from './../Modal/Modal';
import { useState } from "react";

const TestsPanel = () => {
   const [isActive, setIsActive] = useState(false);

   return (
      <div className={styles.panel}>
         <div className={[styles.content, "wrapper"].join(" ")}>
            <TestsSearch />
            <div className={styles.buttons}>
               <div className={styles.panelCategories}>
                  <CategoryList/>
               </div>
               <AllCategoriesBtn setIsActive={setIsActive}/>
            </div>
         </div>

         <Modal isActive={isActive} setIsActive={setIsActive}>
            <CategoryList isWrapped={true}/>
         </Modal>

      </div>
   );
};

export default TestsPanel;
