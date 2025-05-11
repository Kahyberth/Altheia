import { cn } from "@/lib/utils";
import {
  BarChart3,
  Calendar,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Calendar, label: "Solicitar cita", href: "appointments" },
  {
    icon: BarChart3,
    label: "Consultar medicamentos",
    href: "/patient-results",
  },
  { icon: User, label: "Perfil", href: "/patient-profile" },
  { icon: Settings, label: "Configuración", href: "/patient-settings" },
  { icon: LogOut, label: "Sair", href: "/logout" },
];

export default function PatientNavbar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="w-64 border-r bg-white h-screen sticky top-0 z-40 hidden md:block">
      <div className="p-6">
        <h2 className="text-2xl font-bold flex items-center">
          <span className="text-black">ALTHEIA</span>
        </h2>
      </div>
      <nav className="px-3">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                onClick={() => setActiveItem(item.label)}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-3 text-gray-700 hover:bg-gray-100 transition-colors",
                  activeItem === item.label && "bg-gray-100 text-gray-900"
                )}
              >
                <item.icon className="h-5 w-5 text-gray-600" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
