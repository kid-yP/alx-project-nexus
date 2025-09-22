"use client";

import { useRef } from "react";
import HeroSection from "@/components/home/HeroSection";
import RecentJobsSection from "@/components/home/RecentJobsSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import CTASection from "@/components/home/CTASection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function HomePage() {
  const searchRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .section-transition {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .stagger-delay-1 { animation-delay: 0.1s; }
        .stagger-delay-2 { animation-delay: 0.2s; }
        .stagger-delay-3 { animation-delay: 0.3s; }
        .stagger-delay-4 { animation-delay: 0.4s; }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Gradient animation for multiple sections */
        .gradient-bg {
          background: linear-gradient(-45deg, #667eea, #764ba2, #6B8DD6, #8E37D7);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }
        
        .gradient-bg-2 {
          background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      
      {/* Hero Section - No delay, appears immediately */}
      <div className="section-transition">
        <HeroSection ref={searchRef} />
      </div>
      
      {/* Recent Jobs Section - Slight delay */}
      <div className="section-transition stagger-delay-1">
        <RecentJobsSection />
      </div>
      
      {/* Categories Section - Moderate delay */}
      <div className="section-transition stagger-delay-2">
        <CategoriesSection />
      </div>
      
      {/* Testimonials Section - Longer delay */}
      <div className="section-transition stagger-delay-3">
        <CTASection />
      </div>
      
      {/* CTA Section - Final delay */}
      <div className="section-transition stagger-delay-4">
        <TestimonialsSection />
      </div>
    </div>
  );
}