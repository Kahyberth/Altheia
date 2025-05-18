import { Cpu, Database, Globe, Lock, MessageSquare, Zap } from "lucide-react";
import FeatureCard from "./feature-card";
import ScrollReveal from "./scroll-reveal";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700 shadow-sm">
              <span>Características</span>
            </div>
            <h2 className="bg-gradient-to-r from-violet-700 to-indigo-600 bg-clip-text text-3xl font-bold tracking-tighter text-transparent md:text-4xl">
              Capacidades de IA
            </h2>
            <p className="max-w-[700px] text-slate-600 md:text-lg">
              Descubre cómo la tecnología de IA avanzada de Altheia puede
              mejorar tus flujos de trabajo y aumentar tu productividad.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ScrollReveal delay={100}>
            <FeatureCard
              icon={<Cpu className="h-6 w-6" />}
              title="Procesamiento de IA avanzado"
              description="Utilice algoritmos de aprendizaje automático de última generación para procesar y analizar conjuntos de datos complejos con una precisión sin precedentes."
              color="violet"
            />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <FeatureCard
              icon={<MessageSquare className="h-6 w-6" />}
              title="Entendimiento de lenguaje natural"
              description="Comunícate con nuestra IA utilizando lenguaje natural para una interacción sin complicaciones y resultados más rápidos que se sienten realmente intuitivos."
              color="indigo"
            />
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <FeatureCard
              icon={<Database className="h-6 w-6" />}
              title="Gestión de datos inteligente"
              description="Organice, clasifique y extraiga insights de sus datos con herramientas de IA que aprenden a medida que los utiliza."
              color="blue"
            />
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <FeatureCard
              icon={<Globe className="h-6 w-6" />}
              title="Accesibilidad global"
              description="Acceda a sus herramientas y datos de IA desde cualquier parte del mundo con nuestra plataforma en la nube optimizada para todos los dispositivos."
              color="cyan"
            />
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="Procesamiento en tiempo real"
              description="Obtenga resultados instantáneos con nuestra infraestructura de cómputo de alto rendimiento optimizada para cargas de trabajo de IA y aplicaciones en tiempo real."
              color="emerald"
            />
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <FeatureCard
              icon={<Lock className="h-6 w-6" />}
              title="Seguridad de nivel empresarial"
              description="Descanse tranquilo sabiendo que sus datos están protegidos con protocolos de cifrado y seguridad avanzados que superan los estándares de la industria."
              color="purple"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
