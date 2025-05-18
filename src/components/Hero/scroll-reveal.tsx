import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 700,
  className,
  direction = "up",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay, hasAnimated]);

  const getDirectionStyles = () => {
    switch (direction) {
      case "up":
        return {
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
        };
      case "down":
        return {
          transform: isVisible ? "translateY(0)" : "translateY(-20px)",
        };
      case "left":
        return {
          transform: isVisible ? "translateX(0)" : "translateX(20px)",
        };
      case "right":
        return {
          transform: isVisible ? "translateX(0)" : "translateX(-20px)",
        };
      case "none":
        return {
          transform: "none",
        };
    }
  };

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        ...getDirectionStyles(),
        opacity: isVisible ? 1 : 0,
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
      }}
    >
      {children}
    </div>
  );
}
