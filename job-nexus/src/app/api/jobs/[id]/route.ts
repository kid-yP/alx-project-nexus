import { NextRequest, NextResponse } from "next/server";

// Mock data with 18 jobs (6 per page for 3 pages)
const allJobs = [
  // Page 1 Jobs (1-6)
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
  // Page 2 Jobs (7-12)
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
  // Page 3 Jobs (13-18)
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

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const search = searchParams.get('search') || '';
    const location = searchParams.get('location') || '';
    const categories = searchParams.get('categories')?.split(',') || [];
    const jobTypes = searchParams.get('jobTypes')?.split(',') || [];
    const experienceLevels = searchParams.get('experienceLevels')?.split(',') || [];
    const datePosted = searchParams.get('datePosted') || '';
    const minSalary = parseInt(searchParams.get('minSalary') || '0');
    const sortBy = searchParams.get('sortBy') || 'latest';
    const exactMatch = searchParams.get('exactMatch') === 'true';
    
    const pageSize = 6;
    
    let filteredJobs = allJobs;
    
    // Apply filters with EXACT MATCHING
    if (search) {
      if (exactMatch) {
        // Exact match search (case-sensitive)
        filteredJobs = filteredJobs.filter(job => 
          job.title === search || 
          job.company === search
        );
      } else {
        // Case-insensitive search (original behavior)
        filteredJobs = filteredJobs.filter(job => 
          job.title.toLowerCase().includes(search.toLowerCase()) ||
          job.company.toLowerCase().includes(search.toLowerCase())
        );
      }
    }
    
    if (location) {
      if (exactMatch) {
        // Exact location matching
        filteredJobs = filteredJobs.filter(job => job.location === location);
      } else {
        // Case-insensitive location matching
        filteredJobs = filteredJobs.filter(job => 
          job.location.toLowerCase().includes(location.toLowerCase())
        );
      }
    }
    
    if (categories.length > 0) {
      if (exactMatch) {
        // Exact category matching
        filteredJobs = filteredJobs.filter(job => 
          categories.includes(job.category)
        );
      } else {
        // Case-insensitive category matching
        filteredJobs = filteredJobs.filter(job => 
          categories.some(cat => 
            job.category.toLowerCase() === cat.toLowerCase()
          )
        );
      }
    }
    
    if (jobTypes.length > 0) {
      filteredJobs = filteredJobs.filter(job => 
        jobTypes.includes(job.type)
      );
    }
    
    if (experienceLevels.length > 0) {
      filteredJobs = filteredJobs.filter(job => 
        experienceLevels.includes(job.experience)
      );
    }
    
    if (datePosted && datePosted !== 'All') {
      const now = new Date();
      let timeAgo = new Date();
      
      switch (datePosted) {
        case 'Last Hour': timeAgo.setHours(now.getHours() - 1); break;
        case 'Last 24 Hours': timeAgo.setHours(now.getHours() - 24); break;
        case 'Last 7 Days': timeAgo.setDate(now.getDate() - 7); break;
        case 'Last 30 Days': timeAgo.setDate(now.getDate() - 30); break;
      }
      
      filteredJobs = filteredJobs.filter(job => 
        new Date(job.created_at) >= timeAgo
      );
    }
    
    if (minSalary > 0) {
      filteredJobs = filteredJobs.filter(job => 
        job.salaryMin >= minSalary
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'salary_high': filteredJobs.sort((a, b) => b.salaryMin - a.salaryMin); break;
      case 'salary_low': filteredJobs.sort((a, b) => a.salaryMin - b.salaryMin); break;
      case 'latest':
      default: filteredJobs.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()); break;
    }
    
    // Calculate pagination
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedJobs = filteredJobs.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredJobs.length / pageSize);
    
    return NextResponse.json({ 
      success: true, 
      data: paginatedJobs,
      exactMatchUsed: exactMatch,
      pagination: {
        currentPage: page,
        totalPages: totalPages,
        totalJobs: filteredJobs.length,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      }
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ 
      success: false, 
      error: "Failed to fetch jobs" 
    }, { status: 500 });
  }
}