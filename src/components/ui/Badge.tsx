import React from "react";

export type BadgeColor = "green" | "blue" | "gold";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  label: string;
  color?: BadgeColor;
}

export function Badge({ label, color = "green", className = "", ...props }: BadgeProps) {
  const colors = {
    green: "bg-deep-green/10 text-deep-green",
    blue: "bg-royal-blue/10 text-royal-blue",
    gold: "bg-gold-accent/20 text-yellow-800",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[color]} ${className}`}
      {...props}
    >
      {label}
    </span>
  );
}
