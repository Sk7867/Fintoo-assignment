import React from "react";

export type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  default:
    "bg-blue-600 text-white hover:bg-blue-700", // customize as needed
  secondary:
    "bg-gray-200 text-gray-800 hover:bg-gray-300",
  destructive:
    "bg-red-600 text-white hover:bg-red-700",
  outline:
    "border border-gray-400 text-gray-700",
};

export const Badge: React.FC<BadgeProps> = ({
  className = "",
  variant = "default",
  ...props
}) => {
  return (
    <div
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
};
