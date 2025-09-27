"use client";

import { useState, useEffect, useRef } from "react";

export default function CategoriesSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<HTMLDivElement[]>([]);
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

    const categoryObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('category-visible');
            entry.target.classList.remove('category-hidden');
          } else {
            entry.target.classList.add('category-hidden');
            entry.target.classList.remove('category-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    categoryRefs.current.forEach(card => {
      if (card) categoryObserver.observe(card);
    });

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (sectionRef.current) sectionObserver.unobserve(sectionRef.current);
      categoryRefs.current.forEach(card => {
        if (card) categoryObserver.unobserve(card);
      });
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const categories = [
    { 
      name: "Agriculture", 
      jobs: 1254, 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      )
    },
    { 
      name: "Metal Production", 
      jobs: 816, 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      )
    },
    { 
      name: "Commerce", 
      jobs: 2082, 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      )
    },
    { 
      name: "Construction", 
      jobs: 1520, 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      )
    },
    { 
      name: "Hotels & Tourism", 
      jobs: 1022, 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1.096" />
        </svg>
      )
    },
    { 
      name: "Education", 
      jobs: 1496, 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      )
    },
    { 
      name: "Financial Services", 
      jobs: 1529, 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      name: "Transport", 
      jobs: 1244, 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      )
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 min-h-screen relative overflow-hidden gradient-bg-primary"
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
      
      <div 
        ref={contentRef}
        className={`max-w-6xl mx-auto relative z-10 section-3d ${isVisible ? 'section-visible' : ''}`}
      >
        <h2 className="text-4xl font-bold text-white mb-6 text-center animate-fade-in-down">
          Browse by Category
        </h2>
        <p className="text-xl text-white/90 mb-16 text-center max-w-3xl mx-auto animate-fade-in-up stagger-delay-1">
          Explore job opportunities across various industries and find the perfect match for your skills.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              ref={el => { 
                if (el && !categoryRefs.current.includes(el)) {
                  categoryRefs.current[index] = el;
                }
              }}
              className={`category-item bg-white/10 backdrop-blur-md p-8 rounded-xl text-center border border-white/20 hover:border-white/40 transition-all duration-500 hover-lift ${
                isVisible ? 'category-visible' : 'category-hidden'
              }`}
              style={{ 
                animationDelay: isVisible ? 
                  (scrollDirection === 'down' ? `${index * 0.1}s` : `${(categories.length - index) * 0.05}s`) : 
                  '0s',
                transitionDelay: isVisible ? 
                  (scrollDirection === 'down' ? `${index * 0.1}s` : `${(categories.length - index) * 0.05}s`) : 
                  '0s'
              }}
            >
              <div className="text-blue-200 mb-4 flex justify-center">
                {category.icon}
              </div>
              <h3 className="font-semibold text-xl text-white mb-4">{category.name}</h3>
              <p className="text-blue-200 font-medium text-lg">{category.jobs.toLocaleString()} jobs</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}