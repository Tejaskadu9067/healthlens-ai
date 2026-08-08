import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

api.interceptors.request.use((config) => {
  const auth = JSON.parse(
    localStorage.getItem("healthlens-auth")
  );

  console.log("Interceptor auth:", auth);

  if (auth?.token) {
    config.headers.Authorization = `Bearer ${auth.token}`;
    console.log("Authorization Header Added");
  } else {
    console.log("No token found");
  }

  return config;
});

export default api;