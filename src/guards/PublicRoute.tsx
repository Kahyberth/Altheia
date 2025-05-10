import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "@/context/AuthContext";
import { type ReactNode } from "react";

export default function PublicRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useContext(AuthContext);
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
}
