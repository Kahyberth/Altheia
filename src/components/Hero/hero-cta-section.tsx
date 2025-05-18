import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import ScrollReveal from "./scroll-reveal";

export default function HeroCtaSection() {
  return (
    <section className="relative overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-indigo-600"></div>
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(to_bottom,transparent,white)]"></div>

      <div className="container mx-auto relative px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
              <span>Únete a la Revolución de la IA</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl lg:text-5xl">
              Listo para experimentar el poder de la IA?
            </h2>
            <p className="max-w-[700px] text-violet-100 md:text-lg">
              Únete a miles de empresas que ya están utilizando Altheia para
              transformar sus negocios con soluciones de IA inteligentes.
            </p>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <Button
                className="group relative overflow-hidden bg-white text-violet-600 hover:bg-violet-50 hover:text-violet-700"
                size="lg"
              >
                <span className="flex items-center">
                  Únete a Altheia
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4"></div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
