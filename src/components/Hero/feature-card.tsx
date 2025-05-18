import { cn } from "@/lib/utils";
import { useState } from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative flex flex-col space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition-all duration-300 group-hover:bg-violet-600 group-hover:text-white",
          isHovered && "bg-violet-600 text-white"
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
          "absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-violet-600 to-indigo-600 transition-all duration-300 group-hover:w-full",
          isHovered && "w-full"
        )}
      />
    </div>
  );
}
