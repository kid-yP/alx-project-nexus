// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react"; // ✅ for handling client-side hooks
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

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
        {/* Navbar (may use client-side hooks like useSearchParams) */}
        <Suspense fallback={<div>Loading navigation...</div>}>
          <Navbar />
        </Suspense>

        {/* Page Content */}
        <main className="flex-1">{children}</main>

        {/* Footer (safe to wrap just in case) */}
        <Suspense fallback={<div>Loading footer...</div>}>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
