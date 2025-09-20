"use client";

import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Create A Better Future For Yourself</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id scelerisque rhoncus.
        </p>
        <Button variant="secondary">Search Job</Button>
      </div>
    </section>
  );
}
