"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { forwardRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface HeroSectionProps {}

const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>((props, ref) => {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  
  // Search states for hero section
  const [searchText, setSearchText] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  
  // Typewriter effect states
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  // New state to control animation restart
  const [animationKey, setAnimationKey] = useState(0);

  const fullText = "Find Your Dream Job Today!";

  // New useEffect to restart the company animations every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Update the key to force re-render and restart animation
      setAnimationKey(prevKey => prevKey + 1);
    }, 5000); // 5000 milliseconds = 5 seconds

    // Cleanup: clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this runs only on mount and unmount

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

    // Typewriter effect
    if (isTyping && currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setTypedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timer);
    } else if (isTyping) {
      // Typing complete - hide cursor after 1.5 seconds
      setIsTyping(false);
      const cursorTimer = setTimeout(() => {
        setShowCursor(false);
      }, 1500);
      
      return () => clearTimeout(cursorTimer);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentIndex, fullText, isTyping]);

  // Handle search from hero section - PRECISE SEARCH
  const handleHeroSearch = () => {
    // Navigate to jobs page with EXACT search parameters (case-sensitive)
    const params = new URLSearchParams();
    if (searchText.trim()) params.append('search', searchText.trim());
    if (location.trim()) params.append('location', location.trim());
    if (category.trim()) params.append('categories', category.trim());
    
    // Add flag for precise matching
    params.append('exactMatch', 'true');
    
    router.push(`/jobs?${params.toString()}`);
  };

  // Handle Enter key press in search input
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleHeroSearch();
    }
  };

  // Function to render the typed text with "Today!" styled differently
  const renderTypedText = () => {
    const baseText = "Find Your Dream Job ";
    const todayText = "Today!";
    
    if (typedText.length <= baseText.length) {
      return (
        <>
          {typedText}
          {showCursor && <span className="blink-caret ml-1" />}
        </>
      );
    } else {
      return (
        <>
          {baseText}
          <span className="text-purple-300 inline-block align-baseline relative -top-1">
            {typedText.slice(baseText.length)}
            {showCursor && <span className="blink-caret ml-1" />}
          </span>
        </>
      );
    }
  };

  const stats = [
    { 
      number: "25,850", 
      label: "Jobs",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      number: "10,250", 
      label: "Candidates",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      number: "18,400", 
      label: "Companies",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
  ];

  const companies = [
    { 
      name: "Spotify", 
      logo: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-2-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      )
    },
    { 
      name: "Adobe", 
      logo: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM0 .672h5.652L12 13.488 18.348.672H24L14.286 24H9.714L0 .672z"/>
        </svg>
      )
    },
    { 
      name: "Amazon", 
      logo: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10.922 11.816h2.148c1.393 0 2.148-.906 2.148-2.148 0-1.393-.906-2.148-2.148-2.148h-2.148v4.296zm0-6.445h2.148c2.148 0 3.594 1.295 3.594 3.594 0 2.148-1.446 3.594-3.594 3.594h-1.295v3.594h-1.853V5.371zm8.539 12.289c0 .605-.453 1.058-1.058 1.058-.605 0-1.058-.453-1.058-1.058 0-.605.453-1.058 1.058-1.058.605 0 1.058.453 1.058 1.058zm-2.861 1.658c-.906 0-1.658.453-2.148 1.058h-.151v-3.594h-1.853v9.59h1.853v-1.208c0-.755.302-1.208 1.208-1.208h1.208v-1.853h-.117zm-6.144-1.208h2.711c1.208 0 2.711.453 2.711 2.411 0 1.506-1.208 2.411-2.711 2.411h-2.711v-4.822zm0 6.445h2.711c2.411 0 4.521-1.208 4.521-4.521 0-2.711-1.959-4.521-4.521-4.521h-2.711v9.042z"/>
        </svg>
      )
    },
    { 
      name: "Netflix", 
      logo: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 2.344.058 4.85.398 4.854.398-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.245.004-22.935zM5.398 1.05V24c1.873-.225 2.81-.312 4.715-.398v-9.22z"/>
        </svg>
      )
    },
    { 
      name: "Apple", 
      logo: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      )
    },
    { 
      name: "Google", 
      logo: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138)C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
        </svg>
      )
    },
  ];

  return (
    <section 
      ref={ref} 
      className="relative pt-8 pb-6 px-6 overflow-hidden min-h-screen flex items-start justify-center gradient-bg-primary"
    >
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
      
      <div className="max-w-6xl mx-auto text-center relative z-10 mt-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight min-h-[80px] md:min-h-[100px] flex items-center justify-center">
          <span className="typewriter inline-block pb-0">
            {renderTypedText()}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto mt-2">
          Connecting Talent with Opportunity: Your Gateway to Career Success
        </p>

        <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-xl mb-10 animate-float border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input 
              type="text" 
              placeholder="Job Title or Company" 
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full text-lg py-3 bg-white/90 text-gray-800 placeholder-gray-600"
              id="search-input"
            />
            <select 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg bg-white/90 text-gray-800"
            >
              <option value="">Select Location</option>
              <option value="New York">New York, USA</option>
              <option value="Los Angeles">Los Angeles, USA</option>
              <option value="Texas">Texas, USA</option>
              <option value="Chicago">Chicago, USA</option>
              <option value="Boston">Boston, USA</option>
              <option value="Florida">Florida, USA</option>
              <option value="San Francisco">San Francisco, USA</option>
              <option value="Austin">Austin, USA</option>
              <option value="Seattle">Seattle, USA</option>
              <option value="Denver">Denver, USA</option>
              <option value="Miami">Miami, USA</option>
              <option value="Portland">Portland, USA</option>
              <option value="Phoenix">Phoenix, USA</option>
              <option value="Washington DC">Washington DC, USA</option>
              <option value="Atlanta">Atlanta, USA</option>
              <option value="Dallas">Dallas, USA</option>
              <option value="San Diego">San Diego, USA</option>
            </select>
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg bg-white/90 text-gray-800"
            >
              <option value="">Select Category</option>
              <option value="Commerce">Commerce</option>
              <option value="Telecommunications">Telecommunications</option>
              <option value="Hotels & Tourism">Hotels & Tourism</option>
              <option value="Education">Education</option>
              <option value="Financial Services">Financial Services</option>
              <option value="Construction">Construction</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Media">Media</option>
            </select>
            <Button 
              onClick={handleHeroSearch}
              className="w-full py-3 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 text-white"
            >
              Search Job
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 mt-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 animate-fade-in-up">
              <div className="flex justify-center text-blue-200 mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.number}</h3>
              <p className="text-white/80 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Brands Section */}
        <div className="mb-10 mt-4">
          <h2 className="text-3xl font-bold text-center text-white mb-14">
            Trusted by Leading Companies
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companies.map((company, index) => (
              <div 
                key={`${company.name}-${animationKey}`} // Key changes every 5 seconds, forcing re-render
                className="bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                <div className="text-white mb-2 filter brightness-0 invert">
                  {company.logo}
                </div>
                <span className="text-white text-sm font-medium">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;