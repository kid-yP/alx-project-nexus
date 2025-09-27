"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const mockJobs = [
  {
    id: "1",
    title: "Forward Security Director",
    company: "Bauch, Schuppe and Schulist Co",
    location: "New-York, USA",
    type: "Full time",
    salary: "$40000-$42000",
    category: "Hotels & Tourism",
    posted: "10 min ago",
  },
  {
    id: "2", 
    title: "Regional Creative Facilitator",
    company: "Wisozk - Becker Co",
    location: "Los Angeles, USA", 
    type: "Part time",
    salary: "$28000-$32000",
    category: "Media",
    posted: "12 min ago",
  },
  {
    id: "3",
    title: "Internal Integration Planner", 
    company: "Mraz, Quigley and Feest Inc.",
    location: "Texas, USA",
    type: "Full time",
    salary: "$48000-$50000",
    category: "Construction", 
    posted: "15 min ago",
  },
  {
    id: "4",
    title: "District Intranet Director",
    company: "VonRueden - Weber Co",
    location: "Florida, USA",
    type: "Full time",
    salary: "$42000-$48000",
    category: "Commerce",
    description: "Oversee district-wide intranet operations and development for our commercial operations.",
    requirements: ["IT Management degree", "Network administration experience", "Leadership skills"],
    responsibilities: ["Manage intranet systems", "Coordinate IT teams", "Ensure network security"],
    is_recent: true,
    posted: "24 min ago",
    created_at: new Date(Date.now() - 10 * 60 * 1000).toISOString()
  },
  {
    id: "5",
    title: "Corporate Tactics Facilitator",
    company: "Cormier, Turner and Flatley Inc",
    location: "Boston, USA",
    type: "Full time",
    salary: "$38000-$40000",
    category: "Commerce",
    description: "Facilitate corporate tactical planning and execution across multiple departments.",
    requirements: ["Business Strategy degree", "Corporate experience", "Facilitation skills"],
    responsibilities: ["Facilitate planning sessions", "Coordinate department strategies", "Monitor execution"],
    is_recent: false,
    posted: "26 min ago",
    created_at: new Date(Date.now() - 12 * 60 * 1000).toISOString()
  },
  {
    id: "6",
    title: "Forward Accounts Consultant",
    company: "Miller Group",
    location: "Boston, USA",
    type: "Full time",
    salary: "$45000-$48000",
    category: "Financial services",
    description: "Provide expert consultation on forward accounts management and financial strategies.",
    requirements: ["Finance degree", "Accounting certification", "Consulting experience"],
    responsibilities: ["Consult on accounts management", "Develop financial strategies", "Client relationship management"],
    is_recent: true,
    posted: "30 min ago",
    created_at: new Date(Date.now() - 15 * 60 * 1000).toISOString()
  },
];

const RecentJobsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  const jobCardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = currentScrollY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

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

    const jobObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('job-visible');
            entry.target.classList.remove('job-hidden');
          } else {
            entry.target.classList.add('job-hidden');
            entry.target.classList.remove('job-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    jobCardsRef.current.forEach(card => {
      if (card) jobObserver.observe(card);
    });

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      jobCardsRef.current.forEach(card => {
        if (card) jobObserver.unobserve(card);
      });
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`py-20 px-6 min-h-screen relative overflow-hidden gradient-bg-primary scroll-${scrollDirection}`}
    >
      {/* Mouse-following effect */}
      <div 
        className="mouse-follow-effect"
        style={{
          background: `
            radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.1), transparent 40%),
            radial-gradient(400px circle at ${mousePosition.x + 200}px ${mousePosition.y + 100}px, rgba(255, 255, 255, 0.05), transparent 40%)
          `
        }}
      />
      
      <div className={`max-w-6xl mx-auto relative z-10 section-3d ${isVisible ? 'section-visible' : ''}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center animate-fade-in-down">
          Recent Jobs Available
        </h2>
        
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-white/20">
          {mockJobs.map((job, index) => (
            <div 
              key={job.id} 
              ref={el => { if (el) jobCardsRef.current[index] = el; }}
              className={`job-item p-8 transition-all duration-500 hover:bg-white/20 border-b border-white/20 last:border-b-0 ${
                isVisible ? 'job-visible' : 'job-hidden'
              }`}
              style={{ 
                animationDelay: isVisible ? 
                  (scrollDirection === 'down' ? `${index * 0.1}s` : `${(mockJobs.length - index) * 0.1}s`) : 
                  '0s'
              }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex-1 mb-4 md:mb-0">
                  <h3 className="text-2xl font-semibold text-white mb-2">{job.title}</h3>
                  <p className="text-lg text-white/80 mb-4">{job.company} • {job.location}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 text-sm bg-white/20 text-white rounded-full border border-white/30">
                      {job.category}
                    </span>
                    <span className="px-4 py-2 text-sm bg-white/20 text-white rounded-full border border-white/30">
                      {job.type}
                    </span>
                    <span className="px-4 py-2 text-sm bg-white/20 text-white rounded-full border border-white/30">
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

        <div className="flex justify-center mt-16 animate-fade-in-up stagger-delay-2">
          <Link 
            href="/jobs"
            className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300 font-medium text-lg transform hover:-translate-y-1"
          >
            View All Jobs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentJobsSection;