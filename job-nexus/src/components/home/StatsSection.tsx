"use client";

export default function StatsSection() {
  const stats = [
    { number: "25,850", label: "Jobs" },
    { number: "10,250", label: "Candidates" },
    { number: "18,400", label: "Companies" },
  ];

  const companies = ["Spotify", "Slack", "Adobe", "Asana", "Linear"];

  return (
    <section className="py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center gap-12 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 items-center">
          {companies.map((company, index) => (
            <div key={index} className="text-xl font-semibold text-gray-700">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
