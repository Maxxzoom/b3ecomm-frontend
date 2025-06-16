import React, { useState } from "react";
import API from "../utils/axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/users/forgot-password", {email});
      setMessage(res.data.msg);
    } catch (error) {
      setMessage(error.response?.data?.msg || "Registration failed");
    }
  };
  return (
    <div className="form-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>

      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default ForgotPassword;
