"use client";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Amazing services",
      text: "Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique in dolor. Mus etiam et vestibulum venenatis",
      author: "Kristin Hester",
      role: "Happy Client",
    },
    {
      quote: "Everything simple",
      text: "Mus etiam et vestibulum venenatis viverra ut. Elit morbi bibendum ullamcorper augue faucibus",
      author: "Zion Cisneros",
      role: "Happy Client",
    },
  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2 text-center">Testimonials from Our Customers</h2>
      <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
        At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id scelerisque rhoncus.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-4">{t.quote}</h3>
            <p className="text-gray-600 mb-4 italic">"{t.text}"</p>
            <div>
              <p className="font-semibold">{t.author}</p>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
