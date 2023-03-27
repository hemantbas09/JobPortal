// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jobApi = createApi({ 
    reducerPath: 'jobApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/job/' }),
    endpoints: (builder) => ({

        // Register the User:
        addJob: builder.mutation({
            query: (newJob) => {
                console.log("ROw", newJob)
                return{
                    url: 'new',
                    method: 'POST',
                    body: newJob,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    },
                }
            },

        }),

      

     
    }),
});

export const { useAddJobMutation  } = jobApi;