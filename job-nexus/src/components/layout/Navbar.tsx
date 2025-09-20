"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/jobs", label: "Jobs" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold text-blue-600">
        JobNexus
      </Link>

      {/* Links */}
      <div className="flex space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              pathname === link.href
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Auth Buttons */}
      <div className="flex space-x-3">
        <Link href="/login">
          <Button variant="secondary">Login</Button>
        </Link>
        <Link href="/register">
          <Button variant="primary">Register</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
