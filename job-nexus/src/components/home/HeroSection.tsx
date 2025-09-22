"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { forwardRef, useEffect, useState } from "react";

interface HeroSectionProps {
  // This will be used to receive the ref from parent
}

const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>((props, ref) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Remove cursor after 1 second
    const cursorTimer = setTimeout(() => {
      setShowCursor(false);
    }, 1000);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(cursorTimer);
    };
  }, []);

  const stats = [
    { 
      number: "25,850", 
      label: "Jobs",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      number: "10,250", 
      label: "Candidates",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      number: "18,400", 
      label: "Companies",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
  ];

  const companies = [
    { 
      name: "Spotify", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png" 
    },
    { 
      name: "Adobe", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/1200px-Adobe_Corporate_logo.svg.png" 
    },
    { 
      name: "Amazon", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
    },
    { 
      name: "Netflix", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png" 
    },
    { 
      name: "Apple", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1024px-Apple_logo_black.svg.png" 
    },
    { 
      name: "Google", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png" 
    },
  ];

  return (
    <section 
      ref={ref} 
      className="relative pt-16 pb-12 px-6 overflow-hidden min-h-screen flex items-start justify-center"
      style={{
        background: "linear-gradient(-45deg, #667eea, #764ba2, #6B8DD6, #8E37D7)",
        backgroundSize: "400% 400%",
        animation: "gradient 15s ease infinite"
      }}
    >
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
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
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        .typewriter {
          overflow: hidden;
          white-space: nowrap;
          animation: typing 3.5s steps(40, end);
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        .blink-caret {
          border-right: .15em solid #3B82F6;
          animation: blink-caret .75s step-end infinite;
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #3B82F6; }
        }
        .stat-item {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }
        .stat-item:nth-child(1) { animation-delay: 0.3s; }
        .stat-item:nth-child(2) { animation-delay: 0.6s; }
        .stat-item:nth-child(3) { animation-delay: 0.9s; }
        .company-item {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }
        .company-item:nth-child(1) { animation-delay: 0.1s; }
        .company-item:nth-child(2) { animation-delay: 0.2s; }
        .company-item:nth-child(3) { animation-delay: 0.3s; }
        .company-item:nth-child(4) { animation-delay: 0.4s; }
        .company-item:nth-child(5) { animation-delay: 0.5s; }
        .company-item:nth-child(6) { animation-delay: 0.6s; }
      `}</style>
      
      {/* Animated background elements */}
      <div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: `
            radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.15), transparent 40%),
            radial-gradient(400px circle at ${mousePosition.x + 200}px ${mousePosition.y + 100}px, rgba(255, 255, 255, 0.1), transparent 40%)
          `
        }}
      />
      
      <div className="max-w-6xl mx-auto text-center relative z-10 mt-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          <span className="typewriter inline-block">
            Find Your Dream Job <span className="text-blue-200 inline-block align-middle pb-5">Today!</span>
            {showCursor && <span className="blink-caret ml-1" />}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto mt-6">
          Connecting Talent with Opportunity: Your Gateway to Career Success
        </p>

        <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-xl mb-10 floating border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input 
              type="text" 
              placeholder="Job Title or Company" 
              className="w-full text-lg py-3 bg-white/90"
              id="search-input"
            />
            <select className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg bg-white/90">
              <option>Select Location</option>
              <option>New York, USA</option>
              <option>Los Angeles, USA</option>
              <option>Texas, USA</option>
              <option>Florida, USA</option>
              <option>Boston, USA</option>
            </select>
            <select className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg bg-white/90">
              <option>Select Category</option>
              <option>Agriculture</option>
              <option>Commerce</option>
              <option>Construction</option>
              <option>Hotels & Tourism</option>
              <option>Education</option>
              <option>Financial Services</option>
              <option>Transport</option>
            </select>
            <Button className="w-full py-3 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1">
              Search Job
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 mt-8">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex justify-center text-blue-200 mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.number}</h3>
              <p className="text-white/80 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Brands Section */}
        <div className="mb-12 mt-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Trusted by Leading Companies
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companies.map((company, index) => (
              <div 
                key={index} 
                className="company-item bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center"
              >
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`}
                  className="h-10 w-auto object-contain filter brightness-0 invert-1 mb-2"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'text-xl font-semibold text-white';
                    fallback.textContent = company.name;
                    if (target.parentNode) {
                      target.parentNode.appendChild(fallback);
                    }
                  }}
                />
                <span className="text-white text-sm font-medium">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;