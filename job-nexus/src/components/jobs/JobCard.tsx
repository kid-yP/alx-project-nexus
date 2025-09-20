"use client";

import Link from "next/link";

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  category: string;
  posted: string;
}

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <span className="text-sm text-gray-500">{job.posted}</span>
        
        {/* Job Details Link */}
        <Link
          href={`/jobs/${job.id}`}
          className="text-blue-600 text-sm font-semibold hover:underline"
        >
          Job Details
        </Link>
      </div>

      <h3 className="text-xl font-semibold mb-2 text-gray-800">{job.title}</h3>
      <p className="text-gray-600 mb-4">{job.company}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
          {job.category}
        </span>
        <span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
          {job.type}
        </span>
        <span className="px-3 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-full">
          {job.salary}
        </span>
        <span className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">
          {job.location}
        </span>
      </div>
    </div>
  );
}
