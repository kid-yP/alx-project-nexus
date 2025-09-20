"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Find Your Dream Job Today!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Connecting Talent with Opportunity: Your Gateway to Career Success
        </p>

        <div className="bg-white p-4 rounded-lg shadow-md mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input type="text" placeholder="Job Title or Company" />
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Select Location</option>
              <option>New York, USA</option>
              <option>Los Angeles, USA</option>
              <option>Texas, USA</option>
              <option>Florida, USA</option>
              <option>Boston, USA</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Select Category</option>
              <option>Agriculture</option>
              <option>Commerce</option>
              <option>Construction</option>
              <option>Hotels & Tourism</option>
              <option>Education</option>
              <option>Financial Services</option>
              <option>Transport</option>
            </select>
            <Button className="w-full">Search Job</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
