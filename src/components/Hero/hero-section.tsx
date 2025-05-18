import { ArrowRight, CheckCircle, Lock, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import AnimatedBadge from "./animated-badge";
import HeroScene from "./hero-scene";
import ScrollReveal from "./scroll-reveal";
export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-8">
            <ScrollReveal>
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700 shadow-sm">
                  <span className="mr-2 flex h-2 w-2 animate-pulse rounded-full bg-violet-600"></span>
                  <span>Powered by Artificial Intelligence</span>
                </div>
                <h1 className="bg-gradient-to-br from-slate-900 via-slate-800 to-violet-900 bg-clip-text text-4xl font-bold tracking-tighter text-transparent md:text-5xl lg:text-6xl">
                  Experimenta el futuro de soluciones inteligentes
                </h1>
                <p className="max-w-[600px] text-slate-600 md:text-xl">
                  Altheia combina IA de última generación con diseño intuitivo
                  para transformar cómo trabajas, creas y evolucionas de manera
                  sorprendente.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-indigo-600 text-base font-medium shadow-lg shadow-violet-500/20 transition-all hover:shadow-xl hover:shadow-violet-500/30"
                  onClick={() => navigate("/register-clinic")}
                >
                  <span className="relative z-10 flex items-center">
                    Unirse a Altheia
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-violet-700 to-indigo-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="flex flex-wrap gap-4">
                <AnimatedBadge
                  icon={<CheckCircle className="h-4 w-4" />}
                  text="99.9% Disponibilidad"
                  color="emerald"
                />
                <AnimatedBadge
                  icon={<Zap className="h-4 w-4" />}
                  text="Rápido como el rayo"
                  color="amber"
                />
                <AnimatedBadge
                  icon={<Lock className="h-4 w-4" />}
                  text="Seguridad empresarial"
                  color="sky"
                />
              </div>
            </ScrollReveal>
          </div>
          <div className="relative flex items-center justify-center lg:justify-end">
            <HeroScene />
          </div>
        </div>
      </div>
    </section>
  );
}
