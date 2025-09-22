"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const mockJobs = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    type: "Full-time",
    salary: "$4000 - $4200",
    category: "Software Development",
    posted: "2 hours ago",
  },
  {
    id: "2",
    title: "UI/UX Designer",
    company: "Designify",
    location: "New York, USA",
    type: "Hybrid",
    salary: "$3500 - $3800",
    category: "Design",
    posted: "5 hours ago",
  },
  {
    id: "3",
    title: "Backend Engineer",
    company: "HealthPlus",
    location: "London, UK",
    type: "Full-time",
    salary: "$4500 - $4800",
    category: "Software Development",
    posted: "1 day ago",
  },
  {
    id: "4",
    title: "Project Manager",
    company: "FinServe",
    location: "Boston, USA",
    type: "Full-time",
    salary: "$5000 - $5200",
    category: "Management",
    posted: "3 days ago",
  },
  {
    id: "5",
    title: "Data Scientist",
    company: "DataWorks",
    location: "San Francisco, USA",
    type: "Full-time",
    salary: "$5500 - $6000",
    category: "Data Science",
    posted: "1 day ago",
  },
  {
    id: "6",
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Remote",
    type: "Full-time",
    salary: "$5200 - $5800",
    category: "DevOps",
    posted: "4 hours ago",
  },
];

const RecentJobsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const jobCardsRef = useRef<HTMLDivElement[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('animate-fade-out');
          } else {
            entry.target.classList.add('animate-fade-out');
            entry.target.classList.remove('animate-fade-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    jobCardsRef.current.forEach(card => {
      if (card) cardObserver.observe(card);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      jobCardsRef.current.forEach(card => {
        if (card) cardObserver.unobserve(card);
      });
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes flipIn {
          from { 
            opacity: 0;
            transform: rotateX(90deg) translateY(100px) scale(0.8);
          }
          to { 
            opacity: 1;
            transform: rotateX(0deg) translateY(0) scale(1);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px) rotateX(10deg); }
          to { opacity: 1; transform: translateY(0) rotateX(0); }
        }
        
        @keyframes fadeOut {
          from { opacity: 1; transform: translateY(0) rotateX(0); }
          to { opacity: 0; transform: translateY(30px) rotateX(10deg); }
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
        
        .animate-fade-in {
          animation: fadeIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .animate-fade-out {
          animation: fadeOut 0.6s ease-out forwards;
        }
        
        .section-3d {
          opacity: 0;
          transform: rotateX(90deg) translateY(100px) scale(0.8);
          transform-style: preserve-3d;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .section-visible {
          opacity: 1;
          transform: rotateX(0deg) translateY(0) scale(1);
        }
        
        .job-card {
          opacity: 0;
          transform: translateY(30px) rotateX(10deg);
        }

        .job-card-visible {
          opacity: 1;
          transform: translateY(0) rotateX(0);
          animation: fadeIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>
      
      <section 
        ref={sectionRef}
        className="py-20 px-6 min-h-screen relative overflow-hidden"
        style={{
          background: "linear-gradient(-45deg, #667eea, #764ba2, #6B8DD6, #8E37D7)",
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite",
          perspective: '1000px'
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
        
        <div 
          ref={contentRef}
          className={`max-w-6xl mx-auto relative z-10 section-3d ${isVisible ? 'section-visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">
            Recent Jobs Available
          </h2>
          <p className="text-xl text-white/90 text-center mb-16 max-w-3xl mx-auto">
            Browse through our latest job openings and find the perfect opportunity for your career growth.
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-white/20">
            {mockJobs.map((job, index) => (
              <div 
                key={job.id} 
                ref={el => { if (el) jobCardsRef.current[index] = el; }}
                className={`job-card p-8 transition-all duration-500 hover:bg-white/20 hover:scale-105 ${
                  index < mockJobs.length - 1 ? 'border-b border-white/20' : ''
                } ${isVisible ? 'job-card-visible' : ''}`}
                style={{ animationDelay: isVisible ? `${index * 0.1}s` : '0s' }}
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div className="flex-1 mb-4 md:mb-0">
                    <h3 className="text-2xl font-semibold text-white mb-2">{job.title}</h3>
                    <p className="text-lg text-white/80 mb-4">{job.company} • {job.location}</p>
                    
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 text-sm bg-white/20 text-white rounded-full transition-colors hover:bg-white/30 border border-white/30">
                        {job.category}
                      </span>
                      <span className="px-4 py-2 text-sm bg-white/20 text-white rounded-full transition-colors hover:bg-white/30 border border-white/30">
                        {job.type}
                      </span>
                      <span className="px-4 py-2 text-sm bg-white/20 text-white rounded-full transition-colors hover:bg-white/30 border border-white/30">
                        {job.salary}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-left md:text-right w-full md:w-auto">
                    <span className="text-md text-white/60 block mb-4">{job.posted}</span>
                    <Link 
                      href={`/jobs/${job.id}`}
                      className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg text-md hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 font-medium"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <Link 
              href="/jobs"
              className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300 font-medium text-lg transform hover:-translate-y-1"
            >
              View All Jobs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentJobsSection;