import { NavLink } from "react-router-dom";

function HomeCategories() {
  return (
    <div className="home-cat-btn">
      <ul>
        <li>
          <NavLink to="/" className="btn btn-light category">
            Popular
          </NavLink>
        </li>
        <li>
          <NavLink to="/toprated" className="btn btn-light category">
            Top Rated
          </NavLink>
        </li>
        <li>
          <NavLink to="/nowplaying" className="btn btn-light category">
            Now Playing
          </NavLink>
        </li>
        <li>
          <NavLink to="/upcoming" className="btn btn-light category">
            Upcoming
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default HomeCategories;
