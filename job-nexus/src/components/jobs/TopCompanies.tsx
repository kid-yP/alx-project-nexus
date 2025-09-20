"use client";

export default function TopCompanies() {
  const companies = [
    { name: "Instagram", description: "Elti velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat", jobs: 8 },
    { name: "Tesla", description: "At pellentesque amet odio cras imperdiet nisl. Ac magna aliquet massa leo", jobs: 18 },
    { name: "McDonald's", description: "Odio aliquet tellus tellus maccenas. Faucibus in viverra venenatis phasellus", jobs: 12 },
    { name: "Apple", description: "Et odio sem tellus ultrices posuere consequat. Tristique nascetur sapien", jobs: 9 },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Company</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companies.map((company, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{company.name}</h3>
              <p className="text-gray-600 mb-4 text-sm">{company.description}</p>
              <p className="text-blue-600 font-medium">{company.jobs} open jobs</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
