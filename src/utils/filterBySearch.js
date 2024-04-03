export default function filterBySearch(data, searchValue, dataFields) {
   return data.filter(
      (data) => {
         const value = searchValue.toLowerCase();
         return dataFields.reduce((bool, item) => {
            return bool || data[item].toLowerCase().includes(value);
         }, false);
      }
   );
}
