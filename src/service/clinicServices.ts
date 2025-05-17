import apiClient from "@/api/apiClient";

export const createClinic = async (clinic: any) => {
  try {
    await apiClient.post("/clinic/register", clinic);
    return {
      error: false,
      data: "Clinic created successfully",
    };
  } catch {
    return {
      error: true,
      data: "Clinic creation failed",
    };
  }
};

export const getEps = async (pageSize?: number, pageNumber?: number) => {
  try {
    if (pageSize === 0 || pageNumber === 0) {
      pageSize = 10;
      pageNumber = 1;
    }

    const response = await apiClient.get(
      `/clinic/get-eps?page=${pageNumber}&size=${pageSize}`
    );
    return {
      error: false,
      data: response.data,
    };
  } catch {
    return {
      error: true,
      data: "Failed to get eps",
    };
  }
};
