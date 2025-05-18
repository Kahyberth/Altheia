import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface AnimatedBadgeProps {
  icon: React.ReactNode;
  text: string;
}

export default function AnimatedBadge({ icon, text }: AnimatedBadgeProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Initial animation
    setTimeout(() => {
      setIsAnimating(true);
    }, Math.random() * 1000);

    // Set up interval for periodic animations
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }, 5000 + Math.random() * 5000); // Random interval between 5-10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300",
        isAnimating &&
          "scale-110 border-violet-300 bg-violet-50 text-violet-700 shadow-md"
      )}
      onAnimationEnd={() => setIsAnimating(false)}
    >
      <span
        className={cn(
          "transition-colors duration-300",
          isAnimating && "text-violet-600"
        )}
      >
        {icon}
      </span>
      <span>{text}</span>
    </div>
  );
}
