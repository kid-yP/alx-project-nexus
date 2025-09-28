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
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          <Navbar />
        </Suspense>

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
