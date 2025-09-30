🌐 JobNexus

A modern job board platform for seamless job discovery and application.

📄 Overview

JobNexus is a sleek, responsive web application built for the ALX Project Nexus (Frontend Development track). It empowers users to:

🔍 Browse dynamic job listings via custom API routes

🧭 Filter jobs by category, location, experience level, and salary

📄 View detailed job descriptions and company profiles

📱 Enjoy a mobile-first interface with smooth animations

Developed in just 2 weeks in collaboration with a backend partner from ALX BE ProDev.

🎨 Figma Design

Explore the interactive prototype: 👉 Figma Design – JobNexus

🧱 Tech Stack

Layer	Technology
Frontend	Next.js (App Router), TypeScript, Tailwind CSS, Apollo Client
Backend	Custom API routes via Next.js App Router
Deployment	Vercel

✨ Features

✅ Dynamic job listings with API integration

✅ Advanced filtering (category, location, experience, salary)

✅ Responsive mobile-first design with Tailwind CSS

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
⚙️ To customize mock job data, edit: src/mocks/jobs.ts

🧪 API Overview
JobNexus uses Next.js App Router to define backend routes.

Example: GET /api/jobs/recent

ts
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
Code
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

Filters:

Category

Job type

Experience level

Date posted

Salary range

Sorting Options:

Latest

Highest salary

Relevance

Powered by a mock API with pagination and query parameters.

🧩 Animations

✨ Mouse-following gradient effects

🎬 Fade-in transitions for FAQ, companies, and hero sections

🔁 Trusted companies animation repeats every 5 seconds

📈 Roadmap
✅ UI Finalization

✅ API Route Integration

✅ Filtering & Sorting

✅ Authentication & User Dashboard

⏳ Resume Upload & Application Tracking (Coming Soon)

📸 Demo
🔗 Live Preview: job-nexus-plum.vercel.app

📊 Evaluation Criteria
Functionality: API integration, filtering, responsive design

Code Quality: TypeScript practices, modular structure

UX: Accessibility, performance, cross-device compatibility
