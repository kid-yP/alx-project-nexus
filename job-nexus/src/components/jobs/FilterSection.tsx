"use client";

import { useState, useEffect } from "react";
import HiringBanner from "./HiringBanner";

export default function FilterSection() {
  // State for all filter values
  const [searchText, setSearchText] = useState("");
  const [location, setLocation] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [selectedExperienceLevels, setSelectedExperienceLevels] = useState<string[]>([]);
  const [selectedDatePosted, setSelectedDatePosted] = useState<string[]>([]);
  const [salaryRange, setSalaryRange] = useState(5000); // Default to middle value
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const categories = ["Commerce","Telecommunications","Hotels & Tourism","Education","Financial Services"];
  const jobTypes = ["Full Time","Part Time","Freelance","Seasonal","Fixed-Price"];
  const experienceLevels = ["No-experience","Fresher","Intermediate","Expert"];
  const datePosted = ["All","Last Hour","Last 24 Hours","Last 7 Days","Last 30 Days"];
  const tags = ["engineering","design","ui/ux","marketing","management","soft","construction"];

  // Handle checkbox changes
  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleJobTypeChange = (jobType: string) => {
    if (selectedJobTypes.includes(jobType)) {
      setSelectedJobTypes(selectedJobTypes.filter(j => j !== jobType));
    } else {
      setSelectedJobTypes([...selectedJobTypes, jobType]);
    }
  };

  const handleExperienceChange = (experience: string) => {
    if (selectedExperienceLevels.includes(experience)) {
      setSelectedExperienceLevels(selectedExperienceLevels.filter(e => e !== experience));
    } else {
      setSelectedExperienceLevels([...selectedExperienceLevels, experience]);
    }
  };

  const handleDatePostedChange = (date: string) => {
    if (selectedDatePosted.includes(date)) {
      setSelectedDatePosted(selectedDatePosted.filter(d => d !== date));
    } else {
      setSelectedDatePosted([...selectedDatePosted, date]);
    }
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchText("");
    setLocation("");
    setSelectedCategories([]);
    setSelectedJobTypes([]);
    setSelectedExperienceLevels([]);
    setSelectedDatePosted([]);
    setSalaryRange(5000);
  };

  return (
    <>
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      
      <div 
        className="space-y-8 bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 relative overflow-hidden"
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
              radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.1), transparent 40%),
              radial-gradient(200px circle at ${mousePosition.x + 200}px ${mousePosition.y + 100}px, rgba(255, 255, 255, 0.05), transparent 40%)
            `
          }}
        />
        
        <div className="relative z-10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">Filter Jobs</h2>
          </div>
          
          {/* Job Title Search */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Search by Job Title</h3>
            <input 
              type="text" 
              placeholder="Job title or company"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg text-white placeholder-white/60"
            />
          </div>

          {/* Location */}
          <div>
            <h4 className="font-semibold mb-3 text-lg text-white">Location</h4>
            <select 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg text-white"
            >
              <option value="" className="text-gray-800">Choose city</option>
              <option value="New York" className="text-gray-800">New York</option>
              <option value="Los Angeles" className="text-gray-800">Los Angeles</option>
              <option value="Chicago" className="text-gray-800">Chicago</option>
              <option value="Boston" className="text-gray-800">Boston</option>
              <option value="Texas" className="text-gray-800">Texas</option>
              <option value="Florida" className="text-gray-800">Florida</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <h4 className="font-semibold mb-3 text-lg text-white">Category</h4>
            <div className="space-y-2">
              {categories.map((cat, i) => (
                <label key={i} className="flex items-center gap-3 text-md text-white/80">
                  <input 
                    type="checkbox" 
                    checked={selectedCategories.includes(cat)}
                    onChange={() => handleCategoryChange(cat)}
                    className="w-5 h-5"
                  /> 
                  {cat}
                </label>
              ))}
            </div>
          </div>

          {/* Job Type */}
          <div>
            <h4 className="font-semibold mb-3 text-lg text-white">Job Type</h4>
            <div className="space-y-2">
              {jobTypes.map((type, i) => (
                <label key={i} className="flex items-center gap-3 text-md text-white/80">
                  <input 
                    type="checkbox" 
                    checked={selectedJobTypes.includes(type)}
                    onChange={() => handleJobTypeChange(type)}
                    className="w-5 h-5"
                  /> 
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* Experience Level */}
          <div>
            <h4 className="font-semibold mb-3 text-lg text-white">Experience Level</h4>
            <div className="space-y-2">
              {experienceLevels.map((level, i) => (
                <label key={i} className="flex items-center gap-3 text-md text-white/80">
                  <input 
                    type="checkbox" 
                    checked={selectedExperienceLevels.includes(level)}
                    onChange={() => handleExperienceChange(level)}
                    className="w-5 h-5"
                  /> 
                  {level}
                </label>
              ))}
            </div>
          </div>

          {/* Date Posted */}
          <div>
            <h4 className="font-semibold mb-3 text-lg text-white">Date Posted</h4>
            <div className="space-y-2">
              {datePosted.map((date, i) => (
                <label key={i} className="flex items-center gap-3 text-md text-white/80">
                  <input 
                    type="checkbox" 
                    checked={selectedDatePosted.includes(date)}
                    onChange={() => handleDatePostedChange(date)}
                    className="w-5 h-5"
                  /> 
                  {date}
                </label>
              ))}
            </div>
          </div>

          {/* Salary */}
          <div>
            <h4 className="font-semibold mb-3 text-lg text-white">Salary Range</h4>
            <div className="mb-4">
              <input 
                type="range" 
                min="0" 
                max="10000" 
                value={salaryRange}
                onChange={(e) => setSalaryRange(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div className="flex justify-between text-md text-white/80 mb-4">
              <span>$0</span>
              <span>${salaryRange}</span>
              <span>$10,000</span>
            </div>
            <button className="w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-blue-50 text-lg">
              Apply Filters
            </button>
          </div>

          {/* Tags */}
          <div>
            <h4 className="font-semibold mb-3 text-lg text-white">Popular Tags</h4>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-white/20 text-white text-md rounded-full cursor-pointer hover:bg-white/30 transition">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Reset All Filters Button - Moved to bottom */}
          <button 
            onClick={resetFilters}
            className="w-full border-2 border-white text-white py-3 rounded-lg hover:bg-white/10 transition text-lg font-medium"
          >
            Reset All Filters
          </button>

          {/* Hiring Banner */}
          <HiringBanner />
        </div>
      </div>
    </>
  );
}