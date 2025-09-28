"use client";

import { useRouter } from "next/navigation";

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  category: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  is_recent: boolean;
  posted: string;
  created_at: string;
  experience: string;
  salaryMin: number;
  salaryMax: number;
}

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Save scroll position before navigation
    sessionStorage.setItem('jobsScrollPosition', window.scrollY.toString());
    router.push(`/jobs/${job.id}`);
  };

  return (
    <div 
      className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300 hover:transform hover:-translate-y-1 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 hover:text-blue-300 transition-colors duration-200">
                {job.title}
              </h3>
              <p className="text-xl text-white/80 mb-1">{job.company}</p>
              <p className="text-white/60 flex items-center text-lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {job.location}
              </p>
            </div>
            <span className="inline-block bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-lg">
              {job.type}
            </span>
          </div>

          <div className="flex flex-wrap gap-3 mb-4">
            <span className="bg-white/10 text-white/80 px-4 py-2 rounded-full text-lg">
              {job.category}
            </span>
            <span className="bg-white/10 text-white/80 px-4 py-2 rounded-full text-lg">
              {job.experience}
            </span>
            <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-lg">
              {job.posted}
            </span>
          </div>

          <p className="text-white/70 text-lg line-clamp-2 mb-4">
            {job.description}
          </p>
        </div>

        <div className="lg:text-right lg:pl-6 lg:border-l lg:border-white/20">
          <div className="mb-4">
            <p className="text-3xl font-bold text-white mb-2">{job.salary}</p>
            <p className="text-white/60 text-lg">Annual Salary</p>
          </div>
          
          <div 
            className="inline-flex items-center justify-center w-full lg:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-lg font-semibold group"
            onClick={handleClick}
          >
            Apply Now
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
