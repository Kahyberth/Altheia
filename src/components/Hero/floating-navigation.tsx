import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function FloatingNavigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Show floating nav after scrolling down
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Determine active section
      const sections = ["features", "how-it-works", "testimonials"];
      let currentSection = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transform">
      <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white/90 px-2 py-1.5 shadow-lg shadow-violet-500/10 backdrop-blur-md">
        {[
          { id: "features", label: "Características" },
          { id: "how-it-works", label: "Cómo funciona" },
          { id: "testimonials", label: "Testimonios" },
        ].map((item) => (
          <Link
            key={item.id}
            to={`#${item.id}`}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-medium transition-all",
              activeSection === item.id
                ? "bg-violet-600 text-white"
                : "text-slate-700 hover:bg-violet-50 hover:text-violet-700"
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
