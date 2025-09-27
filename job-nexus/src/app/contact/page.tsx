"use client";

import { useState, useEffect, useRef } from "react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({
    form: false,
    locations: false
  });

  const formRef = useRef<HTMLDivElement>(null);
  const locationsRef = useRef<HTMLDivElement>(null);

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

    if (formRef.current) {
      formRef.current.setAttribute('data-section', 'form');
      observer.observe(formRef.current);
    }
    if (locationsRef.current) {
      locationsRef.current.setAttribute('data-section', 'locations');
      observer.observe(locationsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
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
        .contact-item {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }
        .contact-item:nth-child(1) { animation-delay: 0.2s; }
        .contact-item:nth-child(2) { animation-delay: 0.4s; }
        .contact-item:nth-child(3) { animation-delay: 0.6s; }
        .form-item {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        .form-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .form-item:nth-child(1) { transition-delay: 0.1s; }
        .form-item:nth-child(2) { transition-delay: 0.2s; }
        .form-item:nth-child(3) { transition-delay: 0.3s; }
        .form-item:nth-child(4) { transition-delay: 0.4s; }
        .form-item:nth-child(5) { transition-delay: 0.5s; }
        .location-item {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        .location-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .location-item:nth-child(1) { transition-delay: 0.1s; }
        .location-item:nth-child(2) { transition-delay: 0.2s; }
        .location-item:nth-child(3) { transition-delay: 0.3s; }
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
        
        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h2 className="text-5xl text-white/90 mb-8">
              You Will Grow, You Will Succeed. We Promise That
            </h2>
            <p className="text-2xl text-white/80 max-w-4xl mx-auto">
              We're here to support your journey. Our team is dedicated to helping you achieve your goals with confidence and clarity. 
              Let's build your future together.
            </p>
          </div>

          {/* Contact Info + Message Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Contact Info */}
            <div>
              <h3 className="text-3xl font-semibold text-white mb-8">Contact Info</h3>
              <p className="text-xl text-white/80 mb-10">
                Feel free to reach out—we're always happy to help.
              </p>

              <div className="space-y-8">
                <div className="flex items-start contact-item">
                  <div className="bg-white/20 backdrop-blur-md p-4 rounded-full mr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-white">Call for inquiry</h4>
                    <p className="text-xl text-white/80">+257 388-6895</p>
                  </div>
                </div>

                <div className="flex items-start contact-item">
                  <div className="bg-white/20 backdrop-blur-md p-4 rounded-full mr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-white">Send us email</h4>
                    <p className="text-xl text-white/80">contact@jobnexus.com</p>
                  </div>
                </div>

                <div className="flex items-start contact-item">
                  <div className="bg-white/20 backdrop-blur-md p-4 rounded-full mr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-white">Opening hours</h4>
                    <p className="text-xl text-white/80">Mon - Fri: 10AM - 10PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div ref={formRef}>
              <h3 className="text-3xl font-semibold text-white mb-8">Send Us Message</h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`form-item ${isVisible.form ? 'visible' : ''}`}>
                    <label className="block text-lg font-medium text-white mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg text-white placeholder-white/60"
                      required
                    />
                  </div>
                  <div className={`form-item ${isVisible.form ? 'visible' : ''}`}>
                    <label className="block text-lg font-medium text-white mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Your last name"
                      className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg text-white placeholder-white/60"
                      required
                    />
                  </div>
                </div>

                <div className={`form-item ${isVisible.form ? 'visible' : ''}`}>
                  <label className="block text-lg font-medium text-white mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your E-mail address"
                    className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg text-white placeholder-white/60"
                    required
                  />
                </div>

                <div className={`form-item ${isVisible.form ? 'visible' : ''}`}>
                  <label className="block text-lg font-medium text-white mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Your message..."
                    className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg text-white placeholder-white/60"
                    required
                  />
                </div>

                <div className={`form-item ${isVisible.form ? 'visible' : ''}`}>
                  <button
                    type="submit"
                    className="w-full bg-white text-blue-600 py-4 rounded-lg font-medium hover:bg-blue-50 transition text-xl"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Locations Section */}
          <div className="text-center" ref={locationsRef}>
            <h2 className="text-4xl font-bold text-white mb-16">Our Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              {[
                { city: "Addis Ababa", country: "Ethiopia" },
                { city: "New York", country: "USA" },
                { city: "Sydney", country: "Australia" },
              ].map((loc, index) => (
                <div 
                  key={index} 
                  className={`location-item p-8 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-white/40 transition-all ${isVisible.locations ? 'visible' : ''}`}
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">{loc.city}</h3>
                  <p className="text-xl text-white/80">{loc.country}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}