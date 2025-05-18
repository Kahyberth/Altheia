import { cn } from "@/lib/utils";
import { useState } from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: "violet" | "indigo" | "blue" | "emerald" | "cyan" | "purple";
}

export default function FeatureCard({
  icon,
  title,
  description,
  color = "violet",
}: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const colorMap = {
    violet: {
      light: "bg-violet-50",
      hover: "bg-violet-600",
      text: "text-violet-600",
      gradient: "from-violet-600 to-indigo-600",
      shadow: "shadow-violet-500/20",
    },
    indigo: {
      light: "bg-indigo-50",
      hover: "bg-indigo-600",
      text: "text-indigo-600",
      gradient: "from-indigo-600 to-blue-600",
      shadow: "shadow-indigo-500/20",
    },
    blue: {
      light: "bg-blue-50",
      hover: "bg-blue-600",
      text: "text-blue-600",
      gradient: "from-blue-600 to-sky-600",
      shadow: "shadow-blue-500/20",
    },
    emerald: {
      light: "bg-emerald-50",
      hover: "bg-emerald-600",
      text: "text-emerald-600",
      gradient: "from-emerald-600 to-teal-600",
      shadow: "shadow-emerald-500/20",
    },
    cyan: {
      light: "bg-cyan-50",
      hover: "bg-cyan-600",
      text: "text-cyan-600",
      gradient: "from-cyan-600 to-sky-600",
      shadow: "shadow-cyan-500/20",
    },
    purple: {
      light: "bg-purple-50",
      hover: "bg-purple-600",
      text: "text-purple-600",
      gradient: "from-purple-600 to-violet-600",
      shadow: "shadow-purple-500/20",
    },
  };

  return (
    <div
      className="group relative flex flex-col space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300",
          colorMap[color].light,
          colorMap[color].text,
          isHovered &&
            `${colorMap[color].hover} text-white shadow-lg ${colorMap[color].shadow}`
        )}
      >
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
      <div
        className={cn(
          "absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r transition-all duration-500 group-hover:w-full",
          colorMap[color].gradient
        )}
        style={{
          width: isHovered ? "100%" : "0%",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
    </div>
  );
}
