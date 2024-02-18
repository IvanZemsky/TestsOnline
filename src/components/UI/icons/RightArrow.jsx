import React, { memo } from "react";

const RightArrow = memo(({fill}) => {
   return (
      <svg
         viewBox="0 0 42 74"
         fill={fill}
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M25.6692 36.888L0.0351562 9.14326L7.83682 0.699203L41.2725 36.888L7.83682 73.0768L0.0351562 64.6328L25.6692 36.888Z" 
         />
      </svg>
   );
});

export default RightArrow;
