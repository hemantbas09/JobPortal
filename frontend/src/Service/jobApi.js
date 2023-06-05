// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const token = localStorage.getItem("token");
const role = localStorage.getItem("role");
export const jobApi = createApi({
  reducerPath: "jobApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/job/" }),
  endpoints: (builder) => ({
    // Register the User:
    addJob: builder.mutation({
      query: (newJob) => {
        console.log("ROw", newJob);
        return {
          url: "new",
          method: "POST",
          body: newJob,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${token}`,
            // "X-User-Role": role,
          },
        };
      },
    }),

    updateJob: builder.mutation({

      query: ({ id, job }) => {
        console.log("ROw", id);
        return {
          url: `/update/${id}`,
          method: "PUT",
          body: job,
          headers: {
            authorization: `Bearer ${token}`,

          },
        };
      },
    }),

    deleteJob: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
    }),


    // Job Apply:
    jobApply: builder.mutation({
      query: ({ id, jobApplyForm }) => {
        console.log("ROw Apply", jobApplyForm);
        return {
          url: `/appliedjob/${id}`,
          method: "POST",
          body: jobApplyForm,
        };
      },
    }),

    // Access all the job:
    getAllJob: builder.query({
      query: () => ({
        url: "alljobs",
        method: "Get",
      }),
    }),

    // Access all the job:
    getJobByCompanyId: builder.query({
      query: () => ({
        url: "jobbycompanyid",
        method: "Get",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${token}`,
        },
      }),
    }),

    // Access all the job by user id:
    getJobByJobId: builder.query({
      query: (id) => ({
        url: `${id}`,
        method: "Get",
      }),
    }),

    // Apply the Job:
    applyJob: builder.mutation({
      query: ({ resume, id }) => {
        // console.log("ROw", resume);
        return {
          url: `/appliedjob/${id}`,
          method: "POST",
          body: { resume },
          headers: {
            // "Content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${token}`,
          },
        };
      },
    }),

    getAppliedJob: builder.query({
      query: () => ({
        url: `/applied/job`,
        method: "Get",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
    }),

  }),
});

export const {
  useAddJobMutation,
  useGetAllJobQuery,
  useJobApplyMutation,
  useGetJobByCompanyIdQuery,
  useGetJobByJobIdQuery,
  useApplyJobMutation,
  useUpdateJobMutation,
  useDeleteJobMutation,
  useGetAppliedJobQuery
} = jobApi;
