import { ArrowRight } from "lucide-react";
import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import HeroAnimation from "./hero-animation";
function HeroSection() {
  const navigate = useNavigate();

  const handleRegisterClinic = () => {
    navigate("/register-clinic");
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Potencia tu clínica con Altheia{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                EHR con IA integrada
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              EHR para tu clínica, con IA para mejorar la calidad de vida de tus
              pacientes y tu rendimiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-8 py-6 text-lg"
                onClick={handleRegisterClinic}
              >
                Únete a Altheia
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="mt-8 flex items-center"></div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <Suspense
                  fallback={
                    <div className="h-96 w-full bg-gray-100 animate-pulse"></div>
                  }
                >
                  <HeroAnimation />
                </Suspense>
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 right-1/2 w-[500px] h-[500px] bg-gradient-to-r from-violet-200/30 to-indigo-200/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
