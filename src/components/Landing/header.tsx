import { Link } from "react-router-dom";
import LoginButton from "../auth/login-button";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="relative h-8 w-8 mr-2">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg"></div>
                <div className="absolute inset-0.5 bg-white rounded-lg flex items-center justify-center">
                  <div className="h-5 w-5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"></div>
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Altheia
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              Características
            </Link>
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              Cómo funciona
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LoginButton />
          </div>
          {
            //TODO: Add mobile menu
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
