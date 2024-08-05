import apiSlice from "./apiSlice";

export const productSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      //query: () => "/products",  //does same as below
      query: () => ({
        method: "GET",
        url: "api/users/",
        header: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }),
      providesTags: ["Users"], //static tag
    }),
    checkEmail: builder.mutation({
      query: (email) => ({
        url: '/api/profile/',
        method: 'POST',
        body:{ email} ,
      }),
    }),

    addUser: builder.mutation({
      query: (newUser) => ({
        url: `/api/register/`,
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: newUser,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useGetAllUserQuery, useGetUserByIdQuery, useAddUserMutation,useCheckEmailMutation } =
  productSlice;
