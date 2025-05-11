import NavbarMinimal from "@/components/Dashboard/navbar";
import PatientNavbar from "@/components/Dashboard/patient/navbar";
import { AuthContext } from "@/context/AuthContext";
import type { ReactNode } from "react";
import { useContext } from "react";
import { Outlet } from "react-router";

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { user } = useContext(AuthContext) || {};
  const role = user?.role;
  return (
    <div className="flex min-h-screen">
      {role === "patient" ? <PatientNavbar /> : <NavbarMinimal />}
      <div className="flex-1 h-full">{children || <Outlet />}</div>
    </div>
  );
}
