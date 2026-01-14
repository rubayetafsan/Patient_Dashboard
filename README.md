# 🦷 Patient Dashboard - Dental Practice Management System

A modern, full-stack patient management system built with Next.js 14, TypeScript, and RTK Query. Designed for dental practices to manage patient records and treatment history efficiently.

![Patient Dashboard](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![RTK Query](https://img.shields.io/badge/RTK_Query-2.0-purple)

## 🌟 Features

### Core Functionality
- ✅ **Patient Management** - View and search through patient records
- ✅ **Treatment History** - Detailed treatment records for each patient
- ✅ **Real-time Search** - Instant patient search by name
- ✅ **Advanced Filtering** - Filter treatments by type and date range
- ✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

### Technical Features
- ✅ **Full-Stack Architecture** - Next.js API Routes + React Frontend
- ✅ **Type Safety** - 100% TypeScript implementation
- ✅ **State Management** - RTK Query for efficient data fetching and caching
- ✅ **Modern UI** - Clean, professional interface with smooth animations

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/rubayetafsan/Patient_Dashboard.git
cd Patient_Dashboard
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
```
http://localhost:3000
http://localhost:3000/api/patients
http://localhost:3000/api/patients/1/treatments
```

## Screenshots

![Homepage ](Backend/src/images/Sales_Analytics_Dashboard.jpg)
![graphql](Backend/src/images/graphql.jpg)
![api-docs](Backend/src/images/api-docs.jpg)


## 📁 Project Structure

```
patient-dashboard/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── patients/
│   │   │       ├── route.ts                    # GET /api/patients
│   │   │       └── [id]/
│   │   │           └── treatments/
│   │   │               └── route.ts            # GET /api/patients/:id/treatments
│   │   ├── globals.css                         # Global styles
│   │   ├── layout.tsx                          # Root layout
│   │   ├── page.tsx                            # Main dashboard page
│   │   └── providers.tsx                       # Redux Provider wrapper
│   ├── lib/
│   │   ├── store.ts                            # Redux store configuration
│   │   └── features/
│   │       └── api/
│   │           └── patientsApi.ts              # RTK Query API slice
│   ├── types/
│   │   └── index.ts                            # TypeScript type definitions
│   └── data/
│       └── mockData.ts                         # Mock patient and treatment data
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## 🔌 API Endpoints

### GET `/api/patients`
Returns a list of all patients.

**Response:**
```json
{
  "patients": [
    {
      "id": 1,
      "name": "Marco Rossi",
      "age": 45,
      "phone": "+39 348 5012345",
      "lastVisit": "2025-12-28"
    }
  ],
  "timestamp": "2026-01-12T22:59:13.506Z"
}
```

### GET `/api/patients/:id/treatments`
Returns treatment history for a specific patient.

**Response:**
```json
{
  "treatments": [
    {
      "id": 101,
      "patientId": 1,
      "type": "Pulizia",
      "date": "2025-12-28",
      "cost": "€85",
      "notes": "Pulizia dentale di routine, nessun problema riscontrato"
    },
    {
      "id": 102,
      "patientId": 1,
      "type": "Otturazione",
      "date": "2025-11-10",
      "cost": "€180",
      "notes": "Otturazione in composito sul dente"
    },
    {
      "id": 103,
      "patientId": 1,
      "type": "Radiografia",
      "date": "2025-11-10",
      "cost": "€60",
      "notes": "Radiografia panoramica completa"
    }
  ],
  "patientId": 1,
  "timestamp": "2026-01-14T19:16:06.579Z"
}
```

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **State Management:** Redux Toolkit + RTK Query
- **Styling:** CSS Modules with custom design system
- **UI Components:** Custom React components

### Backend
- **API:** Next.js API Routes
- **Data Storage:** In-memory (mock data)
- **Type Safety:** TypeScript interfaces

### Development Tools
- **Package Manager:** npm
- **Code Quality:** ESLint
- **Type Checking:** TypeScript 5.0

## 📊 Features in Detail

### Patient List
- Search patients by name in real-time
- Display patient avatar with initials
- Show age, phone number, and last visit date
- Click to select and view treatments
- Visual indication of selected patient

### Treatment History
- Filter by treatment type (Pulizia, Otturazione, Corona, etc.)
- Filter by date range (Last 30 days, 3 months, 6 months, 1 year)
- Sort treatments by date (newest first)
- Display treatment cost, date, and detailed notes
- Statistics cards showing:
  - Total/filtered treatments count
  - Total cost in Euros
  - Date range of treatments

### Responsive Design
- Mobile-first approach
- Adaptive grid layout
- Touch-friendly interface
- Optimized for all screen sizes

## 📝 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```



## 🧪 Testing the API

You can test the API endpoints directly:

**Get all patients:**
```bash
curl http://localhost:3000/api/patients
```

**Get treatments for patient ID 1:**
```bash
curl http://localhost:3000/api/patients/1/treatments
```

Or open these URLs in your browser while the dev server is running.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 👨‍💻 Author

Built with ❤️ for dental practice management

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Support

For support, email rubayet.afsan@gmail.com or open an issue on GitHub.
