🌐 JobNexus

A modern job board platform for seamless job discovery and application.

📄 Overview

JobNexus is a responsive web application built for the ALX Project Nexus (Frontend Development track). It empowers users to:

🔍 Browse job listings dynamically via custom API routes

🧭 Filter jobs by category, location, experience level, and salary

📄 View detailed job descriptions and company profiles

📱 Enjoy a polished, mobile-first interface with smooth animations

Developed over 2 weeks in collaboration with a backend partner from ALX BE ProDev (Backend Development track).

🎨 Figma Design

https://www.figma.com/design/Sn7j3S6IxpblDvh9gO4uU7/Interactive-Job-Board-Platform-%E2%80%93-Project-Nexus?node-id=0-1&t=GMmoSNhoDqcYIUpk-0

🧱 Tech Stack

Layer	Technology
Frontend	Next.js (App Router), TypeScript, Tailwind CSS, Apollo Client
Backend	Custom API routes via Next.js App Router
Deployment	Vercel

✨ Features

✅ Dynamic job listings with API integration

✅ Advanced filtering (category, location, experience, salary)

✅ Responsive design (mobile-first) using Tailwind CSS

✅ Trusted companies showcase with repeat animations

✅ Mouse-following gradient effects

✅ Accessible job detail pages

✅ Loading states & error handling

✅ Modular codebase with reusable components

🛠️ Installation

bash
# Clone the repository
git clone https://github.com/kid-yP/alx-project-nexus.git

# Navigate to the project directory
cd job-nexus

# Install dependencies
npm install

# Run the development server
npm run dev
⚙️ Configuration
To customize mock job data, edit:

ts
src/mocks/jobs.ts

🧪 API Overview

JobNexus uses Next.js App Router to define backend routes. Example of a GET handler for recent jobs:

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
    // ...
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

Filters: Category, job type, experience level, date posted, salary range

Sorting: Latest, highest salary, relevance

Powered by mock API with pagination and query parameters

🧩 Animations

    ✨ Mouse-following gradient effects

    🎬 Fade-in transitions for FAQ, companies, and hero sections

    🔁 Trusted companies animation repeats every 5 seconds

📈 Roadmap

    ✅ UI Finalization

    ✅ API Route Integration

    ✅ Filtering & Sorting

    ✅ Authentication & User Dashboard

    ⏳ Resume Upload & Application Tracking

📸 Demo

🔗 Live Preview: JobNexus


📊 Evaluation Criteria

Functionality: API integration, filtering, responsive design

Code Quality: TypeScript practices, modular structure

UX: Accessibility, performance, cross-device compatibility
