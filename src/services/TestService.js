import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const testAPI = createApi({
   reducerPath: 'testAPI',
   baseQuery: fetchBaseQuery({
      baseUrl: "https://ivanzemsky.github.io/api/tests",
   }),
   endpoints: (build) => ({
      fetchPreviews: build.query({
         query: () => ({
            url: "preview.json"
         }),
      }),

      fetchTest: build.query({
         query: (testId) => ({
            url: `/test/${testId}.json`
         }),
      }),

      fetchTestByCategory: build.query({
         query: (category) => ({
            url: `/test/${category}/${category}.json`
         }),
      }),
   }),
})