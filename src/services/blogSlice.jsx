import apiSlice from "./apiSlice";
// const API_KEY="AIzaSyBTuIZesnfRU7OOMqxEKlsOSw9aYap44f4";

export const blogSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs:builder.query({
      query:()=>"/blog/posts/",
      providesTags:["Blogs"],
    }),

   postBlog: builder.mutation({
    query: (newBlog) => ({
        url: `/blog/posts/`,
        method: "POST",
        headers: {}, //formData is used in AddBlogs so the header can remain empty
        body: newBlog,
    }),
      invalidatesTags: ["Blogs"],
    }),

    deleteBlog: builder.mutation({
      query: ({ id }) => ({
        url: `/blog/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blogs"],
   
    }),
  }),
});

export const {usePostBlogMutation,useDeleteBlogMutation,useGetAllBlogsQuery}=blogSlice;

//OR
// query: (newBlog) => {
//       const isFormData = newBlog instanceof FormData;
//       return {
//         url: `/blog/posts/`,
//         method: "POST",
//         headers: isFormData ? {} : { "Content-Type": "application/json", Accept: "application/json" },
//         body: isFormData ? newBlog : JSON.stringify(newBlog),
//       };
//     },

