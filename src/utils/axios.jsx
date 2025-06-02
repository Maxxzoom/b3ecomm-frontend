import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api" /* Backend base URL */,
});
// API= "http://localhost:5000/api/users/register"
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
