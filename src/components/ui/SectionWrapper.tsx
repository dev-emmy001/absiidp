import React from "react";

export type SectionBackground = "white" | "green" | "blue" | "grey";

export interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  background?: SectionBackground;
}

export function SectionWrapper({ 
  background = "white", 
  className = "", 
  children, 
  ...props 
}: SectionWrapperProps) {
  const backgrounds = {
    white: "bg-white text-gray-900",
    green: "bg-deep-green text-white",
    blue: "bg-royal-blue text-white",
    grey: "bg-gray-50 text-gray-900",
  };

  return (
    <section 
      className={`py-16 md:py-24 ${backgrounds[background]} ${className}`} 
      {...props}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
