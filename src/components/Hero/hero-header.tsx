import { useState } from "react";
import AuthModal from "../auth/auth-modal";
import { Button } from "../ui/button";

export default function HeroHeader() {
  const [isAuthOpen, setAuthOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <div className="relative size-10 overflow-hidden rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 p-2 shadow-lg shadow-violet-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/80 to-indigo-600/80 opacity-80"></div>
            <div className="relative size-full rounded-md bg-white"></div>
          </div>
          <span className="bg-gradient-to-r from-violet-700 to-indigo-600 bg-clip-text text-2xl font-bold text-transparent">
            Altheia
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="group relative text-sm font-medium text-slate-700 transition-colors hover:text-violet-700"
          >
            Características
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-violet-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#how-it-works"
            className="group relative text-sm font-medium text-slate-700 transition-colors hover:text-violet-700"
          >
            Cómo funciona
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-violet-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#pricing"
            className="group relative text-sm font-medium text-slate-700 transition-colors hover:text-violet-700"
          >
            Precios
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-violet-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#testimonials"
            className="group relative text-sm font-medium text-slate-700 transition-colors hover:text-violet-700"
          >
            Testimonios
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-violet-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            size="sm"
            className="relative overflow-hidden bg-gradient-to-r from-violet-600 to-indigo-600 font-medium transition-all hover:shadow-lg hover:shadow-violet-500/20"
            onClick={() => setAuthOpen(true)}
          >
            <span className="relative z-10">Iniciar sesión</span>
            <span className="absolute inset-0 bg-gradient-to-r from-violet-700 to-indigo-700 opacity-0 transition-opacity hover:opacity-100"></span>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
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
              className="size-5"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
      <AuthModal isOpen={isAuthOpen} onClose={() => setAuthOpen(false)} />
    </header>
  );
}
