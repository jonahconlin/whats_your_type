"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export default function Button({ 
  children, 
  variant = "primary", 
  size = "md",
  className = "",
  ...props 
}: ButtonProps) {
  const baseStyles = "font-sf-pro transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50";
  
  const variants = {
    primary: "bg-white text-gray-900 hover:bg-white/90",
    secondary: "bg-transparent border border-white text-white hover:bg-white/10",
    ghost: "bg-transparent text-white hover:bg-white/10",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
