"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import Button from "../ui/Button";
import { useState, useEffect } from "react";
import AuthModal from "../auth/AuthModal";

const Navbar = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Handle URL parameters for auth modal
  useEffect(() => {
    const authParam = searchParams?.get('auth');
    if (authParam === 'login' || authParam === 'register') {
      setAuthMode(authParam);
      setIsAuthModalOpen(true);
    }
  }, [searchParams]);

  const handleAuthClick = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
    // Update URL without page reload
    window.history.pushState(null, '', `?auth=${mode}`);
  };

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false);
    // Remove auth parameter from URL
    window.history.replaceState(null, '', pathname);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/jobs", label: "Jobs" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      
      <nav 
        className="w-full px-8 py-5 flex justify-between items-center relative"
        style={{
          background: "linear-gradient(-45deg, #667eea, #764ba2, #6B8DD6, #8E37D7)",
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite"
        }}
      >
        {/* Mouse-following effect that syncs with HeroSection */}
        <div 
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{
            background: `
              radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.15), transparent 40%),
              radial-gradient(200px circle at ${mousePosition.x + 200}px ${mousePosition.y + 100}px, rgba(255, 255, 255, 0.1), transparent 40%)
            `
          }}
        />
        
        {/* Logo with Job Icon */}
        <div className="flex items-center relative z-10">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-10 w-10 text-white mr-3"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
            />
          </svg>
          <Link href="/" className="text-3xl font-bold text-white">
            JobNexus
          </Link>
        </div>

        {/* Links with better spacing */}
        <div className="flex space-x-10 relative z-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg ${
                pathname === link.href
                  ? "text-white font-semibold"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Auth Buttons - Both with same transparent style */}
        <div className="flex space-x-4 relative z-10">
          <Button 
            onClick={() => handleAuthClick('login')}
            variant="secondary" 
            className="text-lg px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            Login
          </Button>
          <Button 
            onClick={() => handleAuthClick('register')}
            variant="secondary" 
            className="text-lg px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            Register
          </Button>
        </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={handleCloseAuthModal}
        initialMode={authMode}
      />
    </>
  );
};

export default Navbar;