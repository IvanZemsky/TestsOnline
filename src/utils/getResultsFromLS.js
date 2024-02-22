export const getResultsFromLS = () => {
   return JSON.parse(localStorage.getItem('results')) || [];
}