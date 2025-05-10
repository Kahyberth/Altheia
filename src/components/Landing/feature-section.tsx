import FeatureCard from "./feature-card";

function FeatureSection() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Características
          </h2>
          <p className="text-xl text-gray-600">
            Descubre cómo Altheia puede transformar tu flujo de trabajo con
            estas potentes capacidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="Sparkles"
            title="IA para mejorar la calidad de vida"
            description="Utiliza IA para mejorar la calidad de vida de tus pacientes y tu rendimiento."
          />
          <FeatureCard
            icon="Users"
            title="Colaboración sin fronteras"
            description="Trabaja juntos en tiempo real con tu equipo, sin importar dónde estén ubicados en el mundo."
          />
          <FeatureCard
            icon="Shield"
            title="Seguridad empresarial"
            description="Rest easy knowing your data is protected with bank-level encryption and security protocols."
          />
          <FeatureCard
            icon="BarChart"
            title="Análisis de datos"
            description="Track performance metrics and visualize data with customizable dashboards and reports."
          />
          <FeatureCard
            icon="Zap"
            title="Automation Workflows"
            description="Eliminate repetitive tasks with powerful automation tools that save time and reduce errors."
          />
          <FeatureCard
            icon="Globe"
            title="Global Scalability"
            description="Grow your operations seamlessly with a platform that scales with your business needs."
          />
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
