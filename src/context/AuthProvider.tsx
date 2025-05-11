import type { RegisterCredentials, UserData } from "@/context/AuthContext";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { AuthContext } from "@/context/AuthContext";
import {
  loginRequest,
  logoutRequest,
  verifyToken,
} from "@/service/authService";
import { Loader } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import apiClient from "../api/apiClient";

interface ErrorResponse {
  message: string;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<UserData | null>(null);

  const verifyUser = async () => {
    try {
      const res = await verifyToken();
      if (!res) {
        return;
      }
      setIsAuthenticated(true);
      console.log("res", res);
      setUser(res);
    } catch {
      console.log("No esta autenticado");
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const login = useCallback(
    async (credentials: { email: string; password: string }) => {
      try {
        await loginRequest(credentials);

        notifications.show({
          title: "Welcome back!",
          message: `Hello ${user?.name} 🌟`,
          color: "green",
          autoClose: 2000,
        });

        setTimeout(() => {
          window.location.reload();
        }, 1000);

        return { success: true };
      } catch (error: unknown) {
        console.error("Login error:", error);
        const errorMessage =
          error instanceof Error ? error.message : "Login failed";
        notifications.show({
          title: "Login failed",
          message: errorMessage,
          color: "red",
          autoClose: 2000,
        });
        return { success: false, error: errorMessage };
      }
    },
    []
  );

  const logout = useCallback(async () => {
    await logoutRequest();
    setIsAuthenticated(false);
    setUser(null);
  }, []);

  const register = useCallback(async (credentials: RegisterCredentials) => {
    try {
      setIsLoading(true);
      const response = await apiClient.post("/auth/register", credentials);

      if (response.status === 200) {
        return { success: true };
      } else {
        const errorData = response.data as ErrorResponse;
        throw new Error(errorData.message || "Error de registro");
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Registration failed";
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    verifyUser();
  }, []);

  const contextValue = useMemo(
    () => ({
      isLoading,
      logout,
      login,
      register,
      isAuthenticated,
      loading: isLoading,
      profileLoading: isLoading,
      user,
    }),
    [isLoading, logout, login, register, isAuthenticated, user]
  );

  if (isLoading) {
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

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
