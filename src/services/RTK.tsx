import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const RTKSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://65ec46d20ddee626c9afe0c0.mockapi.io/api/v1",
  }),
  tagTypes: ["employees"],
  reducerPath: "userapi",
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/users",
      providesTags: ["employees"],
    }),
    createUsers: builder.mutation({
      query: (body) => ({
        url: "/users",
        method: "POST",
        body,
      }),
      invalidatesTags: ["employees"],
    }),
    removeUser: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/users/${id}`,
      }),
      invalidatesTags: ["employees"],
    }),
  }),
})

export const {
  useGetAllUsersQuery,
  useCreateUsersMutation,
  useRemoveUserMutation,
} = RTKSlice
