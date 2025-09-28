"use client";

import { useState, useEffect, useCallback } from "react";
import HiringBanner from "./HiringBanner";

interface Filters {
  search: string;
  location: string;
  categories: string[];
  jobTypes: string[];
  experienceLevels: string[];
  datePosted: string;
  minSalary: number;
}

interface FilterSectionProps {
  onSearchClick: (filters: Filters) => void;
  loading: boolean;
  onResetFilters: () => void;
}

export default function FilterSection({ onSearchClick, loading, onResetFilters }: FilterSectionProps) {
  // State for all filter values
  const [searchText, setSearchText] = useState("");
  const [location, setLocation] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [selectedExperienceLevels, setSelectedExperienceLevels] = useState<string[]>([]);
  const [selectedDatePosted, setSelectedDatePosted] = useState<string[]>([]);
  const [salaryRange, setSalaryRange] = useState<string>("0"); // Changed to string for radio buttons
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Salary radio button options
  const salaryOptions = [
    { value: "0", label: "Any Salary" },
    { value: "30000", label: "$30,000+" },
    { value: "50000", label: "$50,000+" },
    { value: "75000", label: "$75,000+" },
    { value: "100000", label: "$100,000+" }
  ];

  // Fixed mouse move effect with proper dependencies
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const categories = ["Commerce","Telecommunications","Hotels & Tourism","Education","Financial Services"];
  const jobTypes = ["Full Time","Part Time","Freelance","Seasonal","Fixed-Price"];
  const experienceLevels = ["No-experience","Fresher","Intermediate","Expert"];
  const datePosted = ["All","Last Hour","Last 24 Hours","Last 7 Days","Last 30 Days"];

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
    // Only allow one selection for date posted
    if (selectedDatePosted.includes(date)) {
      setSelectedDatePosted([]);
    } else {
      setSelectedDatePosted([date]);
    }
  };

  // Handle salary radio button change
  const handleSalaryChange = (value: string) => {
    setSalaryRange(value);
  };

  // Handle search click
  const handleSearchClickInternal = () => {
    const filters: Filters = {
      search: searchText,
      location: location,
      categories: selectedCategories,
      jobTypes: selectedJobTypes,
      experienceLevels: selectedExperienceLevels,
      datePosted: selectedDatePosted.length > 0 ? selectedDatePosted[0] : '',
      minSalary: parseInt(salaryRange) // Convert back to number for API
    };
    onSearchClick(filters);
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchText("");
    setLocation("");
    setSelectedCategories([]);
    setSelectedJobTypes([]);
    setSelectedExperienceLevels([]);
    setSelectedDatePosted([]);
    setSalaryRange("0");
    onResetFilters();
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
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Filter Jobs</h2>
          </div>
          
          {/* Job Title Search */}
          <div className="mb-6">
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
          <div className="mb-6">
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
              <option value="San Francisco" className="text-gray-800">San Francisco</option>
              <option value="Austin" className="text-gray-800">Austin</option>
              <option value="Seattle" className="text-gray-800">Seattle</option>
              <option value="Denver" className="text-gray-800">Denver</option>
              <option value="Miami" className="text-gray-800">Miami</option>
              <option value="Portland" className="text-gray-800">Portland</option>
              <option value="Phoenix" className="text-gray-800">Phoenix</option>
              <option value="Washington DC" className="text-gray-800">Washington DC</option>
              <option value="Atlanta" className="text-gray-800">Atlanta</option>
              <option value="Dallas" className="text-gray-800">Dallas</option>
              <option value="San Diego" className="text-gray-800">San Diego</option>
            </select>
          </div>

          {/* Category */}
          <div className="mb-6">
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
          <div className="mb-6">
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
          <div className="mb-6">
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
          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-lg text-white">Date Posted</h4>
            <div className="space-y-2">
              {datePosted.map((date, i) => (
                <label key={i} className="flex items-center gap-3 text-md text-white/80">
                  <input 
                    type="radio" 
                    name="datePosted"
                    checked={selectedDatePosted.includes(date)}
                    onChange={() => handleDatePostedChange(date)}
                    className="w-5 h-5"
                  /> 
                  {date}
                </label>
              ))}
            </div>
          </div>

          {/* Salary Range - Updated to Radio Buttons */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-lg text-white">Minimum Salary</h4>
            <div className="space-y-2">
              {salaryOptions.map((option) => (
                <label key={option.value} className="flex items-center gap-3 text-md text-white/80">
                  <input 
                    type="radio" 
                    name="salary"
                    value={option.value}
                    checked={salaryRange === option.value}
                    onChange={() => handleSalaryChange(option.value)}
                    className="w-5 h-5"
                  /> 
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          {/* Search/Filter Button */}
          <button 
            onClick={handleSearchClickInternal}
            disabled={loading}
            className="w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-blue-50 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 mb-4"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Searching...
              </span>
            ) : (
              "Search Jobs"
            )}
          </button>

          {/* Reset All Filters Button */}
          <button 
            onClick={resetFilters}
            disabled={loading}
            className="w-full border-2 border-white text-white py-3 rounded-lg hover:bg-white/10 transition text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed mb-6"
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
