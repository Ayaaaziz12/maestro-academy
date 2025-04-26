import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000", // adapte selon ton backend
  withCredentials: true,
});

// Appel CSRF + login
export const login = async (credentials) => {
  await API.get("/sanctum/csrf-cookie"); // Obligatoire avant le login
  return API.post("/api/login", credentials);
};
