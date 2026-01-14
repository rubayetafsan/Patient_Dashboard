export interface Patient {
  id: number;
  name: string;
  age: number;
  phone: string;
  lastVisit: string;
}

export interface Treatment {
  id: number;
  patientId: number;
  type: string;
  date: string;
  cost: string;
  notes: string;
}