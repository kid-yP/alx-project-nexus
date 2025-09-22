"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function JobDetailsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
    console.log(formData);
    alert("Application submitted successfully!");
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
    <>
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
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
        .content-section {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }
        .content-section:nth-child(1) { animation-delay: 0.1s; }
        .content-section:nth-child(2) { animation-delay: 0.2s; }
        .content-section:nth-child(3) { animation-delay: 0.3s; }
        .content-section:nth-child(4) { animation-delay: 0.4s; }
        .sidebar-section {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }
        .sidebar-section:nth-child(1) { animation-delay: 0.2s; }
        .sidebar-section:nth-child(2) { animation-delay: 0.3s; }
        .related-job {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }
        .related-job:nth-child(1) { animation-delay: 0.2s; }
        .related-job:nth-child(2) { animation-delay: 0.3s; }
        .related-job:nth-child(3) { animation-delay: 0.4s; }
      `}</style>
      
      <div 
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
        
        <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
          {/* Job Header */}
          <div className="mb-12 bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 content-section">
            <h1 className="text-4xl font-bold text-white mb-4">
              Corporate Solutions Executive
            </h1>
            <p className="text-2xl text-white/80 mb-6">Lettler and Sons</p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-md">
                Full time
              </span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-md">
                $44000-$45000
              </span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-md">
                New-York, USA
              </span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-md">
                Commerce
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Job Description */}
              <section className="mb-10 content-section">
                <h2 className="text-3xl font-semibold text-white mb-6">
                  Job Description
                </h2>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300">
                  <p className="text-white/80 text-lg mb-6">
                    More said and known. Much of the actual plan found to happen.
                    Sit longer now into each other than a Feller or Ullman's such
                    mission.
                  </p>
                  <p className="text-white/80 text-lg">
                    Excuse of tensions due to the fact that Obama works functionally
                    while roles can come. Cost includes depositions where merit
                    adjusting across all needs.
                  </p>
                </div>
              </section>

              {/* Key Responsibilities */}
              <section className="mb-10 content-section">
                <h2 className="text-3xl font-semibold text-white mb-6">
                  Key Responsibilities
                </h2>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300">
                  <ul className="space-y-4">
                    {[
                      "It turned out to mean due not real manual...",
                      "Cost includes depositions ago when we are adjusting fitness...",
                      "Owner would function role roles roles can come...",
                      "Tender went profit profit in...",
                      "Outrage included medical notes parts",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-200 mr-3 mt-1 text-xl">•</span>
                        <span className="text-white/80 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Professional Skills */}
              <section className="mb-10 content-section">
                <h2 className="text-3xl font-semibold text-white mb-6">
                  Professional Skills
                </h2>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300">
                  <ul className="space-y-4">
                    {[
                      "Strong communication skills",
                      "Problem-solving ability",
                      "Experience in team leadership",
                      "Time management skills",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-200 mr-3 mt-1 text-xl">•</span>
                        <span className="text-white/80 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Tags */}
              <section className="mb-10 content-section">
                <h2 className="text-3xl font-semibold text-white mb-6">Tags:</h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Full time",
                    "Commerce",
                    "New-York",
                    "Corporate",
                    "Location",
                  ].map((tag, index) => (
                    <span
                      key={index}
                      className="bg-white/20 text-white px-5 py-2 rounded-full text-md hover:bg-white/30 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Job Overview */}
              <section className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 sticky top-8 sidebar-section">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Job Overview
                </h2>
                <div className="space-y-5 text-lg text-white/80">
                  <div className="flex justify-between">
                    <span className="font-medium">Job Title:</span>
                    <span>Corporate Solutions Executive</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Job Type:</span>
                    <span>Full Time</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Category:</span>
                    <span>Commerce</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Experience:</span>
                    <span>5 Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Degree:</span>
                    <span>Master</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Offered Salary:</span>
                    <span>$40000-$42000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Location:</span>
                    <span>New-York, USA</span>
                  </div>
                </div>
              </section>

              {/* Application Form */}
              <section className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 sticky top-8 mt-8 sidebar-section">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Apply for this Position
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-lg font-medium text-white mb-2">
                      Full name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg text-white placeholder-white/60"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-medium text-white mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg text-white placeholder-white/60"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-medium text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg text-white placeholder-white/60"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-medium text-white mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg text-white placeholder-white/60"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-blue-600 py-4 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 text-lg"
                  >
                    Submit Application
                  </button>
                </form>
              </section>
            </div>
          </div>

          {/* Related Jobs */}
          <section className="mt-16 bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300">
            <h2 className="text-3xl font-semibold text-white mb-8">
              Related Jobs
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedJobs.map((job, index) => (
                <div
                  key={job.id}
                  className="related-job border border-white/20 rounded-xl p-6 hover:border-blue-300 transition-all duration-300 hover:transform hover:-translate-y-2 bg-white/5"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                  <p className="text-white/80 mb-4">{job.company}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                    <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
                      {job.salary}
                    </span>
                    <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
                      {job.location}
                    </span>
                  </div>
                  <Link
                    href={`/jobs/${job.id}`}
                    className="inline-block px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 text-md"
                  >
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}