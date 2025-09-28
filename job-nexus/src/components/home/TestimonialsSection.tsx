"use client";

import { useState, useEffect, useRef } from "react";

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const testimonialRefs = useRef<HTMLDivElement[]>([]);
  const statsRefs = useRef<HTMLDivElement[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = currentScrollY;
    };

    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
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
            entry.target.classList.add('testimonial-visible');
            entry.target.classList.remove('testimonial-hidden');
          } else {
            entry.target.classList.add('testimonial-hidden');
            entry.target.classList.remove('testimonial-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('stats-visible');
            entry.target.classList.remove('stats-hidden');
          } else {
            entry.target.classList.add('stats-hidden');
            entry.target.classList.remove('stats-visible');
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

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (sectionRef.current) sectionObserver.unobserve(sectionRef.current);
      testimonialRefs.current.forEach(card => {
        if (card) testimonialObserver.unobserve(card);
      });
      statsRefs.current.forEach(stat => {
        if (stat) statsObserver.unobserve(stat);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const testimonials = [
    {
      quote: "Amazing Services",
      text: "The platform made it incredibly easy to find relevant job opportunities. The search filters are comprehensive and the application process is streamlined.",
      author: "Kristin Hester",
      role: "Software Developer",
      avatar: "💼"
    },
    {
      quote: "Simplified Job Search",
      text: "Everything was straightforward and simple. I found my current position through this platform and the entire process was smooth from start to finish.",
      author: "Zion Cisneros",
      role: "Marketing Manager",
      avatar: "🌟"
    },
    {
      quote: "Excellent Support",
      text: "The customer support team was incredibly helpful throughout my job search journey. They provided guidance and answered all my questions promptly.",
      author: "Michael Johnson",
      role: "Product Designer",
      avatar: "💬"
    },
    {
      quote: "Great Opportunities",
      text: "I was able to find several great job opportunities that matched my skills and preferences. The platform connects you with top companies in the industry.",
      author: "Sarah Williams",
      role: "Data Analyst",
      avatar: "🚀"
    },
  ];

  // Calculate animation delays based on scroll direction
  const getAnimationDelay = (index: number, total: number, baseDelay: number = 0.2) => {
    if (!isVisible) return '0s';
    
    if (scrollDirection === 'down') {
      return `${index * baseDelay}s`;
    } else {
      return `${(total - 1 - index) * baseDelay}s`;
    }
  };

  return (
    <section 
      ref={sectionRef}
      className={`py-20 px-6 relative overflow-hidden min-h-screen flex items-center gradient-bg-primary`}
    >
      <div 
        ref={contentRef}
        className={`max-w-6xl mx-auto relative z-10 w-full ${isVisible ? 'section-visible' : ''}`}
      >
        <h2 className="text-4xl font-bold text-white mb-6 text-center animate-fade-in-down">
          Testimonials from Our Customers
        </h2>
        <p className="text-xl text-white/90 mb-16 text-center max-w-3xl mx-auto animate-fade-in-up stagger-delay-1">
          Hear what our users have to say about their experience with our platform.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              ref={el => { if (el) testimonialRefs.current[i] = el; }}
              className={`testimonial-item bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-500 transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : scrollDirection === 'down' 
                    ? 'translate-y-10 opacity-0 scale-95' 
                    : '-translate-y-10 opacity-0 scale-95'
              }`}
              style={{ 
                transitionDelay: getAnimationDelay(i, testimonials.length, 0.15),
                animationDelay: isVisible ? getAnimationDelay(i, testimonials.length, 0.15) : '0s'
              }}
            >
              <h3 className="font-semibold text-2xl mb-4 text-blue-200">{t.quote}</h3>
              <p className="text-lg text-white/90 mb-6 italic leading-relaxed">&quot;{t.text}&quot;</p>
              <div className="flex items-center">
                <div className="text-blue-200 mr-4 text-3xl">
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

        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-white mb-6 animate-fade-in-up stagger-delay-2">
            Join Thousands of Successful Job Seekers
          </h3>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto animate-fade-in-up stagger-delay-3">
            Start your journey today and discover why professionals trust JobNexus for their career advancement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { title: "95% Success Rate", desc: "of users find relevant jobs within 30 days" },
              { title: "10,000+ Companies", desc: "actively hiring through our platform" },
              { title: "24/7 Support", desc: "dedicated team to assist your job search" }
            ].map((stat, i) => (
              <div 
                key={i}
                ref={el => { if (el) statsRefs.current[i] = el; }}
                className={`stats-item bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 transition-all duration-500 transform ${
                  isVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : scrollDirection === 'down' 
                      ? 'translate-y-10 opacity-0 scale-95' 
                      : '-translate-y-10 opacity-0 scale-95'
                }`}
                style={{ 
                  transitionDelay: getAnimationDelay(i, 3, 0.2),
                  animationDelay: isVisible ? getAnimationDelay(i, 3, 0.2) : '0s'
                }}
              >
                <h4 className="text-2xl font-bold text-white mb-3">{stat.title}</h4>
                <p className="text-white/80 leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
