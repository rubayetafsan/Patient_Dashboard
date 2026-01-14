import { NextResponse } from 'next/server';
import { patients } from '@/data/mockData';

export async function GET() {
  // Simulation of network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return NextResponse.json({
    patients,
    timestamp: new Date().toISOString(),
  });
}