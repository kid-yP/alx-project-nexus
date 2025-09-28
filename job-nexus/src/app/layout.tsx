import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Job Nexus",
  description: "Find your dream job with Job Nexus",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Navbar */}
        <Suspense fallback={<div className="p-4 text-center">Loading Navbar...</div>}>
          <Navbar />
        </Suspense>

        {/* Page Content (wrap all pages in Suspense) */}
        <main className="flex-1">
          <Suspense fallback={<div className="p-8 text-center">Loading Page...</div>}>
            {children}
          </Suspense>
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
