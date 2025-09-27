"use client";

import { useEffect, useState } from "react";

export default function BrandSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const companies = [
    { 
      name: "Spotify", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png" 
    },
    { 
      name: "Slack", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png" 
    },
    { 
      name: "Adobe", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/1200px-Adobe_Corporate_logo.svg.png" 
    },
    { 
      name: "Microsoft", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png" 
    },
    { 
      name: "Google", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png" 
    },
  ];

  return (
    <section 
      className="py-16 px-6 bg-gradient-to-r from-blue-50 to-purple-50 relative overflow-hidden"
      style={{
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
        .company-item {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }
        .company-item:nth-child(1) { animation-delay: 0.1s; }
        .company-item:nth-child(2) { animation-delay: 0.2s; }
        .company-item:nth-child(3) { animation-delay: 0.3s; }
        .company-item:nth-child(4) { animation-delay: 0.4s; }
        .company-item:nth-child(5) { animation-delay: 0.5s; }
      `}</style>
      
      {/* Animated background elements similar to hero */}
      <div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: `
            radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.4), transparent 40%),
            radial-gradient(400px circle at ${mousePosition.x + 200}px ${mousePosition.y + 100}px, rgba(255, 255, 255, 0.3), transparent 40%)
          `
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Trusted by Leading Companies
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="company-item bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
            >
              <img 
                src={company.logo} 
                alt={`${company.name} logo`}
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = 'text-xl font-semibold text-blue-600';
                  fallback.textContent = company.name;
                  if (e.currentTarget.parentNode) {
                    e.currentTarget.parentNode.appendChild(fallback);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}