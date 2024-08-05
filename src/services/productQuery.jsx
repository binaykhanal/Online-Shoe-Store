import { apiSlice } from "./apiSlice";

export const productQuery = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct:builder.query({
      query:()=>"/product/products/",
      providesTags:["Products"]
    }),

    addProduct: builder.mutation({
      query: (newProduct) => ({  
        url: "/product/products/",
        method: "POST",
        headers: {},
        body: newProduct,
      }),
      invalidatesTags: ["Products"],
    }),

    getProductsById: builder.query({
      query: (id) => `/product/products/${id}`,
      providesTags: ["Products"],
    }),

    deleteProduct: builder.mutation({
      query: ({ id }) => ({
        url: `/product/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
   
    }),
  }),
});

export const { useAddProductMutation,useGetAllProductQuery,useDeleteProductMutation,useGetProductsByIdQuery} = productQuery;
