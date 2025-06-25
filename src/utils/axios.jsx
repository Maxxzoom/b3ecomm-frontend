import axios from "axios";

const API = axios.create({
  baseURL: "https://b3eccom-backend.onrender.com/api" /* Backend base URL */,
});
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
