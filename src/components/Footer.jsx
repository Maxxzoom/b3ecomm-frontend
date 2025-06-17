import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h2>Shopzone</h2>
          <p>
            Your one stop destination for amazing products at unbeatable prices
          </p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              {" "}
              <a href="/">Home</a>
            </li>
            <li>
              {" "}
              <a href="/profile">Profile</a>
            </li>
            <li>
              {" "}
              <a href="/login">Login</a>
            </li>
            <li>
              {" "}
              <a href="/register">Register</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="icons">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ShopZone. All rights reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
