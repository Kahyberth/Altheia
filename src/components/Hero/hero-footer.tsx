import { Link } from "react-router-dom";

export default function HeroFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 p-1.5">
                <div className="size-full rounded-md bg-white"></div>
              </div>
              <span className="text-xl font-bold text-slate-900">Altheia</span>
            </div>
            <p className="text-sm text-slate-500">
              Transforming the future with intelligent AI solutions.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider text-slate-900">
              Product
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-sm text-slate-500 hover:text-slate-900"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-slate-500 hover:text-slate-900"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-slate-500 hover:text-slate-900"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-slate-500 hover:text-slate-900"
                >
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider text-slate-900">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-sm text-slate-500 hover:text-slate-900"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-slate-500 hover:text-slate-900"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-slate-500 hover:text-slate-900"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-slate-500 hover:text-slate-900"
                >
                  Contact
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
                  className="text-sm text-slate-500 hover:text-slate-900"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-slate-500 hover:text-slate-900"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-slate-500 hover:text-slate-900"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-8">
          <p className="text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Altheia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
