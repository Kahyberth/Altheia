import { Link } from "react-router-dom";

export default function HeroFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative size-10 overflow-hidden rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 p-2 shadow-lg shadow-violet-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/80 to-indigo-600/80 opacity-80"></div>
                <div className="relative size-full rounded-md bg-white"></div>
              </div>
              <span className="bg-gradient-to-r from-violet-700 to-indigo-600 bg-clip-text text-2xl font-bold text-transparent">
                Altheia
              </span>
            </div>
            <p className="text-sm text-slate-500">
              Transformando el futuro con soluciones de IA inteligentes que
              impulsan a las empresas a lograr más.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider text-slate-900">
              Productos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="group text-sm text-slate-500 transition-colors hover:text-violet-700"
                >
                  <span className="inline-flex items-center">
                    Características
                    <svg
                      className="ml-1 h-3 w-0 transition-all duration-300 group-hover:w-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="group text-sm text-slate-500 transition-colors hover:text-violet-700"
                >
                  <span className="inline-flex items-center">
                    Precios
                    <svg
                      className="ml-1 h-3 w-0 transition-all duration-300 group-hover:w-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="group text-sm text-slate-500 transition-colors hover:text-violet-700"
                >
                  <span className="inline-flex items-center">
                    Integraciones
                    <svg
                      className="ml-1 h-3 w-0 transition-all duration-300 group-hover:w-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="group text-sm text-slate-500 transition-colors hover:text-violet-700"
                >
                  <span className="inline-flex items-center">
                    Ruta de desarrollo
                    <svg
                      className="ml-1 h-3 w-0 transition-all duration-300 group-hover:w-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider text-slate-900">
              Empresa
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="group text-sm text-slate-500 transition-colors hover:text-violet-700"
                >
                  <span className="inline-flex items-center">
                    Acerca de
                    <svg
                      className="ml-1 h-3 w-0 transition-all duration-300 group-hover:w-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="group text-sm text-slate-500 transition-colors hover:text-violet-700"
                >
                  <span className="inline-flex items-center">
                    Blog
                    <svg
                      className="ml-1 h-3 w-0 transition-all duration-300 group-hover:w-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="group text-sm text-slate-500 transition-colors hover:text-violet-700"
                >
                  <span className="inline-flex items-center">
                    Carrera
                    <svg
                      className="ml-1 h-3 w-0 transition-all duration-300 group-hover:w-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="group text-sm text-slate-500 transition-colors hover:text-violet-700"
                >
                  <span className="inline-flex items-center">
                    Contact
                    <svg
                      className="ml-1 h-3 w-0 transition-all duration-300 group-hover:w-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider text-slate-900">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="group text-sm text-slate-500 transition-colors hover:text-violet-700"
                >
                  <span className="inline-flex items-center">
                    Política de privacidad
                    <svg
                      className="ml-1 h-3 w-0 transition-all duration-300 group-hover:w-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="group text-sm text-slate-500 transition-colors hover:text-violet-700"
                >
                  <span className="inline-flex items-center">
                    Términos de servicio
                    <svg
                      className="ml-1 h-3 w-0 transition-all duration-300 group-hover:w-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="group text-sm text-slate-500 transition-colors hover:text-violet-700"
                >
                  <span className="inline-flex items-center">
                    Política de cookies
                    <svg
                      className="ml-1 h-3 w-0 transition-all duration-300 group-hover:w-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-xs text-slate-500">
              © {new Date().getFullYear()} Altheia. Todos los derechos
              reservados.
            </p>
            <div className="flex space-x-4">
              {["twitter", "facebook", "instagram", "github", "linkedin"].map(
                (social) => (
                  <Link
                    key={social}
                    to="#"
                    className="text-slate-400 transition-colors hover:text-violet-600"
                  >
                    <span className="sr-only">{social}</span>
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
                      className="h-5 w-5"
                    >
                      <path d="M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0"></path>
                    </svg>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
