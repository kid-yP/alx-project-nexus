"use client";

import React from "react";
import JobCard from "../jobs/JobCard";

const mockJobs = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    type: "Full-time",
    salary: "$4000 - $4200",
    category: "Software Development",
    posted: "2 hours ago",
  },
  {
    id: "2",
    title: "UI/UX Designer",
    company: "Designify",
    location: "New York, USA",
    type: "Hybrid",
    salary: "$3500 - $3800",
    category: "Design",
    posted: "5 hours ago",
  },
  {
    id: "3",
    title: "Backend Engineer",
    company: "HealthPlus",
    location: "London, UK",
    type: "Full-time",
    salary: "$4500 - $4800",
    category: "Software Development",
    posted: "1 day ago",
  },
  {
    id: "4",
    title: "Project Manager",
    company: "FinServe",
    location: "Boston, USA",
    type: "Full-time",
    salary: "$5000 - $5200",
    category: "Management",
    posted: "3 days ago",
  },
  {
    id: "5",
    title: "Marketing Specialist",
    company: "AdWorks",
    location: "Los Angeles, USA",
    type: "Part-time",
    salary: "$2000 - $2500",
    category: "Marketing",
    posted: "2 days ago",
  },
  {
    id: "6",
    title: "Data Analyst",
    company: "DataCorp",
    location: "Remote",
    type: "Full-time",
    salary: "$4000 - $4300",
    category: "Data Science",
    posted: "6 hours ago",
  },
];

const RecentJobsSection: React.FC = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Recent Job Listings</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
          View All Jobs
        </button>
      </div>
    </section>
  );
};

export default RecentJobsSection;
