'use client';

import React, { useState } from 'react';
import { Treatment, Patient } from '@/types';

interface TreatmentHistoryProps {
  patient: Patient | null;
  treatments: Treatment[];
  isLoading: boolean;
}

export default function TreatmentHistory({ patient, treatments, isLoading }: TreatmentHistoryProps) {
  const [filterType, setFilterType] = useState('all');

  if (!patient) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-400 py-20">
        <svg className="w-20 h-20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <p className="text-xl">Select a patient to view treatment history</p>
      </div>
    );
  }

  const treatmentTypes = ['all', ...Array.from(new Set(treatments.map(t => t.type)))];
  const filteredTreatments = treatments.filter(t =>
    filterType === 'all' || t.type === filterType
  );

  return (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">{patient.name}</h2>
        <div className="flex gap-4 text-sm text-gray-600">
          <span>Age: {patient.age}</span>
          <span>Phone: {patient.phone}</span>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Treatment Type</label>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        >
          {treatmentTypes.map(type => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      ) : filteredTreatments.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p>No treatments found</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-2">
                    {treatment.type}
                  </span>
                  <p className="text-gray-700">{treatment.notes}</p>
                </div>
                <span className="text-lg font-bold text-gray-900">{treatment.cost}</span>
              </div>
              <div className="text-sm text-gray-500">{treatment.date}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}