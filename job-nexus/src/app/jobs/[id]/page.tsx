"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

// Job data matching your API structure
const jobs = [
  {
    id: "1",
    title: "Forward Security Director",
    company: "Bauch, Schuppe and Schulist Co",
    location: "New York, USA",
    type: "Full Time",
    salary: "$40000-$42000",
    category: "Hotels & Tourism",
    description: "We are looking for a skilled Security Director to lead our security team. The ideal candidate will have 5+ years of experience in security management.",
    requirements: ["Bachelor's degree in Security Management", "5+ years of security management experience", "Strong leadership skills"],
    responsibilities: ["Develop security policies", "Manage security team operations", "Conduct risk assessments"],
    is_recent: true,
    posted: "10 min ago",
    created_at: new Date().toISOString(),
    experience: "Expert",
    salaryMin: 40000,
    salaryMax: 42000
  },
  {
    id: "2",
    title: "Regional Creative Facilitator",
    company: "Wisozk - Becker Co",
    location: "Los Angeles, USA",
    type: "Part Time",
    salary: "$28000-$32000",
    category: "Education",
    description: "Join our creative team as a facilitator to drive innovation and creative processes across regional teams.",
    requirements: ["3+ years in creative facilitation", "Excellent communication skills", "Experience in media industry"],
    responsibilities: ["Facilitate creative workshops", "Coordinate regional creative initiatives", "Support team brainstorming sessions"],
    is_recent: true,
    posted: "12 min ago",
    created_at: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
    experience: "Intermediate",
    salaryMin: 28000,
    salaryMax: 32000
  },
  {
    id: "3",
    title: "Internal Integration Planner",
    company: "Mraz, Quigley and Feest Inc.",
    location: "Texas, USA",
    type: "Full Time",
    salary: "$48000-$50000",
    category: "Telecommunications",
    description: "Plan and execute integration strategies for our internal systems and construction projects.",
    requirements: ["Bachelor's in Engineering", "3+ years project management", "Construction experience"],
    responsibilities: ["Plan integration strategies", "Coordinate with teams", "Monitor project progress"],
    is_recent: false,
    posted: "15 min ago",
    created_at: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
    experience: "Intermediate",
    salaryMin: 48000,
    salaryMax: 50000
  },
  {
    id: "4",
    title: "District Intranet Director",
    company: "VonRueden - Weber Co",
    location: "Florida, USA",
    type: "Full Time",
    salary: "$42000-$48000",
    category: "Commerce",
    description: "Oversee district-wide intranet operations and development for our commercial operations.",
    requirements: ["IT Management degree", "Network administration experience", "Leadership skills"],
    responsibilities: ["Manage intranet systems", "Coordinate IT teams", "Ensure network security"],
    is_recent: true,
    posted: "24 min ago",
    created_at: new Date(Date.now() - 10 * 60 * 1000).toISOString(),
    experience: "Expert",
    salaryMin: 42000,
    salaryMax: 48000
  },
  {
    id: "5",
    title: "Corporate Tactics Facilitator",
    company: "Cormier, Turner and Flatley Inc",
    location: "Boston, USA",
    type: "Full Time",
    salary: "$38000-$40000",
    category: "Commerce",
    description: "Facilitate corporate tactical planning and execution across multiple departments.",
    requirements: ["Business Strategy degree", "Corporate experience", "Facilitation skills"],
    responsibilities: ["Facilitate planning sessions", "Coordinate department strategies", "Monitor execution"],
    is_recent: false,
    posted: "26 min ago",
    created_at: new Date(Date.now() - 12 * 60 * 1000).toISOString(),
    experience: "Intermediate",
    salaryMin: 38000,
    salaryMax: 40000
  },
  {
    id: "6",
    title: "Forward Accounts Consultant",
    company: "Miller Group",
    location: "Boston, USA",
    type: "Full Time",
    salary: "$45000-$48000",
    category: "Financial Services",
    description: "Provide expert consultation on forward accounts management and financial strategies.",
    requirements: ["Finance degree", "Accounting certification", "Consulting experience"],
    responsibilities: ["Consult on accounts management", "Develop financial strategies", "Client relationship management"],
    is_recent: true,
    posted: "30 min ago",
    created_at: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
    experience: "Expert",
    salaryMin: 45000,
    salaryMax: 48000
  },
  {
    id: "7",
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc",
    location: "San Francisco, USA",
    type: "Full Time",
    salary: "$120000-$140000",
    category: "Telecommunications",
    description: "Develop cutting-edge software solutions for our enterprise clients.",
    requirements: ["5+ years software development", "JavaScript/TypeScript expertise", "Cloud platform experience"],
    responsibilities: ["Design system architecture", "Lead development teams", "Code review and mentoring"],
    is_recent: true,
    posted: "35 min ago",
    created_at: new Date(Date.now() - 20 * 60 * 1000).toISOString(),
    experience: "Expert",
    salaryMin: 120000,
    salaryMax: 140000
  },
  {
    id: "8",
    title: "Marketing Manager",
    company: "Digital Growth Agency",
    location: "Chicago, USA",
    type: "Full Time",
    salary: "$65000-$75000",
    category: "Commerce",
    description: "Lead marketing campaigns and strategies for diverse client portfolio.",
    requirements: ["Marketing degree", "3+ years management experience", "Digital marketing expertise"],
    responsibilities: ["Develop marketing strategies", "Manage campaign execution", "Analyze performance metrics"],
    is_recent: false,
    posted: "40 min ago",
    created_at: new Date(Date.now() - 25 * 60 * 1000).toISOString(),
    experience: "Intermediate",
    salaryMin: 65000,
    salaryMax: 75000
  },
  {
    id: "9",
    title: "Data Analyst",
    company: "Analytics Pro",
    location: "Austin, USA",
    type: "Full Time",
    salary: "$70000-$85000",
    category: "Financial Services",
    description: "Transform raw data into actionable business insights.",
    requirements: ["Statistics/Mathematics degree", "SQL and Python skills", "Data visualization experience"],
    responsibilities: ["Analyze business data", "Create reports and dashboards", "Provide data-driven recommendations"],
    is_recent: true,
    posted: "45 min ago",
    created_at: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    experience: "Intermediate",
    salaryMin: 70000,
    salaryMax: 85000
  },
  {
    id: "10",
    title: "UX/UI Designer",
    company: "Creative Solutions",
    location: "Seattle, USA",
    type: "Full Time",
    salary: "$80000-$95000",
    category: "Education",
    description: "Create intuitive and beautiful user experiences for our digital products.",
    requirements: ["Design degree", "3+ years UX/UI experience", "Figma/Sketch expertise"],
    responsibilities: ["Design user interfaces", "Conduct user research", "Create design systems"],
    is_recent: true,
    posted: "50 min ago",
    created_at: new Date(Date.now() - 35 * 60 * 1000).toISOString(),
    experience: "Intermediate",
    salaryMin: 80000,
    salaryMax: 95000
  },
  {
    id: "11",
    title: "DevOps Engineer",
    company: "Cloud Systems",
    location: "Denver, USA",
    type: "Full Time",
    salary: "$100000-$115000",
    category: "Telecommunications",
    description: "Build and maintain our cloud infrastructure and deployment pipelines.",
    requirements: ["Computer Science degree", "AWS/Azure experience", "CI/CD pipeline expertise"],
    responsibilities: ["Manage cloud infrastructure", "Automate deployment processes", "Monitor system performance"],
    is_recent: false,
    posted: "55 min ago",
    created_at: new Date(Date.now() - 40 * 60 * 1000).toISOString(),
    experience: "Expert",
    salaryMin: 100000,
    salaryMax: 115000
  },
  {
    id: "12",
    title: "Sales Representative",
    company: "Enterprise Solutions",
    location: "Miami, USA",
    type: "Full Time",
    salary: "$55000-$65000",
    category: "Commerce",
    description: "Drive revenue growth through strategic sales initiatives.",
    requirements: ["2+ years sales experience", "Excellent communication skills", "CRM software knowledge"],
    responsibilities: ["Generate new leads", "Close sales deals", "Maintain client relationships"],
    is_recent: true,
    posted: "60 min ago",
    created_at: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
    experience: "Fresher",
    salaryMin: 55000,
    salaryMax: 65000
  },
  {
    id: "13",
    title: "Product Manager",
    company: "Innovation Labs",
    location: "Portland, USA",
    type: "Full Time",
    salary: "$95000-$110000",
    category: "Commerce",
    description: "Lead product development from conception to launch.",
    requirements: ["Business/Technical degree", "3+ years product management", "Agile methodology experience"],
    responsibilities: ["Define product vision", "Coordinate cross-functional teams", "Manage product roadmap"],
    is_recent: true,
    posted: "65 min ago",
    created_at: new Date(Date.now() - 50 * 60 * 1000).toISOString(),
    experience: "Expert",
    salaryMin: 95000,
    salaryMax: 110000
  },
  {
    id: "14",
    title: "HR Specialist",
    company: "Talent Finders",
    location: "Phoenix, USA",
    type: "Part Time",
    salary: "$50000-$60000",
    category: "Education",
    description: "Manage recruitment and employee relations for our growing team.",
    requirements: ["HR degree/certification", "2+ years HR experience", "Recruitment expertise"],
    responsibilities: ["Manage hiring process", "Handle employee relations", "Develop HR policies"],
    is_recent: false,
    posted: "70 min ago",
    created_at: new Date(Date.now() - 55 * 60 * 1000).toISOString(),
    experience: "Intermediate",
    salaryMin: 50000,
    salaryMax: 60000
  },
  {
    id: "15",
    title: "Financial Analyst",
    company: "Wealth Management Inc",
    location: "Washington DC, USA",
    type: "Full Time",
    salary: "$75000-$90000",
    category: "Financial Services",
    description: "Provide financial analysis and investment recommendations.",
    requirements: ["Finance degree", "CFA preferred", "3+ years financial analysis"],
    responsibilities: ["Analyze financial data", "Prepare investment reports", "Risk assessment"],
    is_recent: true,
    posted: "75 min ago",
    created_at: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
    experience: "Intermediate",
    salaryMin: 75000,
    salaryMax: 90000
  },
  {
    id: "16",
    title: "Content Strategist",
    company: "Media Masters",
    location: "Atlanta, USA",
    type: "Freelance",
    salary: "$60000-$70000",
    category: "Education",
    description: "Develop and execute content strategies across multiple platforms.",
    requirements: ["Journalism/Marketing degree", "Content creation experience", "SEO knowledge"],
    responsibilities: ["Develop content strategy", "Manage content calendar", "Analyze content performance"],
    is_recent: true,
    posted: "80 min ago",
    created_at: new Date(Date.now() - 65 * 60 * 1000).toISOString(),
    experience: "Fresher",
    salaryMin: 60000,
    salaryMax: 70000
  },
  {
    id: "17",
    title: "Operations Manager",
    company: "Logistics Pro",
    location: "Dallas, USA",
    type: "Full Time",
    salary: "$70000-$80000",
    category: "Commerce",
    description: "Oversee daily operations and optimize business processes.",
    requirements: ["Business Administration degree", "3+ years operations management", "Process improvement experience"],
    responsibilities: ["Manage daily operations", "Optimize workflows", "Lead operations team"],
    is_recent: false,
    posted: "85 min ago",
    created_at: new Date(Date.now() - 70 * 60 * 1000).toISOString(),
    experience: "Expert",
    salaryMin: 70000,
    salaryMax: 80000
  },
  {
    id: "18",
    title: "Customer Success Manager",
    company: "SaaS Solutions",
    location: "San Diego, USA",
    type: "Seasonal",
    salary: "$65000-$75000",
    category: "Hotels & Tourism",
    description: "Ensure customer satisfaction and drive product adoption.",
    requirements: ["2+ years customer success", "SaaS experience", "Strong communication skills"],
    responsibilities: ["Onboard new customers", "Drive product adoption", "Gather customer feedback"],
    is_recent: true,
    posted: "90 min ago",
    created_at: new Date(Date.now() - 75 * 60 * 1000).toISOString(),
    experience: "Intermediate",
    salaryMin: 65000,
    salaryMax: 75000
  }
];

