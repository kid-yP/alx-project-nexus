"use client";

import { useState } from "react";

export default function AboutUsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}

      {/* Why Company is Great Section */}
      <section className="text-center mb-16 px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Why We're The Best Choice
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          At JobNexus, we prioritize excellence, integrity, and innovation. Our team is committed to delivering
          outstanding service, fostering a positive work environment, and providing opportunities for growth. 
          Join us and be part of a company that values your skills and invests in your success.
        </p>
      </section>

      {/* How It Works Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Create Account",
              description: "Sign up and set up your profile quickly and easily.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              )
            },
            {
              title: "Upload Resume",
              description: "Easily upload your resume and relevant documents.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              )
            },
            {
              title: "Find Jobs",
              description: "Search and browse jobs that match your profile and interests.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              )
            },
            {
              title: "Apply Job",
              description: "Submit applications easily and track your progress.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              )
            }
          ].map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-blue-100 p-4 rounded-full mb-4 text-blue-600">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              <div className="mt-4 w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full text-sm font-bold">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200 py-5">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  <span className="text-blue-600 mr-2">{(index + 1).toString().padStart(2, '0')}</span>
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === index && (
                <div className="mt-4 pl-7 text-gray-600">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Best Companies Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">We're Only Working With The Best</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {["Giving Job", "Human Estate", "Technopaste", "Top Team"].map((company, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 text-center">
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto flex items-center justify-center text-blue-600 font-bold text-lg">
                  {company.charAt(0)}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{company}</h3>
              <p className="text-gray-600 text-sm">Leading the industry with innovation and excellence.</p>
            </div>
          ))}
        </div>
      </section>

      {/* CEO Card Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Our CEO & Founder</h2>
        <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
              K
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Kidus Yosef</h3>
              <p className="text-gray-600">CEO & Front-end Developer</p>
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            Kidus Yosef is the visionary leader and front-end developer of JobNexus, overseeing
            operations and ensuring the highest quality standards in our digital products.
          </p>
          <div className="flex flex-col sm:flex-row justify-between text-gray-500 text-sm">
            <span>📧 kidusmekuria11@gmail.com</span>
            <span>📞 +251944214770</span>
            <span>🌍 Addis Ababa, Ethiopia</span>
          </div>
        </div>
      </section>
    </div>
  );
}
