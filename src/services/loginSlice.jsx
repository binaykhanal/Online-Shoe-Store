import { apiSlice } from "./apiSlice";

export const loginSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (credentials) => ({
        url: "/api/login/",
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: credentials,
      }),
      invalidatesTags: ["Users"],
    }),

    resetPassword: builder.mutation({
      query: (email) => ({
        url: "/api/send-reset-password-email/ ",
        method: "POST",
        body: { email },
      }),
    }),
  }),
});

export const { useUserLoginMutation, useResetPasswordMutation } = loginSlice;
