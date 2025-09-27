import { NextRequest, NextResponse } from "next/server";

const recentJobs = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    type: "Full-time",
    salary: "$4000 - $4200",
    category: "Software Development",
    description: "We are looking for a skilled Frontend Developer to join our dynamic team. You will be responsible for building modern, responsive web applications using the latest technologies.",
    requirements: [
      "3+ years of experience in frontend development",
      "Proficiency in React, Next.js, and TypeScript",
      "Strong knowledge of HTML5, CSS3, and JavaScript ES6+",
      "Experience with state management libraries like Redux or Zustand",
      "Familiarity with version control systems (Git)"
    ],
    responsibilities: [
      "Develop and maintain user-facing features for web applications",
      "Collaborate with designers to implement responsive layouts",
      "Optimize applications for maximum speed and scalability",
      "Write clean, maintainable, and testable code",
      "Participate in code reviews and team meetings"
    ],
    posted: "2 hours ago",
    created_at: new Date().toISOString(),
    is_recent: true
  },
  {
    id: "2",
    title: "UI/UX Designer",
    company: "Designify",
    location: "New York, USA",
    type: "Hybrid",
    salary: "$3500 - $3800",
    category: "Design",
    description: "Join our creative team as a UI/UX Designer to create beautiful and intuitive user experiences for our digital products.",
    requirements: [
      "2+ years of UI/UX design experience",
      "Proficiency in design tools like Figma, Sketch, or Adobe XD",
      "Strong portfolio showcasing design projects",
      "Understanding of user-centered design principles",
      "Experience with prototyping and user testing"
    ],
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Collaborate with developers to implement designs",
      "Maintain design systems and style guides",
      "Create user flows and journey maps"
    ],
    posted: "5 hours ago",
    created_at: new Date().toISOString(),
    is_recent: true
  },
  {
    id: "3",
    title: "Backend Engineer",
    company: "HealthPlus",
    location: "London, UK",
    type: "Full-time",
    salary: "$4500 - $4800",
    category: "Software Development",
    description: "Build robust and scalable backend systems for our healthcare applications that serve thousands of users daily.",
    requirements: [
      "4+ years of backend development experience",
      "Proficiency in Node.js, Python, or Java",
      "Experience with database systems (SQL and NoSQL)",
      "Knowledge of RESTful API design and development",
      "Understanding of cloud platforms (AWS, Azure, or GCP)"
    ],
    responsibilities: [
      "Design and develop server-side logic and APIs",
      "Implement data storage solutions and database schemas",
      "Ensure system security and data protection",
      "Optimize application performance and scalability",
      "Collaborate with frontend developers on integration"
    ],
    posted: "1 day ago",
    created_at: new Date().toISOString(),
    is_recent: true
  },
  {
    id: "4",
    title: "Project Manager",
    company: "FinServe",
    location: "Boston, USA",
    type: "Full-time",
    salary: "$5000 - $5200",
    category: "Management",
    description: "Lead project teams to successful delivery of financial technology solutions for our enterprise clients.",
    requirements: [
      "5+ years of project management experience",
      "PMP certification or equivalent",
      "Experience in Agile/Scrum methodologies",
      "Strong leadership and communication skills",
      "Financial services industry knowledge"
    ],
    responsibilities: [
      "Plan and execute project timelines and deliverables",
      "Manage project budgets and resources",
      "Coordinate cross-functional teams",
      "Track project progress and report to stakeholders",
      "Identify and mitigate project risks"
    ],
    posted: "3 days ago",
    created_at: new Date().toISOString(),
    is_recent: true
  },
  {
    id: "5",
    title: "Data Scientist",
    company: "DataWorks",
    location: "San Francisco, USA",
    type: "Full-time",
    salary: "$5500 - $6000",
    category: "Data Science",
    description: "Transform raw data into actionable insights and build machine learning models to drive business decisions.",
    requirements: [
      "3+ years of data science experience",
      "Proficiency in Python, R, or SQL",
      "Experience with machine learning frameworks",
      "Strong statistical analysis skills",
      "Knowledge of data visualization tools"
    ],
    responsibilities: [
      "Analyze large datasets to identify trends and patterns",
      "Develop and deploy machine learning models",
      "Create data visualizations and reports",
      "Collaborate with business teams on data-driven solutions",
      "Maintain data pipelines and ETL processes"
    ],
    posted: "1 day ago",
    created_at: new Date().toISOString(),
    is_recent: true
  },
  {
    id: "6",
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Remote",
    type: "Full-time",
    salary: "$5200 - $5800",
    category: "DevOps",
    description: "Manage our cloud infrastructure and deployment pipelines to ensure high availability and performance of our services.",
    requirements: [
      "3+ years of DevOps experience",
      "Proficiency with AWS, Docker, and Kubernetes",
      "Experience with CI/CD pipelines",
      "Knowledge of infrastructure as code (Terraform, CloudFormation)",
      "Strong scripting skills (Bash, Python)"
    ],
    responsibilities: [
      "Manage and optimize cloud infrastructure",
      "Automate deployment and monitoring processes",
      "Ensure system security and compliance",
      "Troubleshoot production issues",
      "Collaborate with development teams on DevOps practices"
    ],
    posted: "4 hours ago",
    created_at: new Date().toISOString(),
    is_recent: true
  }
];

export async function GET() {
  try {
    // Simulate a small delay to show loading state
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return NextResponse.json({ 
      success: true, 
      data: recentJobs 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: "Failed to fetch recent jobs" 
    }, { status: 500 });
  }
}