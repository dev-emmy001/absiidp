import React from "react";

export interface CategoryTagProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  active?: boolean;
}

export function CategoryTag({ label, active = false, className = "", ...props }: CategoryTagProps) {
  return (
    <button
      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-green ${
        active 
          ? "bg-deep-green text-white hover:bg-green-800" 
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      } ${className}`}
      {...props}
    >
      {label}
    </button>
  );
}
