import apiClient from "@/api/apiClient";

export const verifyToken = async () => {
  const { data } = await apiClient.get("/auth/verify-token");
  return data.userInfo;
};

export const logoutRequest = async () => {
  await apiClient.post("/auth/logout");
};

export const loginRequest = async (credentials: {
  email: string;
  password: string;
}) => {
  const { data } = await apiClient.post("/auth/login", credentials);
  return data;
};

export const registerRequest = async (credentials: any) => {
  const { data } = await apiClient.post("/patient/register", credentials);
  return data;
};

export const fetchProfile = async (user_id: string) => {
  try {
    const response = await apiClient.get(`/auth/profile/${user_id}`);
    return {
      error: false,
      data: response.data,
    };
  } catch {
    return {
      error: true,
      data: null,
    };
  }
};
