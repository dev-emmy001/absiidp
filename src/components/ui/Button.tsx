import React from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "outline" | "white";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
}

export function Button({ 
  variant = "primary", 
  size = "md", 
  className = "", 
  href,
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest whitespace-nowrap gap-2";
  
  const variants = {
    primary: "bg-deep-green text-white hover:bg-green-800",
    secondary: "bg-gray-900 text-white hover:bg-deep-green",
    outline: "bg-transparent border border-gray-200 text-gray-600 hover:bg-gray-50",
    white: "bg-white text-deep-green hover:bg-gray-100"
  };

  const sizes = {
    sm: "px-5 py-2 text-[12px] rounded-sm",
    md: "px-6 py-3 text-[13px] rounded-sm",
    lg: "px-8 py-3.5 text-[14px] rounded-sm"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
}
