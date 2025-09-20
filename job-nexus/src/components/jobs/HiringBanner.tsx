"use client";

export default function HiringBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-xl shadow-lg text-center">
      <div className="mb-4">
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider mb-2">
          WE ARE HIRING
        </h2>
        <p className="text-lg md:text-xl font-medium">Apply Today!</p>
      </div>
      <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg">
        View Open Positions
      </button>
    </div>
  );
}
