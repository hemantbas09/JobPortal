import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const userAuthApi = createApi({
    reducerPath: 'userAuthApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/user' }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({

        }),
    }),
})

export const { useGetPokemonByNameQuery } = userAuthApi
