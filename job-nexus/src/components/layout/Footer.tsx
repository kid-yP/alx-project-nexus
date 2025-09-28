"use client";

import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      alert("Please enter your email address");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Subscribed email:", email);
      setIsSubscribed(true);
      setEmail("");
    } catch (error) {
      console.error("Subscription failed:", error);
      alert("Subscription failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-30">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center mb-6">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8 text-blue-400 mr-2"
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
            <h2 className="text-2xl font-bold text-white">JobNexus</h2>
          </div>
          <p className="mt-4 text-lg">
            Find your dream job with JobNexus. Explore thousands of job listings
            and connect with top companies worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
          <ul className="space-y-4">
            <li>
              <Link href="/" className="hover:text-blue-400 text-lg">
                Home
              </Link>
            </li>
            <li>
              <Link href="/jobs" className="hover:text-blue-400 text-lg">
                Jobs
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400 text-lg">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400 text-lg">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Resources</h3>
          <ul className="space-y-4">
            <li>
              <Link href="/blog" className="hover:text-blue-400 text-lg">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-blue-400 text-lg">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-blue-400 text-lg">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Stay Updated</h3>
          
          {isSubscribed ? (
            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-green-400 font-semibold">Subscribed Successfully!</span>
              </div>
              <p className="text-green-300 text-sm">
                You have subscribed to stay updated with our latest news and job opportunities.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-3 rounded-md text-lg transition-colors flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin mr-2"></div>
                    Subscribing...
                  </>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-16 border-t border-gray-700 pt-8 text-center text-lg">
        © {new Date().getFullYear()} JobNexus. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;