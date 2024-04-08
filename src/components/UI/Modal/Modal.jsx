import styles from "./Modal.module.css";
import Cross from "./../icons/Cross";

const Modal = ({ isActive, setIsActive, children }) => {
   const activeStyle = isActive ? styles.active : null;

   return (
      <div
         className={[styles.modal, activeStyle].join(" ")}
         onClick={() => setIsActive(false)}
      >
         <div
            className={styles.content}
            onClick={(event) => event.stopPropagation()}
         >
            {children}
            <button className={styles.closeBtn} onClick={() => setIsActive(false)}>
               <Cross />
            </button>
         </div>
      </div>
   );
};

export default Modal;
