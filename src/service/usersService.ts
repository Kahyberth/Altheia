import apiClient from "@/api/apiClient";
import type { Doctor, Patient } from "@/interfaces/userSchema";

export const createPatient = async (patient: Patient) => {
  const response = await apiClient.post("/patient/register", patient);
  return response.data;
};

export const createDoctor = async (doctor: Doctor) => {
  const response = await apiClient.post("/physician/register", doctor);
  return response.data;
};
