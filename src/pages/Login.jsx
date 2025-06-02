import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import API from "../utils/axios";
import "../styles/Register.css"
const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  console.log(form);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/users/login", form);
      localStorage.setItem("token", res.data.token);
      console.log(res.data.token);
      alert("Login Successful");
      navigate("/");
    } catch (error) {
      setMessage(error.response?.data?.msg || "Registration failed");
    }
  };
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        <span>
          don't have a account? <NavLink to="/register">Register</NavLink>
        </span>
      </form>

      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default Login;
