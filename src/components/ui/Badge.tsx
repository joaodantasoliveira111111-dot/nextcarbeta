"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "gold" | "white" | "glass" | "outline" | "success" | "warning" | "error";
  size?: "sm" | "md" | "lg";
  dot?: boolean;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "gold", size = "md", dot, children, ...props }, ref) => {
    const variants = {
      gold: "bg-gradient-to-r from-gold-400 to-gold-500 text-black-900 shadow-gold/30",
      white: "bg-white-200/10 text-white-200 border border-white-200/20",
      glass: "bg-white-200/5 text-white-100 backdrop-blur-lg border border-white-200/10",
      outline: "bg-transparent text-gold-400 border border-gold-400/50 hover:bg-gold-400/10",
      success: "bg-green-500/20 text-green-400 border border-green-500/30",
      warning: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
      error: "bg-red-500/20 text-red-400 border border-red-500/30",
    };

    const sizes = {
      sm: "px-2 py-0.5 text-xs gap-1",
      md: "px-3 py-1 text-sm gap-1.5",
      lg: "px-4 py-1.5 text-base gap-2",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center font-display font-medium rounded-full transition-all duration-200",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {dot && (
          <span
            className={cn(
              "w-1.5 h-1.5 rounded-full",
              variant === "gold" && "bg-black-900",
              variant === "white" && "bg-white-200",
              variant === "glass" && "bg-white-100/60",
              variant === "outline" && "bg-gold-400",
              variant === "success" && "bg-green-400",
              variant === "warning" && "bg-amber-400",
              variant === "error" && "bg-red-400"
            )}
          />
        )}
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "gold" | "glass";
  removable?: boolean;
  onRemove?: () => void;
}

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, variant = "default", removable, onRemove, children, ...props }, ref) => {
    const variants = {
      default: "bg-white-200/10 text-white-200 border border-white-200/20",
      gold: "bg-gradient-to-r from-gold-400 to-gold-500 text-black-900 shadow-gold/30",
      glass: "bg-white-200/5 text-white-100 backdrop-blur-lg border border-white-200/10",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full transition-all duration-200",
          variants[variant],
          removable && "pr-1 cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
        {removable && onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className={cn(
              "flex items-center justify-center w-5 h-5 rounded-full transition-colors",
              variant === "gold" ? "hover:bg-black-900/20" : "hover:bg-white-200/20"
            )}
            aria-label="Remove tag"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </span>
    );
  }
);

Tag.displayName = "Tag";

export { Badge };