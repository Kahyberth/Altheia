import { ArrowRight, CheckCircle, Lock, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import AnimatedBadge from "./animated-badge";
import HeroIllustration from "./hero-illustration";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-32 ">
      <div className="container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center lg:items-start justify-center space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700">
                <span className="flex h-2 w-2 rounded-full bg-violet-600"></span>
                <span className="ml-2">Powered by Artificial Intelligence</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter text-slate-900 md:text-5xl lg:text-6xl">
                Soluciones inteligentes para el mundo moderno
              </h1>
              <p className="max-w-[600px] text-slate-600 md:text-xl">
                Altheia combina tecnología de IA con diseño intuitivo para
                transformar cómo trabajas, creas y evolucionas.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-base"
                onClick={() => navigate("/register-clinic")}
              >
                Únete a Altheia
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <AnimatedBadge
                icon={<CheckCircle className="h-4 w-4" />}
                text="99.9% Disponibilidad"
              />
              <AnimatedBadge
                icon={<Zap className="h-4 w-4" />}
                text="Rápido como el rayo"
              />
              <AnimatedBadge
                icon={<Lock className="h-4 w-4" />}
                text="Seguridad empresarial"
              />
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
