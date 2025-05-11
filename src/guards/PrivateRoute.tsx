import { AuthContext } from "@/context/AuthContext";
import { Loader } from "@mantine/core";
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectPath?: string;
  role?: string;
}

export default function ProtectedRoute({
  children,
  role,
  redirectPath = "/",
}: ProtectedRouteProps) {
  const { isAuthenticated, loading, user } = useContext(AuthContext);
  const location = useLocation();

  console.log("user", user);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Loader color="grape" type="dots" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace state={{ from: location }} />;
  }

  if (role && user?.role !== role) {
    return <Navigate to={redirectPath} replace state={{ from: location }} />;
  }

  return <>{children}</>;
}
