import { NavLink } from "react-router-dom";
import "../styles/App.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`main-nav ${isScrolled ? "scrolled" : ""}`}>
      <NavLink to={"/"}>
        <img id="logo" src="../../public/images/logo-movieapp.jpg" alt="logo" />
      </NavLink>
      <ul id="nav-list">
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className="nav-link">
            My Favorites
          </NavLink>
        </li>
      </ul>
      <NavLink to={"/"}>
        <img
          id="avatar"
          src="../../public/images/movie-avatar.jpg"
          alt="logo"
        />
      </NavLink>
    </nav>
  );
};

export default Navbar;
