"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  dir?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

export function Reveal({
  children,
  className,
  delay = 0,
  dir = "up",
  duration = 0.8,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isVisible) return "translate(0, 0)";
    switch (dir) {
      case "up":
        return "translate(0, 30px)";
      case "down":
        return "translate(0, -30px)";
      case "left":
        return "translate(30px, 0)";
      case "right":
        return "translate(-30px, 0)";
      case "none":
        return "translate(0, 0)";
    }
  };

  return (
    <div
      ref={ref}
      className={cn("will-change-transform", className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}s cubic-bezier(0.2, 0.8, 0.2, 1), transform ${duration}s cubic-bezier(0.2, 0.8, 0.2, 1)`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}