"use client";

import { useState, useEffect, useRef } from "react";

export default function TopCompanies() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    // Intersection Observer for scroll trigger
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: "0px 0px -100px 0px" // Adjust trigger point
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const companies = [
    { 
      name: "Instagram", 
      description: "Leading social media platform connecting people through photos and videos", 
      jobs: 8,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      delay: 0
    },
    { 
      name: "Tesla", 
      description: "Sustainable energy company specializing in electric vehicles and clean energy", 
      jobs: 18,
      color: "bg-gradient-to-r from-red-500 to-red-700",
      delay: 0.1
    },
    { 
      name: "McDonald&apos;s", 
      description: "Global fast-food restaurant chain serving millions daily", 
      jobs: 12,
      color: "bg-gradient-to-r from-yellow-500 to-red-600",
      delay: 0.2
    },
    { 
      name: "Apple", 
      description: "Technology company creating innovative products and services", 
      jobs: 9,
      color: "bg-gradient-to-r from-gray-700 to-gray-900",
      delay: 0.3
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
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-100px) translateY(50px) rotate(-5deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(0) rotate(0);
          }
        }
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(100px) translateY(50px) rotate(5deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(0) rotate(0);
          }
        }
        .company-item-left {
          opacity: 0;
          animation: slideInFromLeft 0.8s ease-out forwards;
        }
        .company-item-right {
          opacity: 0;
          animation: slideInFromRight 0.8s ease-out forwards;
        }
        .section-title {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
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
      `}</style>
      
      <section 
        ref={sectionRef}
        className="py-20 relative overflow-hidden"
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 
              className={`text-4xl font-bold text-white mb-6 section-title ${isVisible ? 'animate-fadeInUp' : ''}`}
              style={isVisible ? { animation: 'fadeInUp 0.8s ease forwards' } : {}}
            >
              Top Companies
            </h2>
            <p 
              className="text-xl text-white/80 max-w-3xl mx-auto section-title"
              style={isVisible ? { 
                animation: 'fadeInUp 0.8s ease forwards',
                animationDelay: '0.2s'
              } : {}}
            >
              Discover opportunities at some of the world&apos;s most innovative and respected companies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companies.map((company, i) => (
              <div 
                key={i} 
                className={`bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:transform hover:-translate-y-3 hover:scale-105 text-center ${
                  isVisible 
                    ? i % 2 === 0 
                      ? 'company-item-left' 
                      : 'company-item-right'
                    : ''
                }`}
                style={isVisible ? { 
                  animationDelay: `${company.delay}s`,
                  animation: i % 2 === 0 ? 'slideInFromLeft 0.8s ease-out forwards' : 'slideInFromRight 0.8s ease-out forwards'
                } : {}}
              >
                <div className={`w-16 h-16 ${company.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 transition-transform duration-300 hover:scale-110`}>
                  {company.name.charAt(0)}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white transition-colors duration-300 hover:text-blue-200">
                  {company.name}
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">{company.description}</p>
                <p className="text-blue-200 font-medium text-lg bg-white/10 px-4 py-2 rounded-full inline-block transition-all duration-300 hover:bg-white/20 hover:scale-105">
                  {company.jobs} open jobs
                </p>
              </div>
            ))}
          </div>

          {/* Additional decorative element */}
          <div 
            className={`text-center mt-12 section-title ${isVisible ? 'animate-fadeInUp' : ''}`}
            style={isVisible ? { 
              animation: 'fadeInUp 0.8s ease forwards',
              animationDelay: '0.6s'
            } : {}}
          >
            
          </div>
        </div>
      </section>
    </>
  );
}
