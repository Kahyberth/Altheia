import AuthModal from "@/components/auth/auth-modal";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function HeroHeader() {
  const [isAuthOpen, setAuthOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="size-14 rounded-lg bg-gradient-to-br p-1.5">
            <img src="/img/logo.png" alt="Altheia" className="size-full" />
          </div>
          <span className="text-xl font-bold text-slate-900">Altheia</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700 hover:text-slate-900">
          <Link
            to="#features"
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            Características
          </Link>
          <Link
            to="#how-it-works"
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            Cómo funciona
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            size="sm"
            className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700"
            onClick={() => setAuthOpen(true)}
          >
            Iniciar sesión
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
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setAuthOpen(false)}
        defaultTab="login"
      />
    </header>
  );
}
