🌐 JobNexus
A modern job board platform for seamless job discovery and application.

📄 Overview
JobNexus is a responsive web application built for the ALX Project Nexus (Frontend Development track). It empowers users to:

🔍 Browse job listings dynamically via custom API routes

🧭 Filter jobs by category, location, experience level, and salary

📄 View detailed job descriptions and company profiles

📱 Enjoy a polished, mobile-first interface with smooth animations

Developed over 2 weeks in collaboration with a backend partner from ALX BE ProDev (Backend Development track).

🧱 Tech Stack
Frontend
Next.js (App Router) – React framework for SSR & routing

TypeScript – Type-safe development

Tailwind CSS – Utility-first styling and responsive design

Apollo Client – GraphQL client for frontend

Backend
Custom API routes using Next.js App Router (app/api/jobs/recent/route.ts)

Deployment
Vercel

✨ Features
✅ Dynamic job listings with API integration ✅ Advanced filtering (category, location, experience, salary) ✅ Responsive design (mobile-first) using Tailwind CSS ✅ Trusted companies showcase with repeat animations ✅ Mouse-following gradient effects ✅ Accessible job detail pages ✅ Loading states & error handling ✅ Modular codebase with reusable components

🛠️ Installation
Clone the repository:

bash
git clone https://github.com/yuslove1/Project-Nexus.git
Navigate to the project directory:

bash
cd job-nexus
Install dependencies:

bash
npm install
Run the development server:

bash
npm run dev

⚙️ Configuration

Mock Data: Edit src/mocks/jobs.ts to add or update sample job listings.

🧪 API Overview

JobNexus uses Next.js App Router to define backend routes. Here's an example of a GET handler for recent jobs:

ts
// app/api/jobs/recent/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      location: 'Remote',
      experience: 'Mid-Level',
    },
    ...
  ];

  return NextResponse.json(jobs);
}

📂 Project Structure
bash
src/
├── components/
│   └── jobs/
│       ├── JobCard.tsx
│       ├── FilterSection.tsx
│       └── TopCompanies.tsx
├── pages/
│   ├── index.tsx
│   └── jobs.tsx
├── api/
│   └── jobs/
│       └── route.ts
├── styles/
│   └── globals.css
📊 Filtering & Sorting
Filters: category, job type, experience level, date posted, salary range

Sorting: latest, highest salary, relevance

Implemented via mock API with pagination and query parameters

🧩 Animations
✨ Mouse-following gradient effects

🎬 Fade-in transitions for FAQ, companies, and hero sections

🔁 Trusted companies animation repeats every 5 seconds

📈 Roadmap
✅ UI Finalization

✅ Supabase DB Setup

✅ API Route Integration

✅ Filtering & Sorting

⏳ Authentication & User Dashboard

⏳ Resume Upload & Application Tracking

📸 Demo
🔗 Live Preview: JobNexus

🤝 Collaboration
Frontend: Kidus Yosef Backend Partner: Temitope Olowosuyi

📊 Evaluation Criteria
Functionality: API integration, filtering, responsive design

Code Quality: TypeScript practices, modular structure

UX: Accessibility, performance, cross-device compatibility
