// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const quizApi = createApi({
    reducerPath: 'quizApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/quiz/' }),
    endpoints: (builder) => ({

        // Register the User:
        addquizQuestion: builder.mutation({
            query: ({ quizForm, id }) => {
                console.log("quizform ", quizForm)
                console.log("quizid", id)

                return {
                    url: `new/${id}`,
                    method: 'POST',
                    body: quizForm,
                    // headers: {
                    //     'Content-type': 'application/json; charset=UTF-8'
                    // },
                }
            },
        }),

        // Access all the job:
        getquizbyId: builder.query({

            query: (id) => ({
                url: `${id}`,
                method: 'Get',
            }),
        }),

        quizAttemtQuestion: builder.mutation({
            query: (myForm) => {
                console.log("attempt question", myForm)

                return {
                    url: `/quizattem`,
                    method: 'POST',
                    body: myForm,
                   
                }
            },

        }),

         // Access the quiz result:
         getquizbyId: builder.query({

            query: (id) => ({
                url: `${id}`,
                method: 'Get',
            }),
        }),


    }),
});

export const { useAddquizQuestionMutation, useGetquizbyIdQuery, useQuizAttemtQuestionMutation } = quizApi;
