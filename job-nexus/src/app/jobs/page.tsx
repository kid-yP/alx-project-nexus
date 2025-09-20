"use client";

import JobCard, { Job } from "@/components/jobs/JobCard";
import FilterSection from "@/components/jobs/FilterSection";
import TopCompanies from "@/components/jobs/TopCompanies";

export default function JobsPage() {
  const jobs: Job[] = [
    { id:"1", title:"Forward Security Director", company:"Bauch, Schuppe and Schulist Co", location:"New-York, USA", type:"Full time", salary:"$40000-$42000", category:"Hotels & Tourism", posted:"10 min ago" },
    { id:"2", title:"Regional Creative Facilitator", company:"Wisozk - Becker Co", location:"Los Angeles, USA", type:"Part time", salary:"$28000-$32000", category:"Media", posted:"12 min ago" },
    { id:"3", title:"Internal Integration Planner", company:"Mraz, Quigley and Feest Inc.", location:"Texas, USA", type:"Full time", salary:"$48000-$50000", category:"Construction", posted:"15 min ago" },
    { id:"4", title:"District Intranet Director", company:"VonRueden - Weber Co", location:"Florida, USA", type:"Full time", salary:"$42000-$48000", category:"Commerce", posted:"24 min ago" },
    { id:"5", title:"Corporate Tactics Facilitator", company:"Cormier, Turner and Flatley Inc", location:"Boston, USA", type:"Full time", salary:"$38000-$40000", category:"Commerce", posted:"26 min ago" },
    { id:"6", title:"Forward Accounts Consultant", company:"Miller Group", location:"Boston, USA", type:"Full time", salary:"$45000-$48000", category:"Financial services", posted:"30 min ago" }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="md:w-1/4">
          <FilterSection />
        </div>

        {/* Job Listings */}
        <div className="md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">Showing 6-6 of 10 results</p>
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">Sort by</span>
              <select className="px-3 py-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>latest</option>
                <option>salary (high to low)</option>
                <option>salary (low to high)</option>
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {jobs.map(job => <JobCard key={job.id} job={job} />)}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100">1</button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100">2</button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100">Next &gt;</button>
            </div>
          </div>
        </div>
      </div>

      <TopCompanies />
    </main>
  );
}
