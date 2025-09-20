"use client";

import { useState } from "react";
import Link from "next/link";

export default function JobDetailsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // handle submission logic
  };

  const relatedJobs = [
    {
      id: "2",
      title: "Internal Creative Coordinator",
      company: "Green Group",
      type: "Full time",
      salary: "$44000-$45000",
      location: "New-York, USA",
    },
    {
      id: "3",
      title: "District Intranet Director",
      company: "Workmaster - Weber Co",
      type: "Full time",
      salary: "$45000-$45000",
      location: "New-York, USA",
    },
    {
      id: "4",
      title: "Corporate Tactics Facilitator",
      company: "Corporate, Turner and Fitzsaying Inc.",
      type: "Full time",
      salary: "$35000-$40000",
      location: "New-York, USA",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Job Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Corporate Solutions Executive
        </h1>
        <p className="text-xl text-gray-600 mb-4">Lettler and Sons</p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            Full time
          </span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
            $44000-$45000
          </span>
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
            New-York, USA
          </span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
            Commerce
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Job Description */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Job Description
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-4">
                More said and known. Much of the actual plan found to happen.
                Sit longer now into each other than a Feller or Ullman's such
                mission.
              </p>
              <p className="text-gray-700">
                Excuse of tensions due to the fact that Obama works functionally
                while roles can come. Cost includes depositions where merit
                adjusting across all needs.
              </p>
            </div>
          </section>

          {/* Key Responsibilities */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Key Responsibilities
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ul className="space-y-3">
                {[
                  "It turned out to mean due not real manual...",
                  "Cost includes depositions ago when we are adjusting fitness...",
                  "Owner would function role roles roles can come...",
                  "Tender went profit profit in...",
                  "Outrage included medical notes parts",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Professional Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Professional Skills
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ul className="space-y-3">
                {[
                  "Strong communication skills",
                  "Problem-solving ability",
                  "Experience in team leadership",
                  "Time management skills",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Tags */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tags:</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Full time",
                "Commerce",
                "New-York",
                "Corporate",
                "Location",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Related Jobs */}
          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Related Jobs
            </h2>
            <div className="space-y-4">
              {relatedJobs.map((job) => (
                <div
                  key={job.id}
                  className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition"
                >
                  <h3 className="font-semibold text-gray-800">{job.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{job.company}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {job.type}
                    </span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      {job.salary}
                    </span>
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                      {job.location}
                    </span>
                  </div>
                  <Link
                    href={`/jobs/${job.id}`}
                    className="text-blue-600 text-sm font-semibold hover:underline"
                  >
                    Job Details →
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Job Overview */}
          <section className="mb-8 bg-white p-6 rounded-lg shadow-sm sticky top-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Job Overview
            </h2>
            <div className="space-y-4 text-sm text-gray-700">
              <p>
                <strong>Job Title:</strong> Corporate Solutions Executive
              </p>
              <p>
                <strong>Job Type:</strong> Full Time
              </p>
              <p>
                <strong>Category:</strong> Commerce
              </p>
              <p>
                <strong>Experience:</strong> 5 Years
              </p>
              <p>
                <strong>Degree:</strong> Master
              </p>
              <p>
                <strong>Offered Salary:</strong> $40000-$42000
              </p>
              <p>
                <strong>Location:</strong> New-York, USA
              </p>
            </div>
          </section>

          {/* Application Form */}
          <section className="bg-white p-6 rounded-lg shadow-sm sticky top-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Apply for this Position
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition"
              >
                Submit Application
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
