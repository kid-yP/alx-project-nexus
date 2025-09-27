"use client";

export default function HiringBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-10 rounded-xl shadow-lg text-center">
      <div className="mb-6">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-3">
          WE ARE HIRING
        </h2>
        <p className="text-xl md:text-2xl font-medium">Apply Today!</p>
      </div>
      <button className="bg-white text-blue-600 font-semibold py-4 px-10 rounded-full hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg text-lg">
        View Open Positions
      </button>
    </div>
  );
}