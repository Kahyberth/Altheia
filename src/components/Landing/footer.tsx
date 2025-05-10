import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <div className="relative h-8 w-8 mr-2">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-lg"></div>
                <div className="absolute inset-0.5 bg-gray-900 rounded-lg flex items-center justify-center">
                  <div className="h-5 w-5 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-md"></div>
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Altheia
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Altheia: La solución EHR que cuida de tus pacientes y de tu tiempo
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Productos</h3>
            <ul className="space-y-3">
              {["Características", "Integraciones"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-3">
              {[
                "Documentación",
                "Guías",
                "Referencia de API",
                "Comunidad",
                "Blog",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              {[
                "Acerca de",
                "Carreras",
                "Contacto",
                "Privacidad",
                "Términos",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Altheia. Todos los derechos
            reservados.
          </p>
          <div className="flex justify-center md:justify-end space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Política de privacidad
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Términos de servicio
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Política de cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
