import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const api = ({
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_BASE_URL}),
    reducerPath: 'main',
    tagTypes: ['Kpis'],
})