import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000",
    }),
    tagTypes: ["books", "specified"],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => "/books",
            providesTags: ["books"]
        }),
        addBooks: builder.mutation({
            query: (data) => ({
                url: "/books",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["books"],
        }),
        editBooks: builder.mutation({
            query: ({ id, data }) => ({
                url: `/books/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["books", "specified"],
        }),
        specifiedBook: builder.query({
            query: (id) => ({
                url: `/books/${id}`,
                method: "GET"
            }),
            providesTags: ["specified"]
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["books"],
        }),
    })
})

export const { useGetBooksQuery, useAddBooksMutation, useEditBooksMutation, useSpecifiedBookQuery, useDeleteBookMutation } = apiSlice;

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const apiSlice = createApi({
//     reducerPath: "api",
//     baseQuery: fetchBaseQuery({
//         baseUrl: "http://localhost:9000",
//     }),
//     tagTypes: ["videos", "video", "relatedVideo"],
//     endpoints: (builder) => ({
//         getVideos: builder.query({
//             query: () => "/videos",
//             providesTags: ["videos", "video"],
//         }),
//         getVideo: builder.query({
//             query: (id) => `/videos/${id}`,
//             providesTags: (result, error, arg) => {
//                 return [{ type: "video", id: arg }]
//             }
//         }),
//         getRelatedVideos: builder.query({
//             query: ({ id, text }) => {
//                 const queryStringArray = text.split(" ");
//                 const queryKeyword = queryStringArray
//                     .map((text) => `title_like=${text}`)
//                     .join("&");
//                 return `/videos?${queryKeyword}&_limit=2`;
//             },
//             providesTags: (result, error, arg) => [{ type: "relatedVideo", id: arg.id }],
//         }),
//         addVideo: builder.mutation({
//             query: (data) => ({
//                 url: "/videos",
//                 method: "POST",
//                 body: data,
//             }),
//             invalidatesTags: ["videos"],
//         }),
//         editVideo: builder.mutation({
//             query: ({ id, data }) => ({
//                 url: `/videos/${id}`,
//                 method: "PATCH",
//                 body: data,
//             }),
//             invalidatesTags: (result, error, arg) => [
//                 "videos",
//                 { type: "video", id: arg.id },
//                 { type: "relatedVideo", id: arg.id },
//             ],
//         }),
//     }),
// });

// export const {
//     useGetVideosQuery,
//     useGetVideoQuery,
//     useGetRelatedVideosQuery,
//     useAddVideoMutation,
//     useEditVideoMutation,
// } = apiSlice;