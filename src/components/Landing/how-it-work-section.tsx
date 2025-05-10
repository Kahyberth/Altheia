
function HowItWorkSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cómo funciona Altheia
          </h2>
          <p className="text-xl text-gray-600">
            Un proceso simple y intuitivo diseñado para mejorar tu productividad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection lines (visible on md screens and up) */}
          <div className="hidden md:block absolute top-1/3 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-violet-600 to-indigo-600"></div>
          <div className="hidden md:block absolute top-1/3 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-indigo-600 to-violet-600"></div>

          {/* Steps */}
          {[
            {
              number: 1,
              title: "Conecta tus datos",
              description:
                "Integra fácilmente con tus herramientas existentes y importa tus datos con solo unos clics.",
            },
            {
              number: 2,
              title: "Analiza y optimiza",
              description:
                "Nuestra IA analiza tus flujos de trabajo y sugiere optimizaciones para mejorar la eficiencia.",
            },
            {
              number: 3,
              title: "Transforma resultados",
              description:
                "Implementa cambios y observa cómo la productividad aumenta y los resultados mejoran.",
            },
          ].map((step) => (
            <div key={step.number} className="relative">
              <div className="bg-white rounded-xl shadow-lg p-8 h-full relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorkSection;
