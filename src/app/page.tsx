'use client';

import { useState, useMemo } from 'react';
import { useGetPatientsQuery, useGetTreatmentsQuery } from '@/lib/features/api/patientsApi';
import { Patient } from '@/types';

export default function PatientDashboard() {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');

  // RTK Query hooks
  const { data: patientsData, isLoading: patientsLoading, error: patientsError } = useGetPatientsQuery();
  const { data: treatmentsData, isLoading: treatmentsLoading, error: treatmentsError } = useGetTreatmentsQuery(
    selectedPatient?.id ?? 0,
    { skip: !selectedPatient }
  );

  const patients = patientsData?.patients ?? [];
  const treatments = treatmentsData?.treatments ?? [];
  // Filtered Patients based on search term
  const filteredPatients = useMemo(() => {
    return patients.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [patients, searchTerm]);

  const filteredTreatments = useMemo(() => {
    let filtered = treatments.filter(t =>
      filterType === 'all' || t.type === filterType
    );
  // Apply date filter
    if (dateFilter !== 'all') {
      const now = new Date();
      
      filtered = filtered.filter(t => {
        const treatmentDate = new Date(t.date);
        const diffTime = now.getTime() - treatmentDate.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        switch (dateFilter) {
          case 'last30':
            return diffDays <= 30;
          case 'last90':
            return diffDays <= 90;
          case 'last180':
            return diffDays <= 180;
          case 'lastyear':
            return diffDays <= 365;
          default:
            return true;
        }
      });
    }

    // Sort by date descending 
    return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [treatments, filterType, dateFilter]);

  const treatmentTypes = useMemo(() => {
    return ['all', ...Array.from(new Set(treatments.map(t => t.type)))];
  }, [treatments]);

  const totalCost = useMemo(() => {
    return filteredTreatments.reduce((sum, t) => {
      const cost = parseFloat(t.cost.replace('€', '').replace(',', '.'));
      return sum + (isNaN(cost) ? 0 : cost);
    }, 0);
  }, [filteredTreatments]);

  // Calculate date range of filtered treatments
  const dateRange = useMemo(() => {
    if (filteredTreatments.length === 0) return null;
    const dates = filteredTreatments.map(t => new Date(t.date));
    const oldest = new Date(Math.min(...dates.map(d => d.getTime())));
    const newest = new Date(Math.max(...dates.map(d => d.getTime())));
    return { oldest, newest };
  }, [filteredTreatments]);

  // Reset filters
  const resetFilters = () => {
    setFilterType('all');
    setDateFilter('all');
  };

  return (
    <div className="container">
      <div className="header">
        <h1>🦷 Patient Dashboard</h1>
        <p>Dental Practice Management System</p>
      </div>

      <div className="grid">
        {/* Patient List */}
        <div className="panel">
          <h2 className="panel-title">Patients ({filteredPatients.length})</h2>
          
          <div className="search-box">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search patients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {patientsLoading ? (
            <div className="loading">
              <div className="spinner"></div>
            </div>
          ) : patientsError ? (
            <div className="error-state">
              <p>⚠️ Error loading patients</p>
            </div>
          ) : (
            <div className="patient-list">
              {filteredPatients.map((patient) => (
                <div
                  key={patient.id}
                  className={`patient-card ${selectedPatient?.id === patient.id ? 'selected' : ''}`}
                  onClick={() => setSelectedPatient(patient)}
                >
                  <div className="patient-header">
                    <div className="patient-avatar">
                      {patient.name.charAt(0)}
                    </div>
                    <div>
                      <div className="patient-name">{patient.name}</div>
                      <div className="patient-details">
                        Age {patient.age} • {patient.phone}
                      </div>
                    </div>
                  </div>
                  <div className="patient-visit">
                    📅 Last visit: {new Date(patient.lastVisit).toLocaleDateString('it-IT')}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Treatment History Panel */}
        <div className="panel">
          {!selectedPatient ? (
            <div className="empty-state">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="80" height="80">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              <p>Select a patient to view treatment history</p>
            </div>
          ) : (
            <>
              <div className="patient-info-header">
                <div className="patient-info-name">{selectedPatient.name}</div>
                <div className="patient-info-details">
                  <span>👤 Age {selectedPatient.age}</span>
                  <span>📞 {selectedPatient.phone}</span>
                  <span>📅 Last visit: {new Date(selectedPatient.lastVisit).toLocaleDateString('it-IT')}</span>
                </div>
              </div>

              {!treatmentsLoading && treatments.length > 0 && (
                <div className="stats">
                  <div className="stat-card">
                    <div className="stat-number">{filteredTreatments.length}</div>
                    <div className="stat-label">
                      {filterType === 'all' && dateFilter === 'all' 
                        ? 'Total Treatments' 
                        : 'Filtered Treatments'}
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">€{totalCost.toFixed(0)}</div>
                    <div className="stat-label">Total Cost</div>
                  </div>
                  {dateRange && (
                    <div className="stat-card">
                      <div className="stat-number">{Math.ceil((dateRange.newest.getTime() - dateRange.oldest.getTime()) / (1000 * 60 * 60 * 24))}d</div>
                      <div className="stat-label">Date Range</div>
                    </div>
                  )}
                </div>
              )}

              {/* Filters */}
              <div className="filters-container">
                <div className="filter-section">
                  <span className="filter-label">🔍 Type:</span>
                  <select
                    className="filter-select"
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                  >
                    {treatmentTypes.map(type => (
                      <option key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date Filter */}
                <div className="filter-section">
                  <span className="filter-label">📅 Date:</span>
                  <select
                    className="filter-select"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                  >
                    <option value="all">All time</option>
                    <option value="last30">Last 30 days</option>
                    <option value="last90">Last 3 months</option>
                    <option value="last180">Last 6 months</option>
                    <option value="lastyear">Last year</option>
                  </select>
                </div>

                {/* Reset Filters button */}
                {(filterType !== 'all' || dateFilter !== 'all') && (
                  <button className="reset-button" onClick={resetFilters}>
                    ↺ Reset Filters
                  </button>
                )}
              </div>

              {treatmentsLoading ? (
                <div className="loading">
                  <div className="spinner"></div>
                </div>
              ) : treatmentsError ? (
                <div className="error-state">
                  <p>⚠️ Error loading treatments</p>
                </div>
              ) : filteredTreatments.length === 0 ? (
                <div className="empty-state">
                  <p>No treatments found with current filters</p>
                  <button className="reset-button" onClick={resetFilters}>
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="treatments-container">
                  <p className="results-count">
                    Showing {filteredTreatments.length} of {treatments.length} treatments
                  </p>
                  {filteredTreatments.map((treatment) => (
                    <div key={treatment.id} className="treatment-card">
                      <div className="treatment-header">
                        <div>
                          <div className="treatment-badge">{treatment.type}</div>
                          <div className="treatment-notes">{treatment.notes}</div>
                        </div>
                        <div className="treatment-cost">{treatment.cost}</div>
                      </div>
                      <div className="treatment-date">📅 {new Date(treatment.date).toLocaleDateString('it-IT')}</div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}