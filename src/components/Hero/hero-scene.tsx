import { useEffect, useRef, useState } from "react";

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const container = containerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-violet-500/10 transition-all duration-700"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      {/* 3D Scene */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-64 w-64">
            {/* Orbiting circles */}
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-full border border-violet-200/50"
                style={{
                  animation: `orbit ${8 + i * 4}s linear infinite`,
                  transform: `rotate(${i * 45}deg)`,
                  borderWidth: 1,
                }}
              >
                <div
                  className="absolute h-3 w-3 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/20"
                  style={{
                    top: "50%",
                    left: 0,
                    transform: "translate(-50%, -50%)",
                    animation: `pulse ${2 + i}s ease-in-out infinite alternate`,
                  }}
                />
              </div>
            ))}

            {/* Central element */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute -inset-16 animate-spin-slow rounded-full border border-violet-200/30" />
                <div className="absolute -inset-12 animate-spin-slow-reverse rounded-full border border-indigo-200/40" />
                <div className="absolute -inset-8 animate-spin-slow rounded-full border border-violet-200/50" />

                <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-violet-600/20 to-indigo-600/20 p-8">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600/10 to-indigo-600/10 blur-xl" />
                  <div className="rounded-full bg-gradient-to-br from-violet-600/30 to-indigo-600/30 p-6">
                    <div className="rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 p-4 shadow-lg shadow-violet-500/30">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-8 w-8 text-white"
                      >
                        <path d="M12 2a8 8 0 0 1 8 8v12H4V10a8 8 0 0 1 8-8z" />
                        <path d="M12 10a2 2 0 0 0-2 2v8h4v-8a2 2 0 0 0-2-2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating particles */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute h-2 w-2 rounded-full bg-gradient-to-br from-violet-600/80 to-indigo-600/80 shadow-sm shadow-violet-500/20"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${
                    5 + Math.random() * 10
                  }s ease-in-out infinite alternate`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* UI Elements */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <div className="rounded-lg border border-slate-200 bg-white/80 p-3 shadow-sm backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
            <span className="text-xs font-medium text-slate-700">
              AI Active
            </span>
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white/80 p-3 shadow-sm backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-amber-500"></div>
            <span className="text-xs font-medium text-slate-700">
              Processing Data
            </span>
          </div>
        </div>
      </div>

      <div className="absolute left-4 top-4 rounded-lg border border-slate-200 bg-white/80 p-3 shadow-sm backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-violet-600"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
          <span className="text-xs font-medium text-slate-700">
            AI Performance
          </span>
        </div>
      </div>

      <style>{`
        @keyframes orbit {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.7;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 1;
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-10px) scale(1.2);
            opacity: 0.8;
          }
          100% {
            transform: translateY(5px) scale(0.8);
            opacity: 0.3;
          }
        }

        .animate-spin-slow {
          animation: orbit 12s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: orbit 10s linear infinite reverse;
        }
      `}</style>
    </div>
  );
}
