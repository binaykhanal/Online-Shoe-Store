import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout } from "../features/authSlice";

// Create a base query function that includes the access token in the headers
const baseQuery = fetchBaseQuery({
  baseUrl: "http://192.168.1.80:8888",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accesstoken");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

// Extend the base query function to handle token expiration
const baseQueryWithAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // If the error status is 401 (Unauthorized), it indicates that the access token has expired
    // Log out the user by removing the access token from local storage and dispatching a logout action
    localStorage.removeItem("accesstoken");
    api.dispatch(logout()); // Dispatch the logout action from authSlice
  }

  return result;
};

export const apiSlice = createApi({
reducerPath: "api",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["Users", "Blogs", "Products", "Outlets"],
  endpoints: () => ({}),
});

export default apiSlice;
