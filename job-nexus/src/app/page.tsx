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
      {/* Hero Section - No delay, appears immediately */}
      <div className="animate-fade-in-up">
        <HeroSection ref={searchRef} />
      </div>
      
      {/* Recent Jobs Section - Slight delay */}
      <div className="animate-fade-in-up stagger-delay-1">
        <RecentJobsSection />
      </div>
      
      {/* Categories Section - Moderate delay */}
      <div className="animate-fade-in-up stagger-delay-2">
        <CategoriesSection />
      </div>
      
      {/* Testimonials Section - Longer delay */}
      <div className="animate-fade-in-up stagger-delay-3">
        <TestimonialsSection />
      </div>
      
      {/* CTA Section - Final delay */}
      <div className="animate-fade-in-up stagger-delay-4">
        <CTASection />
      </div>
    </div>
  );
}