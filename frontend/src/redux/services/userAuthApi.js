import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userAuthApi = createApi({
    reducerPath: 'userAuthApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
    endpoints: (builder) => ({
        // Get All User:
        getAllUser: builder.query({
            query: () => ({
                url: 'alljobs', // Updated - removed unnecessary template literal
                method: 'GET',
            }),
        }),

        // Get By Id:
        getUserById: builder.query({
            query: (id) => ({
                url: `alljobs/${id}`, // Updated - added 'id' parameter in the query function
                method: 'GET',
            }),
        }),

        // Register the User:
        registerUser: builder.mutation({
            query: (newUser) => {
                console.log("ROw", newUser)
                return{
                    url: 'register',
                    method: 'POST',
                    body: newUser,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8', // Updated - removed extra space after 'UTF-8'
                    },
                }
            },
        }),
    }),
});

export const { useRegisterUserMutation } = userAuthApi;
