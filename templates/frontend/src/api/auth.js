import api from "./axios";

export const login = async (email, password) => {
  const res = await api.post("/auth/login", { email, password });
  localStorage.setItem("token", res.data);
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};
