"use client";

export default function CategoriesSection() {
  const categories = [
    { name: "Agriculture", jobs: 1254 },
    { name: "Metal Production", jobs: 816 },
    { name: "Commerce", jobs: 2082 },
    { name: "Construction", jobs: 1520 },
    { name: "Hotels & Tourism", jobs: 1022 },
    { name: "Education", jobs: 1496 },
    { name: "Financial Services", jobs: 1529 },
    { name: "Transport", jobs: 1244 },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2 text-center">Browse by Category</h2>
        <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id scelerisque rhoncus.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm text-center hover:shadow-md transition">
              <h3 className="font-semibold text-gray-800 mb-2">{category.name}</h3>
              <p className="text-blue-600">{category.jobs} jobs</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
