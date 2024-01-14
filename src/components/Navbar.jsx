import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <NavLink to={"/"}>
        <img id="logo" src="../../public/images/logo-movieapp.jpg" alt="logo" />
      </NavLink>
      <ul id="nav-list">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/myfavorites">My Favorites</NavLink>
        </li>
        <li>
          <NavLink to="/watchlist">My Watch List</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
