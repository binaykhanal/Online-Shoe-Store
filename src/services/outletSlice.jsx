import apiSlice from "./apiSlice";

export const outletSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBranches: builder.query({
      query: () => "/branch/branches/",
      providesTags: ["Outlets"],
    }),
    addBranch: builder.mutation({
      query: (newBranch) => ({
        url: "/branch/branches/",
        method: "POST",
        body: newBranch,
      }),
      invalidatesTags: ["Outlets"],
    }),
    deleteBranch: builder.mutation({
      query: ({ id }) => ({
        url: `/branch/branches/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["Outlets"],
    }),
  }),
});

export const {
  useGetBranchesQuery,
  useAddBranchMutation,
  useDeleteBranchMutation,
} = outletSlice;
