import { createContext } from "react";

export interface RegisterCredentials {
  email: string;
  password: string;
  name: string;
  role: string;
  eps: string;
  date_of_birth: string;
  gender: string;
}

export interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  login: (credentials: {
    email: string;
    password: string;
  }) => Promise<{ success: boolean; error?: string | null }>;
  logout: () => Promise<void>;
  register: (
    credentials: RegisterCredentials
  ) => Promise<{ success: boolean; error?: string | null }>;
  loading: boolean;
  profileLoading: boolean;
  user: UserData | null;
}

export const AuthContext = createContext<AuthContextType>({
  loading: true,
  logout: async () => Promise.resolve(),
  login: async () => ({ success: false }),
  register: async () => ({ success: false }),
  isAuthenticated: false,
  profileLoading: true,
  user: null,
});
