import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface AnimatedBadgeProps {
  icon: React.ReactNode;
  text: string;
  color?:
    | "violet"
    | "indigo"
    | "blue"
    | "emerald"
    | "amber"
    | "rose"
    | "sky"
    | "purple";
}

export default function AnimatedBadge({
  icon,
  text,
  color = "violet",
}: AnimatedBadgeProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const colorMap = {
    violet: {
      border: "border-violet-300",
      bg: "bg-violet-50",
      text: "text-violet-700",
      icon: "text-violet-600",
      shadow: "shadow-violet-500/20",
    },
    indigo: {
      border: "border-indigo-300",
      bg: "bg-indigo-50",
      text: "text-indigo-700",
      icon: "text-indigo-600",
      shadow: "shadow-indigo-500/20",
    },
    blue: {
      border: "border-blue-300",
      bg: "bg-blue-50",
      text: "text-blue-700",
      icon: "text-blue-600",
      shadow: "shadow-blue-500/20",
    },
    emerald: {
      border: "border-emerald-300",
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      icon: "text-emerald-600",
      shadow: "shadow-emerald-500/20",
    },
    amber: {
      border: "border-amber-300",
      bg: "bg-amber-50",
      text: "text-amber-700",
      icon: "text-amber-600",
      shadow: "shadow-amber-500/20",
    },
    rose: {
      border: "border-rose-300",
      bg: "bg-rose-50",
      text: "text-rose-700",
      icon: "text-rose-600",
      shadow: "shadow-rose-500/20",
    },
    sky: {
      border: "border-sky-300",
      bg: "bg-sky-50",
      text: "text-sky-700",
      icon: "text-sky-600",
      shadow: "shadow-sky-500/20",
    },
    purple: {
      border: "border-purple-300",
      bg: "bg-purple-50",
      text: "text-purple-700",
      icon: "text-purple-600",
      shadow: "shadow-purple-500/20",
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }, Math.random() * 1000);

    const interval = setInterval(() => {
      if (!isHovered) {
        setIsAnimating(true);
        setTimeout(() => {
          setIsAnimating(false);
        }, 1000);
      }
    }, 5000 + Math.random() * 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-500",
        isAnimating &&
          `scale-110 ${colorMap[color].border} ${colorMap[color].bg} ${colorMap[color].text} shadow-md ${colorMap[color].shadow}`,
        isHovered &&
          `${colorMap[color].border} ${colorMap[color].bg} ${colorMap[color].text} shadow-md ${colorMap[color].shadow}`
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onAnimationEnd={() => setIsAnimating(false)}
    >
      <span
        className={cn(
          "transition-colors duration-300",
          (isAnimating || isHovered) && colorMap[color].icon
        )}
      >
        {icon}
      </span>
      <span>{text}</span>
    </div>
  );
}
