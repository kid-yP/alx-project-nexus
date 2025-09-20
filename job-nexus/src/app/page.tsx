"use client";

import { useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import RecentJobsSection from "@/components/home/RecentJobsSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import CTASection from "@/components/home/CTASection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function HomePage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <StatsSection />
      <RecentJobsSection />
      <CategoriesSection />
      <CTASection />
      <TestimonialsSection />
    </div>
  );
}
