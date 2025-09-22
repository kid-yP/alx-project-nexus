"use client";

import JobCard, { Job } from "@/components/jobs/JobCard";
import FilterSection from "@/components/jobs/FilterSection";
import TopCompanies from "@/components/jobs/TopCompanies";
import { useState, useEffect } from "react";

export default function JobsPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const jobs: Job[] = [
    { id:"1", title:"Forward Security Director", company:"Bauch, Schuppe and Schulist Co", location:"New-York, USA", type:"Full time", salary:"$40000-$42000", category:"Hotels & Tourism", posted:"10 min ago" },
    { id:"2", title:"Regional Creative Facilitator", company:"Wisozk - Becker Co", location:"Los Angeles, USA", type:"Part time", salary:"$28000-$32000", category:"Media", posted:"12 min ago" },
    { id:"3", title:"Internal Integration Planner", company:"Mraz, Quigley and Feest Inc.", location:"Texas, USA", type:"Full time", salary:"$48000-$50000", category:"Construction", posted:"15 min ago" },
    { id:"4", title:"District Intranet Director", company:"VonRueden - Weber Co", location:"Florida, USA", type:"Full time", salary:"$42000-$48000", category:"Commerce", posted:"24 min ago" },
    { id:"5", title:"Corporate Tactics Facilitator", company:"Cormier, Turner and Flatley Inc", location:"Boston, USA", type:"Full time", salary:"$38000-$40000", category:"Commerce", posted:"26 min ago" },
    { id:"6", title:"Forward Accounts Consultant", company:"Miller Group", location:"Boston, USA", type:"Full time", salary:"$45000-$48000", category:"Financial services", posted:"30 min ago" }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      
      <main 
        className="min-h-screen relative overflow-hidden"
        style={{
          background: "linear-gradient(-45deg, #667eea, #764ba2, #6B8DD6, #8E37D7)",
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite"
        }}
      >
        {/* Mouse-following effect */}
        <div 
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{
            background: `
              radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.1), transparent 40%),
              radial-gradient(400px circle at ${mousePosition.x + 200}px ${mousePosition.y + 100}px, rgba(255, 255, 255, 0.05), transparent 40%)
            `
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">        
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <FilterSection />
            </div>

            {/* Job Listings */}
            <div className="lg:w-3/4">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <p className="text-lg text-white/80 mb-4 md:mb-0">Showing {jobs.length} of {jobs.length} results</p>
                <div className="flex items-center">
                  <span className="text-white/80 mr-3">Sort by</span>
                  <select className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white">
                    <option className="text-gray-800">latest</option>
                    <option className="text-gray-800">salary (high to low)</option>
                    <option className="text-gray-800">salary (low to high)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                {jobs.map((job, index) => (
                  <JobCard key={job.id} job={job} index={index} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-4">
                  <button className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 text-lg transition-all duration-300 hover:transform hover:-translate-y-1">1</button>
                  <button className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 text-lg transition-all duration-300 hover:transform hover:-translate-y-1">2</button>
                  <button className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 text-lg transition-all duration-300 hover:transform hover:-translate-y-1">Next &gt;</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <TopCompanies />
      </main>
    </>
  );
}