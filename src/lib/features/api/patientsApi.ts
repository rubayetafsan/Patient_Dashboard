import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Patient, Treatment } from '@/types';

export const patientsApi = createApi({
  reducerPath: 'patientsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getPatients: builder.query<{ patients: Patient[] }, void>({
      query: () => '/patients',
    }),
    getTreatments: builder.query<{ treatments: Treatment[] }, number>({
      query: (patientId) => `/patients/${patientId}/treatments`,
    }),
  }),
});

export const { useGetPatientsQuery, useGetTreatmentsQuery } = patientsApi;