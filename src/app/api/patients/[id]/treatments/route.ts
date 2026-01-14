import { NextResponse } from 'next/server';
import { treatments } from '@/data/mockData';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  // Simulation of network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const patientId = parseInt(params.id);
  const patientTreatments = treatments.filter(t => t.patientId === patientId);
  
  return NextResponse.json({
    treatments: patientTreatments,
    patientId,
    timestamp: new Date().toISOString(),
  });
}