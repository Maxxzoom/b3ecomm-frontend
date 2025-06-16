import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
        <nav>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <button onClick={handleLogout}>Logout</button>
        </nav>
    </>
  );
};

export default Navbar;
