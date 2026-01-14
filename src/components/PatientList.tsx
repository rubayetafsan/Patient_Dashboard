'use client';

import React from 'react';
import { Patient } from '@/types';

interface PatientListProps {
  patients: Patient[];
  selectedPatientId: number | null;
  onSelectPatient: (patient: Patient) => void;
}

export default function PatientList({ patients, selectedPatientId, onSelectPatient }: PatientListProps) {
  return (
    <div className="space-y-2 max-h-[600px] overflow-y-auto">
      {patients.map((patient) => (
        <div
          key={patient.id}
          onClick={() => onSelectPatient(patient)}
          className={`p-4 rounded-lg cursor-pointer transition-all hover:shadow-md ${
            selectedPatientId === patient.id
              ? 'bg-blue-500 text-white'
              : 'bg-gray-50 hover:bg-gray-100'
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                selectedPatientId === patient.id ? 'bg-blue-400' : 'bg-blue-100'
              }`}>
                <span className={`text-lg font-bold ${
                  selectedPatientId === patient.id ? 'text-white' : 'text-blue-600'
                }`}>
                  {patient.name.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="font-semibold">{patient.name}</h3>
                <p className={`text-sm ${
                  selectedPatientId === patient.id ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  Age {patient.age}
                </p>
              </div>
            </div>
          </div>
          <div className={`mt-2 text-sm ${
            selectedPatientId === patient.id ? 'text-blue-100' : 'text-gray-500'
          }`}>
            Last visit: {patient.lastVisit}
          </div>
        </div>
      ))}
    </div>
  );
}