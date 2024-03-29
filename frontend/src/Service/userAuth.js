// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const token = localStorage.getItem("token");
console.log(token);
const role = localStorage.getItem("role");
export const userAuthApi = createApi({
  reducerPath: "userAuthApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/user/" }),
  endpoints: (builder) => ({
    // Register the User:
    registerUser: builder.mutation({
      query: (formData) => {
        return {
          url: "register",
          method: "POST",
          body: formData,
          // headers: {
          //     'Content-Type': 'multipart/form-data'
          // },
        };
      },
    }),
    acceptReject: builder.mutation({
      query: ({ formData, companyId }) => ({
        url: "/approvedReject",
        method: "POST",
        body: formData,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const { data: companyAcceptReject } = await queryFulfilled;
          console.log("mop", companyAcceptReject);
          console.log(arguments);
          dispatch(
            userAuthApi.util.updateQueryData(
              "getallUser",
              undefined,
              (draft) => {
                console.log(JSON.stringify(draft));
                const project = draft.user?.find(
                  (item) => item?._id === args?.companyId
                );

                console.log(project.status);
                console.log(companyAcceptReject.company.status);
                // console.log("The change status",companyAcceptReject.status)
                project.status = companyAcceptReject.company.status;
              }
            )
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),

    getallUser: builder.query({
      query: () => ({
        url: `/getalluser`,
        method: "Get",
      }),
    }),

    verifyUser: builder.mutation({
      query: (verifyToken) => ({
        url: "/verify",
        method: "POST",
        body: { token: verifyToken },
      }),
    }),

    loginUser: builder.mutation({
      query: (user) => {
        console.log("ROw", user);
        return {
          url: "login",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),

    sendPasswordResetEmail: builder.mutation({
      query: (user) => {
        console.log("ROw", user);
        return {
          url: "sendresetpasswordEmail",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),

    resetPassword: builder.mutation({
      query: ({ user, id, token }) => {
        console.log("ROw", user);
        return {
          url: `reset-password/${id}/${token}`,
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
        //   credentials: 'include',
      }),
    }),

    passwordReset: builder.mutation({
      query: ({ id, user }) => {
        console.log("ROw", id);
        return {
          url: `/resetpassword/${id}`,
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),

    userProfile: builder.mutation({
      query: (formDataToSend) => {
        console.log("his is token", token);
        return {
          url: "user/profile",
          method: "POST",
          body: formDataToSend,
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    companyProfile: builder.mutation({
      query: (formDataToSend) => {
        return {
          url: "/company/profile",
          method: "POST",
          body: formDataToSend,
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getUserProfile: builder.query({
      query: (id) => {
        console.log("this is id and mad", id);

        return {
          url: `/get/user/profile/${id}`,
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
    }),

    getCompanyProfile: builder.query({
      query: (id) => ({
        url: `/get/company/profile/${id}`,
        method: "Get",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
    }),
    getUserProfileById: builder.query({
      query: (id) => {
        return {
          url: `/user/profile/${id}`,
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
    }),

    getCompanyProfileById: builder.query({
      query: (id) => ({
        url: `/company/profile/${id}`,
        method: "Get",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useSendPasswordResetEmailMutation,
  useResetPasswordMutation,
  useGetallUserQuery,
  useAcceptRejectMutation,
  useDeleteUserMutation,
  useVerifyUserMutation,
  useGoogleAuthQuery,
  usePasswordResetMutation,
  useUserProfileMutation,
  useCompanyProfileMutation,
  useGetCompanyProfileQuery,
  useGetUserProfileQuery,
  useGetCompanyProfileByIdQuery,
  useGetUserProfileByIdQuery,
} = userAuthApi;
