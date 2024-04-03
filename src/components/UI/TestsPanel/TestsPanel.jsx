import styles from './TestsPanel.module.css'
import TestsSearch from "../../TestsSearch/TestsSearch";
import CategoryList from "../../CategoryList/CategoryList";

const TestsPanel = () => {
   return (
      <div className={styles.panel}>
         <div className={[styles.content, "wrapper"].join(" ")}>
            <TestsSearch />
            <CategoryList />
         </div>
      </div>
   );
};

export default TestsPanel;
