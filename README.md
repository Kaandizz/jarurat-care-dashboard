# Jarurat Care – Patient Records Dashboard

A modern, responsive React web application for managing patient records. Built as a frontend internship assessment project showcasing React, TypeScript, state management, and API integration skills.

## 🎯 Features

### Core Functionality
- **Landing Page**: Welcome screen with navigation and call-to-action
- **Patient Records Management**: 
  - Fetch patient data from JSONPlaceholder API
  - Display patients in responsive card grid layout
  - Search patients by name in real-time
  - View detailed patient information in modal
- **Add New Patients**: Form to add custom patients (stored in localStorage)
- **About Page**: Information about Jarurat Care and its mission
- **Error Handling**: Loading states, error messages, and retry functionality

### Technical Highlights
- **React Hooks**: useState, useEffect, useMemo for efficient state management
- **TypeScript**: Full type safety across the application
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean design using shadcn/ui components
- **Local Storage**: Persistence for newly added patients
- **API Integration**: JSONPlaceholder users API with data transformation

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd jarurat-care
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── Header.tsx       # Navigation header
│   ├── PatientCard.tsx  # Patient display card
│   ├── PatientModal.tsx # Patient details modal
│   ├── SearchBar.tsx    # Search input component
│   ├── LoadingSpinner.tsx
│   └── AddPatientForm.tsx
├── pages/
│   ├── Index.tsx        # Landing page
│   ├── Patients.tsx     # Main patients page
│   ├── About.tsx        # About page
│   └── NotFound.tsx     # 404 page
├── types/
│   └── patient.ts       # TypeScript interfaces
├── lib/
│   └── utils.ts         # Utility functions
├── App.tsx              # Main app component with routing
└── index.css            # Global styles and design system
```

## 🎨 Design System

The application uses a healthcare-inspired design system:

- **Primary Color**: Medical Blue (HSL 210°, 95%, 50%)
- **Secondary Color**: Teal Accent (HSL 180°, 70%, 45%)
- **Typography**: Clean sans-serif with clear hierarchy
- **Components**: Shadcn/ui for consistent, accessible UI elements
- **Responsive**: Mobile-first with breakpoints for all screen sizes

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality, accessible UI components
- **React Router**: Client-side routing
- **Lucide React**: Beautiful icon library
- **Sonner**: Toast notifications

## 📝 API Integration

The app fetches patient data from JSONPlaceholder API:
- **Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **Transformation**: Adds random age field (18-80 years)
- **Error Handling**: Graceful error states with retry option
- **Loading States**: Spinner during data fetch

## 💾 Data Persistence

- API-fetched patients are displayed from the API
- Locally added patients are stored in `localStorage`
- Data persists across browser sessions
- Patients are merged (API + local) for display

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your GitHub repository

## 📸 Screenshots

### Home Page
![Home Page - Hero section with navigation and call-to-action](/public/Home%20Page.png)

### Patients Page
![Patients Page - Grid of patient cards with search functionality](/public/Patients%20Page.png)

### Patient Details Modal
![Patient Details - Comprehensive patient information modal](/public/Patient%20Details%20Modal.png)

### Add Patient Form
![Add Patient - Form to add new patients locally](/public/Add%20Patient%20Form.png)

## 🧪 Testing Locally

1. **Home Page**: Navigate through the hero section and features
2. **Patients Page**: 
   - Wait for patients to load from API
   - Search for patients by name
   - Click "View Details" on any card
   - Add a new patient using the form
   - Refresh page to verify localStorage persistence
3. **About Page**: View company information and values

## 📄 License

This project has been developed as part of an internship evaluation assignment for Jarurat Care..

## 👤 Author

Created by **Hamza Hilal** as part of a frontend internship assessment to demonstrate React, TypeScript, and modern web development skills.

---

**Built with using React, TypeScript, and Vite**
