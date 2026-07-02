import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ hover = false, className = "", children, ...props }: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg border border-gray-200 ${
        hover ? "transition-shadow hover:shadow-lg hover:-translate-y-1 duration-300" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
