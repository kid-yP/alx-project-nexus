"use client";

import { useState, useEffect, useRef } from "react";

export default function TestimonialsSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const testimonialRefs = useRef<HTMLDivElement[]>([]);
  const statsRefs = useRef<HTMLDivElement[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const sectionObserver = new IntersectionObserver(
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
      sectionObserver.observe(sectionRef.current);
    }

    const testimonialObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-testimonial-in');
            entry.target.classList.remove('animate-testimonial-out');
          } else {
            entry.target.classList.add('animate-testimonial-out');
            entry.target.classList.remove('animate-testimonial-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-stats-in');
            entry.target.classList.remove('animate-stats-out');
          } else {
            entry.target.classList.add('animate-stats-out');
            entry.target.classList.remove('animate-stats-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    testimonialRefs.current.forEach(card => {
      if (card) testimonialObserver.observe(card);
    });

    statsRefs.current.forEach(stat => {
      if (stat) statsObserver.observe(stat);
    });

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      if (sectionRef.current) sectionObserver.unobserve(sectionRef.current);
      testimonialRefs.current.forEach(card => {
        if (card) testimonialObserver.unobserve(card);
      });
      statsRefs.current.forEach(stat => {
        if (stat) statsObserver.unobserve(stat);
      });
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const testimonials = [
    {
      quote: "Amazing Services",
      text: "The platform made it incredibly easy to find relevant job opportunities. The search filters are comprehensive and the application process is streamlined.",
      author: "Kristin Hester",
      role: "Software Developer",
      avatar: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      quote: "Simplified Job Search",
      text: "Everything was straightforward and simple. I found my current position through this platform and the entire process was smooth from start to finish.",
      author: "Zion Cisneros",
      role: "Marketing Manager",
      avatar: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      )
    },
    {
      quote: "Excellent Support",
      text: "The customer support team was incredibly helpful throughout my job search journey. They provided guidance and answered all my questions promptly.",
      author: "Michael Johnson",
      role: "Product Designer",
      avatar: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      )
    },
    {
      quote: "Great Opportunities",
      text: "I was able to find several great job opportunities that matched my skills and preferences. The platform connects you with top companies in the industry.",
      author: "Sarah Williams",
      role: "Data Analyst",
      avatar: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 relative overflow-hidden"
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
        
        @keyframes testimonialIn {
          from {
            opacity: 0;
            transform: translateY(100px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes testimonialOut {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(100px) scale(0.9);
          }
        }
        
        @keyframes statsIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes statsOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(30px);
          }
        }
        
        .animate-testimonial-in {
          animation: testimonialIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .animate-testimonial-out {
          animation: testimonialOut 0.6s ease-out forwards;
        }
        
        .animate-stats-in {
          animation: statsIn 0.8s ease forwards;
        }
        
        .animate-stats-out {
          animation: statsOut 0.6s ease-out forwards;
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
        
        .testimonial-item {
          opacity: 0;
          transform: translateY(100px) scale(0.9);
        }
        
        .stats-item {
          opacity: 0;
          transform: translateY(30px);
        }
      `}</style>
      
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
        <h2 className="text-4xl font-bold text-white mb-6 text-center">Testimonials from Our Customers</h2>
        <p className="text-xl text-white/90 mb-16 text-center max-w-3xl mx-auto">
          Hear what our users have to say about their experience with our platform.
        </p>
        
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              ref={el => { if (el) testimonialRefs.current[i] = el; }}
              className="testimonial-item bg-white/10 backdrop-blur-md p-10 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300"
              style={{ animationDelay: isVisible ? `${i * 0.2}s` : '0s' }}
            >
              <h3 className="font-semibold text-2xl mb-6 text-blue-200">{t.quote}</h3>
              <p className="text-lg text-white/90 mb-8 italic">"{t.text}"</p>
              <div className="flex items-center">
                <div className="text-blue-200 mr-4">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-xl text-white">{t.author}</p>
                  <p className="text-white/70 text-md">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional content to fill white space */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Join Thousands of Successful Job Seekers</h3>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Start your journey today and discover why professionals trust JobNexus for their career advancement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: "95% Success Rate", desc: "of users find relevant jobs within 30 days" },
              { title: "10,000+ Companies", desc: "actively hiring through our platform" },
              { title: "24/7 Support", desc: "dedicated team to assist your job search" }
            ].map((stat, i) => (
              <div 
                key={i}
                ref={el => { if (el) statsRefs.current[i] = el; }}
                className="stats-item bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20"
                style={{ animationDelay: isVisible ? `${i * 0.3 + 0.8}s` : '0s' }}
              >
                <h4 className="text-2xl font-bold text-white mb-3">{stat.title}</h4>
                <p className="text-white/80">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}