"use client";

import JobCard, { Job } from "@/components/jobs/JobCard";
import FilterSection from "@/components/jobs/FilterSection";
import TopCompanies from "@/components/jobs/TopCompanies";
import { useState, useEffect, useLayoutEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";

interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalJobs: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

interface Filters {
  search: string;
  location: string;
  categories: string[];
  jobTypes: string[];
  experienceLevels: string[];
  datePosted: string;
  minSalary: number;
}

export default function JobsPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('latest');
  const [filters, setFilters] = useState<Filters>({
    search: '',
    location: '',
    categories: [],
    jobTypes: [],
    experienceLevels: [],
    datePosted: '',
    minSalary: 0
  });
  const [hasSearched, setHasSearched] = useState(false);
  
  const [pagination, setPagination] = useState<PaginationInfo>({
    currentPage: 1,
    totalPages: 1,
    totalJobs: 0,
    hasNextPage: false,
    hasPrevPage: false
  });

  // Fixed: Added proper typing for useSearchParams
  const searchParams = useSearchParams();

  // Fixed mouse move effect with proper dependencies
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Scroll to top when page changes
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [currentPage]);

  const fetchJobs = useCallback(async (page: number = 1, filters: Filters, sort: string) => {
    try {
      setLoading(true);
      setError(null);
      
      // Build query parameters
      const params = new URLSearchParams({
        page: page.toString(),
        sortBy: sort
      });

      if (filters.search) params.append('search', filters.search);
      if (filters.location) params.append('location', filters.location);
      if (filters.categories.length > 0) params.append('categories', filters.categories.join(','));
      if (filters.jobTypes.length > 0) params.append('jobTypes', filters.jobTypes.join(','));
      if (filters.experienceLevels.length > 0) params.append('experienceLevels', filters.experienceLevels.join(','));
      if (filters.datePosted) params.append('datePosted', filters.datePosted);
      if (filters.minSalary > 0) params.append('minSalary', filters.minSalary.toString());

      const response = await fetch(`/api/jobs?${params.toString()}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to fetch jobs: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        setJobs(data.data);
        setPagination(data.pagination);
        setCurrentPage(data.pagination.currentPage);
        setHasSearched(true);
      } else {
        throw new Error(data.error || 'Failed to fetch jobs');
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setError(error instanceof Error ? error.message : 'An error occurred while fetching jobs.');
      setJobs([]);
      setPagination({
        currentPage: 1,
        totalPages: 1,
        totalJobs: 0,
        hasNextPage: false,
        hasPrevPage: false
      });
    } finally {
      setLoading(false);
    }
  }, []);

  // Fixed: Added proper null checking for searchParams
  useEffect(() => {
    if (!searchParams) return;

    const search = searchParams.get('search');
    const location = searchParams.get('location');
    const category = searchParams.get('category');

    const newFilters = {
      search: search || '',
      location: location || '',
      categories: category ? [category] : [],
      jobTypes: [],
      experienceLevels: [],
      datePosted: '',
      minSalary: 0
    };

    setFilters(newFilters);
    setCurrentPage(1);
    fetchJobs(1, newFilters, sortBy);
    if (search || location || category) setHasSearched(true);
  }, [searchParams, fetchJobs, sortBy]);

  const handleSearchClick = (newFilters: Filters) => {
    setFilters(newFilters);
    setCurrentPage(1);
    fetchJobs(1, newFilters, sortBy);
  };

  const handleResetFilters = () => {
    const initialFilters = {
      search: '',
      location: '',
      categories: [],
      jobTypes: [],
      experienceLevels: [],
      datePosted: '',
      minSalary: 0
    };
    setFilters(initialFilters);
    setCurrentPage(1);
    fetchJobs(1, initialFilters, sortBy);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortBy = e.target.value;
    setSortBy(newSortBy);
    setCurrentPage(1);
    fetchJobs(1, filters, newSortBy);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= pagination.totalPages) {
      setCurrentPage(page);
      fetchJobs(page, filters, sortBy);
    }
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(pagination.totalPages, startPage + maxVisiblePages - 1);
    
    // Adjust if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  if (loading && !hasSearched) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{
        background: "linear-gradient(-45deg, #667eea, #764ba2, #6B8DD6, #8E37D7)",
        backgroundSize: "400% 400%",
        animation: "gradient 15s ease infinite"
      }}>
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mb-4"></div>
          <div className="text-white text-lg">Loading jobs...</div>
        </div>
      </div>
    );
  }

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
        .job-card {
          opacity: 0;
          animation: fadeInUp 0.6s ease forwards;
        }
        .custom-select {
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.1) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          color: white;
          appearance: none;
          background-image: url("data:image/svg+xml;charset=US-ASCII,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'><path fill='%23ffffff' d='m2 0 2 2-2 2L0 2z'/></svg>");
          background-repeat: no-repeat;
          background-position: right 0.75rem center;
          background-size: 0.65rem auto;
        }
        .custom-select option {
          background: #4a5568;
          color: white;
        }
      `}</style>
      
      <main 
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <FilterSection 
                onSearchClick={handleSearchClick}
                loading={loading}
                onResetFilters={handleResetFilters}
              />
            </div>

            {/* Job Listings */}
            <div className="lg:w-3/4">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <p className="text-lg text-white/80 mb-4 md:mb-0">
                  {hasSearched 
                    ? `Showing ${jobs.length} of ${pagination.totalJobs} jobs (Page ${currentPage} of ${pagination.totalPages})`
                    : `Showing all ${pagination.totalJobs} jobs (Page ${currentPage} of ${pagination.totalPages})`
                  }
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-white/80 text-sm font-medium">Sort by:</span>
                  <div className="relative">
                    <select 
                      value={sortBy}
                      onChange={handleSortChange}
                      disabled={loading}
                      className="custom-select px-4 py-2.5 rounded-lg text-sm font-medium cursor-pointer disabled:opacity-50 pr-10 min-w-[180px] transition-all duration-200 hover:bg-white/20 focus:ring-2 focus:ring-white/50 focus:outline-none"
                    >
                      <option value="latest">Latest Jobs</option>
                      <option value="salary_high">Salary: High to Low</option>
                      <option value="salary_low">Salary: Low to High</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white/80">
                      <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {loading && (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
                  <div className="text-white text-lg">
                    {hasSearched ? "Searching jobs..." : "Loading jobs..."}
                  </div>
                </div>
              )}

              {error && !loading && (
                <div className="text-center py-12">
                  <div className="text-white text-xl mb-4">Error: {error}</div>
                  <button 
                    onClick={() => fetchJobs(currentPage, filters, sortBy)}
                    className="px-6 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all duration-300"
                  >
                    Try Again
                  </button>
                </div>
              )}

              {!loading && !error && (
                <div className="space-y-6">
                  {jobs.length > 0 ? (
                    jobs.map((job, index) => (
                      <div 
                        key={job.id} 
                        className="job-card"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <JobCard job={job} />
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <div className="text-white text-xl mb-4">No jobs found</div>
                      <p className="text-white/70 mb-4">Try adjusting your filters or check back later.</p>
                      <button 
                        onClick={handleResetFilters}
                        className="px-6 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition"
                      >
                        Show All Jobs
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Pagination */}
              {!loading && !error && pagination.totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <div className="flex items-center space-x-2">
                    {/* Previous Button */}
                    <button 
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={!pagination.hasPrevPage || loading}
                      className={`px-4 py-2 bg-white/10 backdrop-blur-md border rounded-lg text-lg transition-all duration-300 hover:transform hover:-translate-y-1 ${
                        !pagination.hasPrevPage || loading
                          ? 'text-white/40 border-white/20 cursor-not-allowed' 
                          : 'text-white border-white/20 hover:bg-white/20'
                      }`}
                    >
                      &lt; Prev
                    </button>
                    
                    {/* Page Numbers */}
                    {getPageNumbers().map((pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        disabled={loading}
                        className={`px-4 py-2 bg-white/10 backdrop-blur-md border rounded-lg text-lg transition-all duration-300 hover:transform hover:-translate-y-1 ${
                          currentPage === pageNum
                            ? 'bg-white/20 text-white border-white/40'
                            : 'text-white border-white/20 hover:bg-white/20'
                        } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {pageNum}
                      </button>
                    ))}
                    
                    {/* Next Button */}
                    <button 
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={!pagination.hasNextPage || loading}
                      className={`px-4 py-2 bg-white/10 backdrop-blur-md border rounded-lg text-lg transition-all duration-300 hover:transform hover:-translate-y-1 ${
                        !pagination.hasNextPage || loading
                          ? 'text-white/40 border-white/20 cursor-not-allowed' 
                          : 'text-white border-white/20 hover:bg-white/20'
                      }`}
                    >
                      Next &gt;
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <TopCompanies />
      </main>
    </>
  );
}


