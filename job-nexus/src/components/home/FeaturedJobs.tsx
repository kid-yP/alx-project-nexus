"use client";
import { useState, useEffect } from "react";
import JobCard from "@/components/jobs/JobCard";

export default function FeaturedJobs() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  // Mock fetch (replace later with GraphQL API)
  useEffect(() => {
    const newJobs = Array.from({ length: 6 }, (_, i) => ({
      id: i + page * 10,
      title: `Frontend Developer ${i + page * 10}`,
      company: "Tech Corp",
      location: "Remote",
      type: "Full-Time",
    }));
    setJobs((prev) => [...prev, ...newJobs]);
  }, [page]);

  const loadMore = () => setPage((prev) => prev + 1);

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Featured Jobs</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={loadMore}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"
        >
          Load More
        </button>
      </div>
    </section>
  );
}
