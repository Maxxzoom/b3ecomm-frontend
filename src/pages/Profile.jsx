import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/axios";
const Profile = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

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

  return <div>{user}</div>;
};

export default Profile;
