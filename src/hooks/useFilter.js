import { useSelector } from "react-redux";
import { testAPI } from "../services/TestService";

export default function useFilter() {
   const category = useSelector(state => state.filter.filters.category);

   let previews = [];

   const { data: fetchedPreviews, error, isLoading } = testAPI.useFetchPreviewsByCategoryQuery(category);
   previews = fetchedPreviews;

   return {previews, error, isLoading}
}