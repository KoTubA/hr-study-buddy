import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const studentsApi = createApi({
  reducerPath: 'studentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: (builder) => ({
    getStudentsByGroup: builder.query({
      query: (groupId) => {
        const token = localStorage.getItem('token');
        return {
          url: `groups/${groupId}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getStudentById: builder.query({
      query: (studentId) => {
        const token = localStorage.getItem('token');
        return {
          url: `students/${studentId}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    findStudents: builder.query({
      query: (searchPhrase) => {
        const token = localStorage.getItem('token');
        return {
          url: `/students/search`,
          method: 'POST',
          body: searchPhrase,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const { useGetStudentsByGroupQuery, useLazyGetStudentByIdQuery, useLazyFindStudentsQuery } = studentsApi;
