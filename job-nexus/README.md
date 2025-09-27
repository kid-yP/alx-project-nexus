🌐 JobNexus

Find Your Dream Job Today! JobNexus is a modern job portal built with Next.js and TypeScript, designed to connect top talent with leading companies. It features dynamic job listings, advanced filtering, and a sleek UI powered by Supabase and GraphQL.


🚀 Features

🔍 Search & Filter Jobs by title, location, category, type, experience level, and salary

🆕 Recent Jobs Feed on homepage with real-time updates

📄 Detailed Job Descriptions with responsibilities and requirements

🧠 GraphQL Integration for efficient data fetching

🎨 Animated UI with mouse-follow effects and smooth transitions

🏢 Trusted Companies Showcase with repeat animations

📦 Mock API with Pagination, Sorting, and Filtering

📁 Modular Codebase with reusable components and clean structure


🧱 Tech Stack

🛠️ Technology	💡 Purpose
Next.js	React framework for SSR & routing
TypeScript	Type-safe development
Supabase	Backend-as-a-service (DB + Auth)
Apollo Client	GraphQL client for frontend
Tailwind CSS	Styling and responsive design


🛠️ Setup Instructions

1️⃣ Clone the Repository
bash
git clone https://github.com/your-username/jobnexus.git
cd jobnexus

2️⃣ Install Dependencies
bash
npm install

3️⃣ Configure Environment Variables
Create a .env.local file and add:

env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co  
NEXT_PUBLIC_SUPABASE_KEY=your-anon-key  
NEXT_PUBLIC_GRAPHQL_URL=https://your-api-endpoint.com/graphql

4️⃣ Run the Development Server
bash
npm run dev


🧪 API Overview

📦 API Route Setup (App Router)
In Next.js App Router, API routes are defined using route.ts files inside the app/api directory. Here's an example of a GET handler for recent jobs:

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
    {
      id: 2,
      title: 'Backend Engineer',
      location: 'New York',
      experience: 'Senior',
    },
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

✅ GraphQL Integration

✅ Filtering & Sorting

⏳ Authentication & User Dashboard

⏳ Resume Upload & Application Tracking


📸 Demo
🔗 Live Preview: JobNexus


🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.
