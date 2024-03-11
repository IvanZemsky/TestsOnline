import { useState, useEffect } from "react";

function useDebounce(value, msDelay) {
   const [debouncedValue, setDebouncedValue] = useState('');
   
   useEffect(() => {
      const timeout = setTimeout(() => {
         setDebouncedValue(value)
      }, msDelay);
      
      return () => clearTimeout(timeout)
   }, [value])

   return debouncedValue
}

export {useDebounce}
