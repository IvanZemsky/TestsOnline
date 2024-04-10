export function setCategoriesToShow(categories, amount) {
   let categoriesToShow = [];

   if (amount === 'all') {
      return categories;
   } else {
      amount.forEach(index => {
         categoriesToShow.push(categories[index])
      });
   }
   return categoriesToShow;
}