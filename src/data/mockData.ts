import { Patient, Treatment } from '@/types';

export const patients: Patient[] = [
  { id: 1, name: 'Marco Rossi', age: 45, phone: '+39 348 5012345', lastVisit: '2025-12-28' },
  { id: 2, name: 'Giulia Bianchi', age: 32, phone: '+39 347 6123456', lastVisit: '2025-12-20' },
  { id: 3, name: 'Alessandro Esposito', age: 58, phone: '+39 349 7234567', lastVisit: '2025-12-15' },
  { id: 4, name: 'Francesca Romano', age: 28, phone: '+39 346 8345678', lastVisit: '2026-01-05' },
  { id: 5, name: 'Lorenzo Ricci', age: 41, phone: '+39 345 9456789', lastVisit: '2025-12-22' },
  { id: 6, name: 'Sofia Marino', age: 36, phone: '+39 344 0567890', lastVisit: '2026-01-08' },
  { id: 7, name: 'Matteo Ferrari', age: 52, phone: '+39 343 1678901', lastVisit: '2025-12-18' },
  { id: 8, name: 'Chiara Conti', age: 29, phone: '+39 342 2789012', lastVisit: '2025-12-30' },
];

export const treatments: Treatment[] = [
  // Marco Rossi treatments
  { id: 101, patientId: 1, type: 'Pulizia', date: '2025-12-28', cost: '€85', notes: 'Pulizia dentale di routine, nessun problema riscontrato' },
  { id: 102, patientId: 1, type: 'Otturazione', date: '2025-11-10', cost: '€180', notes: 'Otturazione in composito sul dente' },
  { id: 103, patientId: 1, type: 'Radiografia', date: '2025-11-10', cost: '€60', notes: 'Radiografia panoramica completa' },
  
  // Giulia Bianchi treatments
  { id: 201, patientId: 2, type: 'Pulizia', date: '2025-12-20', cost: '€85', notes: 'Controllo e pulizia regolare' },
  { id: 202, patientId: 2, type: 'Sbiancamento', date: '2025-11-25', cost: '€350', notes: 'Trattamento di sbiancamento professionale' },
  { id: 203, patientId: 2, type: 'Detartrasi', date: '2025-09-15', cost: '€75', notes: 'Rimozione tartaro profonda' },
  
  // Alessandro Esposito treatments
  { id: 301, patientId: 3, type: 'Corona', date: '2025-12-15', cost: '€850', notes: 'Corona in ceramica sul dente' },
  { id: 302, patientId: 3, type: 'Devitalizzazione', date: '2025-11-20', cost: '€650', notes: 'Trattamento canalare completato' },
  { id: 303, patientId: 3, type: 'Pulizia', date: '2025-10-05', cost: '€85', notes: 'Pulizia di routine' },
  { id: 304, patientId: 3, type: 'Radiografia', date: '2025-11-20', cost: '€60', notes: 'Radiografia endodontica' },
  
  // Francesca Romano treatments
  { id: 401, patientId: 4, type: 'Pulizia', date: '2026-01-05', cost: '€85', notes: 'Ottima salute orale' },
  { id: 402, patientId: 4, type: 'Visita', date: '2025-09-10', cost: '€40', notes: 'Prima visita di controllo' },
  { id: 403, patientId: 4, type: 'Sigillatura', date: '2025-10-20', cost: '€120', notes: 'Sigillatura preventiva molari' },
  
  // Lorenzo Ricci treatments
  { id: 501, patientId: 5, type: 'Otturazione', date: '2025-12-22', cost: '€200', notes: 'Due otturazioni completate' },
  { id: 502, patientId: 5, type: 'Pulizia', date: '2025-12-22', cost: '€85', notes: 'Pulizia dopo procedura di otturazione' },
  { id: 503, patientId: 5, type: 'Estrazione', date: '2025-08-10', cost: '€250', notes: 'Estrazione dente del giudizio' },
  { id: 504, patientId: 5, type: 'Radiografia', date: '2025-08-10', cost: '€60', notes: 'Radiografia pre-estrazione' },
  
  // Sofia Marino treatments
  { id: 601, patientId: 6, type: 'Apparecchio', date: '2026-01-08', cost: '€2800', notes: 'Installazione iniziale apparecchio ortodontico' },
  { id: 602, patientId: 6, type: 'Visita', date: '2025-11-15', cost: '€40', notes: 'Consulto ortodontico' },
  { id: 603, patientId: 6, type: 'Radiografia', date: '2025-11-15', cost: '€80', notes: 'Radiografia ortodontica completa' },
  
  // Matteo Ferrari treatments
  { id: 701, patientId: 7, type: 'Pulizia', date: '2025-12-18', cost: '€85', notes: 'Pulizia semestrale' },
  { id: 702, patientId: 7, type: 'Impianto', date: '2025-10-30', cost: '€1500', notes: 'Impianto dentale posizionato' },
  { id: 703, patientId: 7, type: 'Corona', date: '2025-12-18', cost: '€900', notes: 'Corona su impianto' },
  
  // Chiara Conti treatments
  { id: 801, patientId: 8, type: 'Pulizia', date: '2025-12-30', cost: '€85', notes: 'Pulizia di fine anno' },
  { id: 802, patientId: 8, type: 'Sbiancamento', date: '2025-12-30', cost: '€350', notes: 'Sbiancamento per evento speciale' },
  { id: 803, patientId: 8, type: 'Visita', date: '2025-11-05', cost: '€40', notes: 'Controllo generale' },
];