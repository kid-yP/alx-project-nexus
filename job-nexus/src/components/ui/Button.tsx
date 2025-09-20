import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className,
  ...props
}) => {
  const base = "rounded-lg font-medium transition inline-flex items-center justify-center";
  const variants: Record<string, string> = {
    primary: "px-5 py-3 bg-blue-600 text-white hover:bg-blue-700",
    secondary: "px-5 py-3 bg-indigo-600 text-white hover:bg-indigo-700",
    outline:
      "px-5 py-3 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50",
  };

  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
