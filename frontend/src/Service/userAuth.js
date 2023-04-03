// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userAuthApi = createApi({ 
    reducerPath: 'userAuthApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/user/' }),
    endpoints: (builder) => ({

        // Register the User:
        registerUser: builder.mutation({
            query: (formData) => {
           
                console.log("Is that good", Object.fromEntries(formData.entries()));
                return{
                    url: 'register',          
                    method: 'POST',
                    body: formData,
                    // headers: {
                    //     'Content-Type': 'multipart/form-data'
                    // },
            
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
