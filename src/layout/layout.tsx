import Navbar from "@/components/Dashboard/navbar";
import { AuthContext } from "@/context/AuthContext";
import type { ReactNode } from "react";
import { useContext } from "react";
import { Outlet } from "react-router";

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { user } = useContext(AuthContext) || {};
  const role = user?.role as "patient" | "staff" | "receptionist";
  return (
    <div className="flex min-h-screen">
      <Navbar role={role} />
      <div className="flex-1 h-full">{children || <Outlet />}</div>
    </div>
  );
}
