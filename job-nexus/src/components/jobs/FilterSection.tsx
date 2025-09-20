"use client";

import HiringBanner from "./HiringBanner";

export default function FilterSection() {
  const categories = ["Commerce","Telecommunications","Hotels & Tourism","Education","Financial Services"];
  const jobTypes = ["Full Time","Part Time","Freelance","Seasonal","Fixed-Price"];
  const experienceLevels = ["No-experience","Fresher","Intermediate","Expert"];
  const datePosted = ["All","Last Hour","Last 24 Hours","Last 7 Days","Last 30 Days"];
  const tags = ["engineering","design","ui/ux","marketing","management","soft","construction"];

  return (
    <div className="space-y-6">
      {/* Job Title Search */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Search by Job Title</h3>
        <input type="text" placeholder="Job title or company"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
      </div>

      {/* Location */}
      <div>
        <h4 className="font-medium mb-2">Location</h4>
        <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option>Choose city</option>
          <option>New York</option>
          <option>Los Angeles</option>
          <option>Chicago</option>
        </select>
      </div>

      {/* Category */}
      <div>
        <h4 className="font-medium mb-2">Category</h4>
        {categories.map((cat, i) => (
          <label key={i} className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox"/> {cat}
          </label>
        ))}
      </div>

      {/* Job Type */}
      <div>
        <h4 className="font-medium mb-2">Job Type</h4>
        {jobTypes.map((type, i) => (
          <label key={i} className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox"/> {type}
          </label>
        ))}
      </div>

      {/* Experience Level */}
      <div>
        <h4 className="font-medium mb-2">Experience Level</h4>
        {experienceLevels.map((level, i) => (
          <label key={i} className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox"/> {level}
          </label>
        ))}
      </div>

      {/* Date Posted */}
      <div>
        <h4 className="font-medium mb-2">Date Posted</h4>
        {datePosted.map((date, i) => (
          <label key={i} className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox"/> {date}
          </label>
        ))}
      </div>

      {/* Salary */}
      <div>
        <h4 className="font-medium mb-2">Salary</h4>
        <div className="mb-2">
          <input type="range" min="0" max="9999" className="w-full"/>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>$0</span>
          <span>$9999</span>
        </div>
        <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Apply
        </button>
      </div>

      {/* Tags */}
      <div>
        <h4 className="font-medium mb-2">Tags</h4>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">{tag}</span>
          ))}
        </div>
      </div>

      {/* Hiring Banner */}
      <HiringBanner />
    </div>
  );
}