export default function JobDetailPage() {
  const router = useRouter();
  const params = useParams();
  
  // FIXED: Properly handle params as Promise in Next.js 15
  const [id, setId] = useState<string | null>(null);
  
  useEffect(() => {
    if (params?.id) {
      setId(params.id as string);
    }
  }, [params]);

  const job = jobs.find(j => j.id === id);

  // Application form state
  const [applicationData, setApplicationData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resume: null as File | null,
    coverLetter: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  // Check if user is logged in (you'll replace this with actual auth check)
  const [isLoggedIn] = useState(false); // Change to true for testing

  // Fixed: Use useEffect to handle the URL parameters properly
  useEffect(() => {
    if (!id) return;
  }, [id]);

  // FIXED: Show loading state while params are being resolved
  if (!id) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
          <div className="text-white text-lg">Loading job...</div>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Job Not Found</h1>
          <p className="text-xl mb-8">The job you're looking for doesn't exist.</p>
          <a 
            href="/jobs"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold"
          >
            Back to Jobs
          </a>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setApplicationData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setApplicationData(prev => ({
      ...prev,
      resume: file
    }));

    if (formErrors.resume) {
      setFormErrors(prev => ({
        ...prev,
        resume: ""
      }));
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!applicationData.fullName.trim()) {
      errors.fullName = "Full name is required";
    }

    if (!applicationData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(applicationData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!applicationData.phone.trim()) {
      errors.phone = "Phone number is required";
    }

    if (!applicationData.resume) {
      errors.resume = "Resume is required";
    }

    if (!applicationData.coverLetter.trim()) {
      errors.coverLetter = "Cover letter is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if user is logged in
    if (!isLoggedIn) {
      setShowLoginPrompt(true);
      return;
    }

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Application submitted:", applicationData);
      
      // Show success message
      setShowSuccess(true);

      // Reset form
      setApplicationData({
        fullName: "",
        email: "",
        phone: "",
        resume: null,
        coverLetter: ""
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);

    } catch (error) {
      console.error("Application failed:", error);
      alert("Application failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // FIXED: Use the same approach as your navbar for routing
  const handleCreateAccount = () => {
    // This uses the same approach as your navbar buttons
    window.history.pushState(null, "", "?auth=register");
    window.dispatchEvent(new PopStateEvent("popstate"));
    setShowLoginPrompt(false);
  };

  const handleSignIn = () => {
    // This uses the same approach as your navbar buttons  
    window.history.pushState(null, "", "?auth=login");
    window.dispatchEvent(new PopStateEvent("popstate"));
    setShowLoginPrompt(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 p-8">
      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 animate-fade-in">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <p className="font-semibold">Application Submitted!</p>
              <p className="text-sm opacity-90">We'll review your application and get back to you soon.</p>
            </div>
          </div>
        </div>
      )}

      {/* FIXED: Register Prompt Modal with proper routing */}
      {showLoginPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <svg className="w-16 h-16 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Account Required</h3>
              <p className="text-gray-600">You need an account to apply for this position.</p>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={handleCreateAccount}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Create New Account
              </button>
              
              <button
                onClick={handleSignIn}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Sign In to Existing Account
              </button>
            </div>
            
            <div className="mt-4 text-center">
              <button
                onClick={() => setShowLoginPrompt(false)}
                className="text-gray-600 hover:text-gray-800 text-sm font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <a 
          href="/jobs"
          className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors text-lg"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Jobs
        </a>

        {/* Main Job Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-4xl font-bold text-white mb-3">{job.title}</h1>
                  <p className="text-2xl text-white/80 mb-2">{job.company}</p>
                  <p className="text-white/60 flex items-center text-lg">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                  </p>
                </div>
                <span className="inline-block bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-lg">
                  {job.type}
                </span>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-white/10 text-white/80 px-4 py-2 rounded-full text-lg">
                  {job.category}
                </span>
                <span className="bg-white/10 text-white/80 px-4 py-2 rounded-full text-lg">
                  {job.experience}
                </span>
                <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-lg">
                  {job.posted}
                </span>
              </div>

              <p className="text-white/70 text-lg leading-relaxed mb-6">
                {job.description}
              </p>
            </div>

            <div className="lg:text-right lg:pl-8 lg:border-l lg:border-white/20">
              <div className="mb-6">
                <p className="text-3xl font-bold text-white mb-3">{job.salary}</p>
                <p className="text-white/60 text-lg">Annual Salary</p>
              </div>
            </div>
          </div>
        </div>

        {/* New Application Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Apply for this Position</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Application Form */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Personal Information</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Full Name *</label>
                  <input 
                    type="text"
                    name="fullName"
                    value={applicationData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                  />
                  {formErrors.fullName && (
                    <p className="text-red-400 text-sm mt-1">{formErrors.fullName}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Email Address *</label>
                  <input 
                    type="email"
                    name="email"
                    value={applicationData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                  {formErrors.email && (
                    <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Phone Number *</label>
                  <input 
                    type="tel"
                    name="phone"
                    value={applicationData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your phone number"
                  />
                  {formErrors.phone && (
                    <p className="text-red-400 text-sm mt-1">{formErrors.phone}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Resume/CV *</label>
                  <input 
                    type="file"
                    onChange={handleFileChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
                    accept=".pdf,.doc,.docx"
                  />
                  {formErrors.resume && (
                    <p className="text-red-400 text-sm mt-1">{formErrors.resume}</p>
                  )}
                  <p className="text-white/60 text-sm mt-1">Accepted formats: PDF, DOC, DOCX (Max: 5MB)</p>
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Cover Letter *</label>
                  <textarea
                    name="coverLetter"
                    value={applicationData.coverLetter}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us why you're a great fit for this position..."
                  />
                  {formErrors.coverLetter && (
                    <p className="text-red-400 text-sm mt-1">{formErrors.coverLetter}</p>
                  )}
                </div>
              </form>
            </div>

            {/* Job Summary & Apply Button */}
            <div className="space-y-6">
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">Job Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-white/80">
                    <span>Position:</span>
                    <span className="text-white">{job.title}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Company:</span>
                    <span className="text-white">{job.company}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Location:</span>
                    <span className="text-white">{job.location}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Type:</span>
                    <span className="text-white">{job.type}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Salary:</span>
                    <span className="text-white font-semibold">{job.salary}</span>
                  </div>
                </div>
              </div>

              {/* Apply Now Box */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Ready to Apply?</h3>
                <p className="text-white/90 mb-4">Submit your application and our team will review it within 24 hours.</p>
                
                {!isLoggedIn && (
                  <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-3 mb-4">
                    <p className="text-yellow-200 text-sm">
                      You need an account to apply for this position.
                    </p>
                  </div>
                )}

                <button 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-white text-blue-600 py-4 rounded-lg hover:bg-blue-50 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300 text-lg font-semibold flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-t-2 border-blue-600 border-solid rounded-full animate-spin mr-2"></div>
                      Submitting...
                    </>
                  ) : isLoggedIn ? (
                    'Submit Application'
                  ) : (
                    'Create Account or Sign In'
                  )}
                </button>
                <p className="text-white/70 text-sm mt-3">By clicking submit, you agree to our privacy policy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Job Details Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Requirements Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Requirements</h2>
            <ul className="space-y-3">
              {job.requirements.map((req, index) => (
                <li key={index} className="flex items-start text-white/80 text-lg">
                  <svg className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* Responsibilities Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Responsibilities</h2>
            <ul className="space-y-3">
              {job.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start text-white/80 text-lg">
                  <svg className="w-6 h-6 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}