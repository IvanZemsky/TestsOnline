import styles from "./Wrapper.module.css";

const Wrapper = ({ additonalStyles, children }) => {
   const wrapperStyles = additonalStyles ? [...additonalStyles, styles.wrapper].join(" ") : styles.wrapper;

   return (
      <div className={wrapperStyles}>
         {children}
      </div>
   );
};

export default Wrapper;
