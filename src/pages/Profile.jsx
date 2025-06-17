import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  console.log(user);

  const fetchProfile = async () => {
    try {
      const res = await API.get("/users/me");
      setUser(res.data);
    } catch (error) {
      navigate("/login", error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!user) return <p> Loading profile...</p>;

  return (
    <div className="container">
      <h2>Welcome, {user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default Profile;
