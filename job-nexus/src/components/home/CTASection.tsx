"use client";

import Button from "@/components/ui/Button";
import { useRef, useState, useEffect } from "react";

export default function CTASection() {
  const searchRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');

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

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const scrollToSearch = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    setTimeout(() => {
      const searchInput = document.getElementById('search-input');
      if (searchInput) {
        (searchInput as HTMLInputElement).focus();
      }
    }, 800);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-6 text-white relative min-h-96 flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(-45deg, #667eea, #764ba2, #6B8DD6, #8E37D7)",
        backgroundSize: "400% 400%",
        animation: "gradient 15s ease infinite",
        perspective: '1000px'
      }}
    >
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes pulse-glow {
          0% { 
            transform: scale(1);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
          }
          50% { 
            transform: scale(1.05);
            box-shadow: 0 0 40px rgba(255, 255, 255, 0.4);
          }
          100% { 
            transform: scale(1);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
          }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes flipInDown {
          from { 
            opacity: 0;
            transform: rotateX(90deg) translateY(-100px) scale(0.8);
          }
          to { 
            opacity: 1;
            transform: rotateX(0deg) translateY(0) scale(1);
          }
        }
        
        @keyframes flipInUp {
          from { 
            opacity: 0;
            transform: rotateX(-90deg) translateY(100px) scale(0.8);
          }
          to { 
            opacity: 1;
            transform: rotateX(0deg) translateY(0) scale(1);
          }
        }
        
        @keyframes flipOutDown {
          from { 
            opacity: 1;
            transform: rotateX(0deg) translateY(0) scale(1);
          }
          to { 
            opacity: 0;
            transform: rotateX(90deg) translateY(-100px) scale(0.8);
          }
        }
        
        @keyframes flipOutUp {
          from { 
            opacity: 1;
            transform: rotateX(0deg) translateY(0) scale(1);
          }
          to { 
            opacity: 0;
            transform: rotateX(-90deg) translateY(100px) scale(0.8);
          }
        }
        
        @keyframes textSlideInDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes textSlideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes textSlideOutDown {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-50px);
          }
        }
        
        @keyframes textSlideOutUp {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(50px);
          }
        }
        
        @keyframes sunRise {
          0% {
            transform: translate(-50%, 0) rotate(0deg) scale(0.8);
            opacity: 0.7;
          }
          25% {
            transform: translate(-50%, -10px) rotate(90deg) scale(1.1);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -5px) rotate(180deg) scale(1.2);
            opacity: 0.9;
          }
          75% {
            transform: translate(-50%, -15px) rotate(270deg) scale(1.1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, 0) rotate(360deg) scale(0.8);
            opacity: 0.7;
          }
        }
        
        @keyframes sunGlow {
          0%, 100% {
            filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.8)) 
                    drop-shadow(0 0 30px rgba(255, 215, 0, 0.6));
          }
        }
        
        @keyframes futureGlow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.5),
                         0 0 30px rgba(255, 215, 0, 0.3);
          }
          50% {
            text-shadow: 0 0 30px rgba(255, 255, 255, 0.8),
                         0 0 40px rgba(255, 215, 0, 0.6),
                         0 0 50px rgba(255, 165, 0, 0.4);
          }
        }
        
        .section-3d {
          opacity: 0;
          transform: ${scrollDirection === 'down' ? 'rotateX(90deg) translateY(-100px) scale(0.8)' : 'rotateX(-90deg) translateY(100px) scale(0.8)'};
          transform-style: preserve-3d;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .section-visible {
          opacity: 1;
          transform: rotateX(0deg) translateY(0) scale(1);
          animation: ${scrollDirection === 'down' ? 'flipInDown' : 'flipInUp'} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .section-hidden {
          opacity: 0;
          animation: ${scrollDirection === 'down' ? 'flipOutUp' : 'flipOutDown'} 0.6s ease-out forwards;
        }
        
        .text-content {
          opacity: 0;
          transform: ${scrollDirection === 'down' ? 'translateY(-30px)' : 'translateY(30px)'};
          transition: all 0.6s ease-out;
        }
        
        .text-visible {
          opacity: 1;
          transform: translateY(0);
          animation: ${scrollDirection === 'down' ? 'textSlideInDown' : 'textSlideInUp'} 0.6s ease-out forwards;
        }
        
        .text-hidden {
          opacity: 0;
          animation: ${scrollDirection === 'down' ? 'textSlideOutUp' : 'textSlideOutDown'} 0.4s ease-out forwards;
        }
        
        .pulse-animation {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        
        .cta-button {
          transition: all 0.3s ease;
        }
        
        .cta-button:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.3);
        }
        
        .future-text {
          background: linear-gradient(45deg, #FFD700, #FFA500, #FFEC8B, #FFFFFF);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 4s ease-in-out infinite, futureGlow 3s ease-in-out infinite;
          position: relative;
          display: inline-block;
          padding: 0 10px;
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .sun-icon {
          animation: sunRise 6s ease-in-out infinite, sunGlow 4s ease-in-out infinite;
        }
        
        .stagger-delay-1 {
          animation-delay: 0.1s !important;
        }
        
        .stagger-delay-2 {
          animation-delay: 0.2s !important;
        }
        
        .stagger-delay-3 {
          animation-delay: 0.3s !important;
        }
      `}</style>
      
      {/* Hidden element for search reference */}
      <div ref={searchRef} className="absolute -top-20" id="search-section" />
      
      {/* Mouse-following effect */}
      <div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: `
            radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.15), transparent 40%),
            radial-gradient(400px circle at ${mousePosition.x + 200}px ${mousePosition.y + 100}px, rgba(255, 255, 255, 0.1), transparent 40%)
          `
        }}
      />
      
      {/* Pulsing background overlay */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          opacity: isVisible ? 0.3 : 0,
          background: "radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)",
          animation: isVisible ? 'pulse-glow 3s ease-in-out infinite' : 'none'
        }}
      />
      
      <div 
        ref={contentRef}
        className={`max-w-4xl mx-auto text-center relative z-10 floating section-3d ${isVisible ? 'section-visible' : 'section-hidden'}`}
      >
        <div className={`text-content ${isVisible ? 'text-visible' : 'text-hidden'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 pulse-animation relative">
            Create A Better 
            <span className="relative inline-block mx-2">
              {/* Sun/Moon Icon */}
              <svg 
                className="sun-icon absolute -top-8 left-1/2 transform -translate-x-1/2"
                width="40" 
                height="40" 
                viewBox="0 0 40 40" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Sun core */}
                <circle cx="20" cy="20" r="8" fill="url(#sunGradient)" />
                
                {/* Sun rays */}
                <path d="M20 5L20 2" stroke="url(#rayGradient)" strokeWidth="2" strokeLinecap="round" />
                <path d="M20 38L20 35" stroke="url(#rayGradient)" strokeWidth="2" strokeLinecap="round" />
                <path d="M5 20L2 20" stroke="url(#rayGradient)" strokeWidth="2" strokeLinecap="round" />
                <path d="M38 20L35 20" stroke="url(#rayGradient)" strokeWidth="2" strokeLinecap="round" />
                <path d="M10 10L8 8" stroke="url(#rayGradient)" strokeWidth="2" strokeLinecap="round" />
                <path d="M30 30L32 32" stroke="url(#rayGradient)" strokeWidth="2" strokeLinecap="round" />
                <path d="M10 30L8 32" stroke="url(#rayGradient)" strokeWidth="2" strokeLinecap="round" />
                <path d="M30 10L32 8" stroke="url(#rayGradient)" strokeWidth="2" strokeLinecap="round" />
                
                <defs>
                  <linearGradient id="sunGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="50%" stopColor="#FFA500" />
                    <stop offset="100%" stopColor="#FF8C00" />
                  </linearGradient>
                  <linearGradient id="rayGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFEC8B" />
                    <stop offset="100%" stopColor="#FFD700" />
                  </linearGradient>
                </defs>
              </svg>
              
              <span className="future-text">Future</span>
            </span>
            For Yourself
          </h2>
        </div>
        
        <p className={`mb-10 text-xl md:text-2xl max-w-3xl mx-auto text-white/90 text-content ${isVisible ? 'text-visible stagger-delay-1' : 'text-hidden'}`}>
          Take the first step toward your dream career. Explore thousands of opportunities and find the perfect fit for your skills and aspirations.
        </p>
        
        <div className={`text-content ${isVisible ? 'text-visible stagger-delay-2' : 'text-hidden'}`}>
          <Button 
            onClick={scrollToSearch}
            variant="secondary" 
            className="cta-button px-10 py-4 text-xl bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            Search Job
          </Button>
        </div>
      </div>
    </section>
  );
}