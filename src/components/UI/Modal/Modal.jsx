import styles from "./Modal.module.css";

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
         </div>
      </div>
   );
};

export default Modal;
