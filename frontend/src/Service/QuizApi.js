// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const quizApi = createApi({
    reducerPath: 'quizApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/quiz/' }),
    endpoints: (builder) => ({

        // Register the User:
        addquizQuestion: builder.mutation({
            query: ({ quiz, id }) => {
                console.log("quiz", quiz)

                return {
                    url: `new/${id}`,
                    method: 'POST',
                    body: quiz,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    },
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


    }),
});

export const { useAddquizQuestionMutation, useGetquizbyIdQuery, useQuizAttemtQuestionMutation } = quizApi;
