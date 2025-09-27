"use client";

import Button from "@/components/ui/Button";
import { useRef, useState, useEffect } from "react";

export default function CTASection() {
  const searchRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
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
      className="py-24 px-6 text-white relative min-h-96 flex items-center overflow-hidden gradient-bg-primary"
    >
      {/* Hidden element for search reference */}
      <div ref={searchRef} className="absolute -top-20" id="search-section" />
      
      {/* Mouse-following effect */}
      <div 
        className="mouse-follow-effect"
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
        className={`max-w-4xl mx-auto text-center relative z-10 animate-float section-3d ${isVisible ? 'section-visible' : ''}`}
      >
        <div className="animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-pulse-glow relative">
            Create A Better 
            <span className="future-text relative inline-block mx-2">
              Future
            </span>
            For Yourself
          </h2>
        </div>
        
        <p className="mb-10 text-xl md:text-2xl max-w-3xl mx-auto text-white/90 animate-fade-in-up stagger-delay-1">
          Take the first step toward your dream career. Explore thousands of opportunities and find the perfect fit for your skills and aspirations.
        </p>
        
        <div className="animate-fade-in-up stagger-delay-2">
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