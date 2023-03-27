// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userAuthApi = createApi({ 
    reducerPath: 'userAuthApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/user/' }),
    endpoints: (builder) => ({

        // Register the User:
        registerUser: builder.mutation({
            query: (newUser) => {
                console.log("ROw", newUser)
                return{
                    url: 'register',
                    method: 'POST',
                    body: newUser,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    },
                }
            },

        }),

        loginUser: builder.mutation({
            query: (user) => {
                console.log("ROw", user)
                return{
                    url: 'login',
                    method: 'POST',
                    body: user,
                    headers: {
                        'Content-type': 'application/json'
                    },
                }
            },

        }),

        sendPasswordResetEmail: builder.mutation({
            query: (user) => {
                console.log("ROw", user)
                return{
                    url: 'sendresetpasswordEmail',
                    method: 'POST',
                    body: user,
                    headers: {
                        'Content-type': 'application/json'
                    },
                }
            },

        }),

        resetPassword: builder.mutation({
            query: ({user,id,token}) => {
                console.log("ROw", user)
                return{
                    url: `reset-password/${id}/${token}`,
                    method: 'POST',
                    body: user,
                    headers: {
                        'Content-type': 'application/json'
                    },
                }
            },

        })
    }),
});

export const { useRegisterUserMutation,useLoginUserMutation,useSendPasswordResetEmailMutation,useResetPasswordMutation } = userAuthApi;
