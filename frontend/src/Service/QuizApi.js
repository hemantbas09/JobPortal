// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const token = localStorage.getItem("token");
const role = localStorage.getItem("role");
export const quizApi = createApi({
  reducerPath: "quizApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/quiz/" }),
  endpoints: (builder) => ({
    // Register the Quiz:
    addquizQuestion: builder.mutation({
      query: ({ quizForm, id }) => {
        return {
          url: `new/${id}`,
          method: "POST",
          body: JSON.stringify(quizForm),
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
          },
        };
      },
    }),

    // Access the quiz by id:
    getquizbyId: builder.query({
      query: (id) => ({
        url: `${id}`,
        method: "Get",
      }),
    }),

    // Access the quiz result:

    getquizResultbyId: builder.query({
      query: (id) => ({
        url: `quizresult/${id}`,
        method: "Get",
        headers: {
          // "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${token}`,
          // "X-User-Role": role,
        },
      }),
    }),

    quizAttemtQuestion: builder.mutation({
      query: ({ formData, id }) => {


        return {
          url: `/quizattem/${id}`,
          method: "POST",
          keepUnusedDataFor: 0,
          body: formData,
          headers: {
            // "Content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${token}`,
            // "X-User-Role": role,
          },
        };
      },

      // async onQueryStarted(args, { queryFulfilled, dispatch }) {
      //   try {
      //     const { data: userquizResult } = await queryFulfilled;
      //     console.log("mop", userquizResult);

      //     // Update the query data in the RTK Query cache
      //     dispatch(
      //       quizApi.util.updateQueryData('getquizResultbyId', args?.id, (draft) => {
      //         // update:
      //         console.log(JSON.stringify(draft))
      //         const result = draft?.filter((item) => item?.id === args);
      //         // console.log("This is ", result)
      //         console.log("This is result",JSON.stringify(result))
      //         console.log("This is ", existingResult)
      //         if (existingResult) {
      //           // If the result already exists, update it with the new data
      //           Object.assign(existingResult, userquizResult);
      //         } else {
      //           // If the result doesn't exist, add it to the cache
      //           draft.push(userquizResult);
      //         }
      //       })
      //     );

      //     // Handle additional logic, if needed

      //   } catch (error) {
      //     console.log(error);
      //   }
      // }

      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const { data: userquizResult } = await queryFulfilled;
          console.log("mop", userquizResult);

          // Update the query data in the RTK Query cache
          dispatch(
            quizApi.util.updateQueryData('getquizResultbyId', args?.id, (draft = []) => {
              // update:
              console.log(JSON.stringify(draft));
              const result = draft?.find((item) => item?.id === args?.id); // Corrected args?.id
              console.log("This is result", JSON.stringify(result));
              console.log("This is ", result); // Corrected variable name from existingResult to result
              if (result.length > 0) {
                // If the result already exists, update it with the new data
                Object.assign(result[0], userquizResult); // Corrected existingResult to result[0]
              } else {
                // If the result doesn't exist, add it to the cache
                draft.push(userquizResult);
              }
            })
          );

          // Handle additional logic, if needed

        } catch (error) {
          console.log(error);
        }
      }



    }),





  }),
});

export const {
  useAddquizQuestionMutation,
  useGetquizbyIdQuery,
  useQuizAttemtQuestionMutation,
  useGetquizResultbyIdQuery,
} = quizApi;
