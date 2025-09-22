"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

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

export default function JobCard({ job, index = 0 }: { job: Job; index?: number }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .job-card {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }
      `}</style>
      
      <div 
        className="job-card bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:-translate-y-2 relative overflow-hidden"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Mouse-following effect for individual card */}
        <div 
          className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `
              radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.1), transparent 40%)
            `
          }}
        />
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <span className="text-md text-white/70">{job.posted}</span>
          </div>

          <h3 className="text-2xl font-semibold mb-3 text-white">{job.title}</h3>
          <p className="text-lg text-white/80 mb-6">{job.company}</p>

          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 text-sm bg-white/20 text-white rounded-full border border-white/30">
              {job.category}
            </span>
            <span className="px-4 py-2 text-sm bg-white/20 text-white rounded-full border border-white/30">
              {job.type}
            </span>
            <span className="px-4 py-2 text-sm bg-white/20 text-white rounded-full border border-white/30">
              {job.salary}
            </span>
            <span className="px-4 py-2 text-sm bg-white/20 text-white rounded-full border border-white/30">
              {job.location}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <Link 
              href={`/jobs/${job.id}`}
              className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition font-medium"
            >
              Apply Now
            </Link>
            <button className="px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition">
              Save Job
            </button>
          </div>
        </div>
      </div>
    </>
  );
}