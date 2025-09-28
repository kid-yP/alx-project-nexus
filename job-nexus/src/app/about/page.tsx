"use client";

import { useState, useEffect, useRef } from "react";

export const dynamic = 'force-dynamic';

export default function AboutUsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({
    faq: false,
    companies: false,
    ceo: false
  });

  const faqRef = useRef<HTMLDivElement>(null);
  const companiesRef = useRef<HTMLDivElement>(null);
  const ceoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target.getAttribute('data-section');
            if (section) {
              setIsVisible(prev => ({ ...prev, [section]: true }));
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (faqRef.current) {
      faqRef.current.setAttribute('data-section', 'faq');
      observer.observe(faqRef.current);
    }
    if (companiesRef.current) {
      companiesRef.current.setAttribute('data-section', 'companies');
      observer.observe(companiesRef.current);
    }
    if (ceoRef.current) {
      ceoRef.current.setAttribute('data-section', 'ceo');
      observer.observe(ceoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const faqItems = [
    {
      question: "Can I upload a CD?",
      answer: "Yes, you can upload a CD. Simply follow our upload process carefully."
    },
    {
      question: "How long will the recruitment process take?",
      answer: "The recruitment process usually takes 2-4 weeks depending on the position."
    },
    {
      question: "What does the recruitment and selection process involve?",
      answer: "It involves application review, interviews, and skill assessments to find the best fit."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
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
        .step-item {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }
        .step-item:nth-child(1) { animation-delay: 0.1s; }
        .step-item:nth-child(2) { animation-delay: 0.2s; }
        .step-item:nth-child(3) { animation-delay: 0.3s; }
        .step-item:nth-child(4) { animation-delay: 0.4s; }
        .company-item {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        .company-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .company-item:nth-child(1) { transition-delay: 0.1s; }
        .company-item:nth-child(2) { transition-delay: 0.2s; }
        .company-item:nth-child(3) { transition-delay: 0.3s; }
        .company-item:nth-child(4) { transition-delay: 0.4s; }
        .faq-item {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        .faq-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .faq-item:nth-child(1) { transition-delay: 0.1s; }
        .faq-item:nth-child(2) { transition-delay: 0.2s; }
        .faq-item:nth-child(3) { transition-delay: 0.3s; }
        .ceo-item {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        .ceo-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      
      <div 
        className="min-h-screen relative overflow-hidden"
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
        
        <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-5xl font-bold text-white mb-6">Why We&apos;re The Best Choice</h1>
          </section>

          {/* Why Company is Great Section */}
          <section className="text-center mb-20 px-6">
            <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              At JobNexus, we prioritize excellence, integrity, and innovation. Our team is committed to delivering
              outstanding service, fostering a positive work environment, and providing opportunities for growth. 
              Join us and be part of a company that values your skills and invests in your success.
            </p>
          </section>

          {/* How It Works Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center text-white mb-16">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  title: "Create Account",
                  description: "Sign up and set up your profile quickly and easily.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                  )
                },
                {
                  title: "Upload Resume",
                  description: "Easily upload your resume and relevant documents.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  )
                },
                {
                  title: "Find Jobs",
                  description: "Search and browse jobs that match your profile and interests.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  )
                },
                {
                  title: "Apply Job",
                  description: "Submit applications easily and track your progress.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                }
              ].map((step, index) => (
                <div key={index} className="step-item flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="text-white p-5 rounded-full mb-6">{step.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-white/80 text-lg">{step.description}</p>
                  <div className="mt-6 w-10 h-10 flex items-center justify-center bg-white text-blue-600 rounded-full text-md font-bold">
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20" ref={faqRef}>
            <h2 className="text-4xl font-bold text-white text-center mb-16">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8">
              {faqItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`faq-item border-b border-white/20 py-6 last:border-b-0 ${isVisible.faq ? 'visible' : ''}`}
                >
                  <button
                    className="flex justify-between items-center w-full text-left"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-xl font-medium text-white">
                      <span className="text-blue-200 mr-3">{(index + 1).toString().padStart(2, '0')}</span>
                      {item.question}
                    </span>
                    <svg
                      className={`w-6 h-6 text-white transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="mt-5 pl-9 text-white/80 text-lg">{item.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Best Companies Section */}
          <section className="mb-20" ref={companiesRef}>
            <h2 className="text-4xl font-bold text-white text-center mb-16">We&apos;re Only Working With The Best</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {["Giving Job", "Human Estate", "Technopaste", "Top Team"].map((company, index) => (
                <div 
                  key={index} 
                  className={`company-item bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:border-white/40 transition transform hover:-translate-y-1 text-center ${isVisible.companies ? 'visible' : ''}`}
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full mx-auto flex items-center justify-center text-white font-bold text-xl">
                      {company.charAt(0)}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{company}</h3>
                  <p className="text-white/80">Leading the industry with innovation and excellence.</p>
                </div>
              ))}
            </div>
          </section>

          {/* CEO Card Section */}
          <section className="mb-16" ref={ceoRef}>
            <h2 className="text-4xl font-bold text-white text-center mb-16">Our CEO & Founder</h2>
            <div className={`ceo-item max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-10 rounded-xl border border-white/20 hover:border-white/40 transition-all ${isVisible.ceo ? 'visible' : ''}`}>
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-2xl mr-6">
                  K
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Kidus Yosef</h3>
                  <p className="text-white/80 text-lg">CEO & Front-end Developer</p>
                </div>
              </div>
              <p className="text-white/80 text-lg mb-6">
                Kidus Yosef is the visionary leader and front-end developer of JobNexus, overseeing
                operations and ensuring the highest quality standards in our digital products.
              </p>
              <div className="flex flex-col sm:flex-row justify-between text-white/70 text-md space-y-3 sm:space-y-0">
                <span className="flex items-center">📧 kidusmekuria11@gmail.com</span>
                <span className="flex items-center">📞 +251944214770</span>
                <span className="flex items-center">🌍 Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
