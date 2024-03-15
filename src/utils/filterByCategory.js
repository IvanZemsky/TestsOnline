export default function filterByCategory(data, category, defaultCategory) {
   return data.filter((test) =>
      category !== defaultCategory ? test.category === category : test
   );
}
