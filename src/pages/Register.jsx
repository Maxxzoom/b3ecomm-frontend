import { useState } from "react";
import API from "../utils/axios";
import "../styles/Register.css"
import { NavLink } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  console.log(form);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/users/register", form);
      console.log(res);
      setMessage("User registered successfully");
    } catch (error) {
      setMessage(error.response?.data?.msg || "Registration failed");
    }
  };
  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          required
        />
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

        <button type="submit">Register</button>
         <span className="account_link">
          Already have an account? <NavLink to="/login">Login</NavLink>
        </span>
      </form>

      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default Register;
