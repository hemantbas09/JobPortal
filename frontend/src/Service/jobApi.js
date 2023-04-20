// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jobApi = createApi({
    reducerPath: 'jobApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/job/' }),
    endpoints: (builder) => ({

        // Register the User:
        addJob: builder.mutation({
            query: (newJob) => {
                console.log("ROw", newJob)
                return {
                    url: 'new',
                    method: 'POST',
                    body: newJob,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    },
                }
            },

        }),

        // Job Apply:
        jobApply: builder.mutation({
            query: ({id,jobApplyForm}) => {
                console.log("ROw Apply", jobApplyForm)
                return {
                    url: `/appliedjob/${id}`,
                    method: 'POST',
                    body: jobApplyForm,
                  
                }
            },

        }),


        // Access all the job:
        getAllJob: builder.query({
            query: () => ({

                url: 'alljobs',
                method: 'Get',

            }),

        }),




    }),
});

export const { useAddJobMutation, useGetAllJobQuery,useJobApplyMutation } = jobApi;
