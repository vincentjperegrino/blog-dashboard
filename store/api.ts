import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Post from "@/types/post";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "https://mockapi.io/api/",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "posts",
      providesTags: ["Post"],
    }),
    getPost: builder.query<Post, string>({
      query: (id) => `posts/${id}`,
    }),
    addPost: builder.mutation<Post, Omit<Post, "id">>({
      query: (newPost) => ({
        url: "posts",
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery, useAddPostMutation } = api;
