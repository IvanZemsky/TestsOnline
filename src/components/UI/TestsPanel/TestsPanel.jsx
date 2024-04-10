import styles from "./TestsPanel.module.css";
import TestsSearch from "../../TestsSearch/TestsSearch";
import CategoryList from "../../CategoryList/CategoryList";
import AllCategoriesBtn from './../AllCategoriesBtn/AllCategoriesBtn';
import Modal from './../Modal/Modal';
import { useState } from "react";
import Wrapper from './../Wrapper/Wrapper';

const TestsPanel = () => {
   const [isActive, setIsActive] = useState(false);

   return (
      <div className={styles.panel}>
         <Wrapper additonalStyles={[styles.content]}>
            <TestsSearch />
            <div className={styles.buttons}>
               <div className={styles.panelCategories}>
                  <CategoryList amount={[0, 1, 2, 3, 4]}/>
               </div>
               <AllCategoriesBtn setIsActive={setIsActive}/>
            </div>
         </Wrapper>

         <Modal isActive={isActive} setIsActive={setIsActive}>
            <CategoryList amount="all" isWrapped={true}/>
         </Modal>
         
      </div>
   );
};

export default TestsPanel;
