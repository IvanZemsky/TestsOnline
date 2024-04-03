import { useSelector } from "react-redux";
import { testAPI } from "../services/TestService";
import filterBySearch from "../utils/filterBySearch";

export default function useFilter() {
   const searchText = useSelector(state => state.filter.filters.searchText)
   const category = useSelector(state => state.filter.filters.category);

   let previews = [];

   const { data: fetchedPreviews, error, isLoading } = testAPI.useFetchPreviewsByCategoryQuery(category);

   if (fetchedPreviews) {
      previews = filterBySearch(fetchedPreviews, searchText, ["name", "desc"]);
   }

   return {previews, error, isLoading}
}