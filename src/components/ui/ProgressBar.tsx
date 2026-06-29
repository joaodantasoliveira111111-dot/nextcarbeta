"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
  showLabels?: boolean;
  labels?: string[];
  variant?: "default" | "steps";
}

export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ className, currentStep, totalSteps, showLabels = false, labels, variant = "default", ...props }, ref) => {
    const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;
    const clampedProgress = Math.max(0, Math.min(100, progress));

    if (variant === "steps") {
      return (
        <div ref={ref} className={cn("w-full", className)} {...props}>
          <div className="flex items-center justify-between relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 bg-white-100/10 rounded-full" />
            {Array.from({ length: totalSteps }).map((_, index) => {
              const step = index + 1;
              const isActive = step <= currentStep;
              const isCurrent = step === currentStep;
              return (
                <div key={step} className="relative z-10 flex flex-col items-center">
                  <div
                    className={cn(
                      "relative w-10 h-10 rounded-full flex items-center justify-center text-sm font-display font-semibold transition-all duration-500",
                      isActive
                        ? "bg-gradient-to-br from-gold-400 to-gold-500 text-black-900 shadow-gold"
                        : "bg-white-100/10 text-white-100/40 border border-white-100/20",
                      isCurrent && "animate-pulse-gold scale-110"
                    )}
                  >
                    {isActive && step < currentStep && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    {!isActive && step}
                  </div>
                  {showLabels && labels?.[index] && (
                    <span
                      className={cn(
                        "mt-2 text-xs text-center max-w-[80px] transition-colors duration-300",
                        isActive ? "text-white-200 font-medium" : "text-white-100/40"
                      )}
                    >
                      {labels[index]}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        <div className="relative h-2 bg-white-100/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-gold-400 to-gold-500 rounded-full transition-all duration-700 ease-out"
            style={{ width: `${clampedProgress}%` }}
            role="progressbar"
            aria-valuenow={Math.round(clampedProgress)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Progress: ${Math.round(clampedProgress)}%`}
          >
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] animate-shimmer" />
          </div>
        </div>
        {showLabels && (
          <div className="flex justify-between mt-2 text-xs">
            <span className="text-white-100/60">Step {currentStep}</span>
            <span className="text-gold-400 font-display">{Math.round(clampedProgress)}%</span>
            <span className="text-white-100/60">of {totalSteps}</span>
          </div>
        )}
      </div>
    );
  }
);

ProgressBar.displayName = "ProgressBar";

export interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
  className?: string;
  direction?: "horizontal" | "vertical";
}

export const StepIndicator = React.forwardRef<HTMLDivElement, StepIndicatorProps>(
  ({ steps, currentStep, className, direction = "horizontal", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          direction === "horizontal" ? "flex items-center justify-between" : "flex flex-col gap-6",
          className
        )}
        {...props}
      >
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          const isLast = index === steps.length - 1;

          return (
            <div key={step} className="relative flex flex-col items-center">
              <div
                className={cn(
                  "relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-sm font-display font-semibold transition-all duration-500",
                  isCompleted
                    ? "bg-gradient-to-br from-gold-400 to-gold-500 text-black-900 shadow-gold"
                    : isCurrent
                    ? "bg-gradient-to-br from-gold-400 to-gold-500 text-black-900 shadow-gold animate-pulse-gold"
                    : "bg-white-100/10 text-white-100/40 border border-white-100/20"
                )}
              >
                {isCompleted ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  stepNumber
                )}
              </div>
              <span
                className={cn(
                  "mt-2 text-sm text-center max-w-[100px] transition-colors duration-300",
                  isCompleted || isCurrent ? "text-white-200 font-medium" : "text-white-100/40"
                )}
              >
                {step}
              </span>
              {!isLast && direction === "horizontal" && (
                <div
                  className={cn(
                    "absolute top-5 left-1/2 w-full h-0.5 -translate-x-1/2",
                    isCompleted ? "bg-gradient-to-r from-gold-400 to-gold-500" : "bg-white-100/10"
                  )} />
              )}
              {!isLast && direction === "vertical" && (
                <div
                  className={cn(
                    "absolute left-5 top-10 w-0.5 h-full",
                    isCompleted ? "bg-gradient-to-b from-gold-400 to-gold-500" : "bg-white-100/10"
                  )} />
              )}
            </div>
          );
        })}
      </div>
    );
  }
);

StepIndicator.displayName = "StepIndicator";