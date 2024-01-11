import { NavLink } from "react-router-dom";

function HomeCategories() {
  return (
    <div className="home-cat-btn">
      <ul>
        <li>
          <NavLink to="/toprated">Top Rated</NavLink>
        </li>
        <li>
          <NavLink to="/nowplaying">Now Playing</NavLink>
        </li>
        <li>
          <NavLink to="/upcoming">Upcoming</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default HomeCategories;
