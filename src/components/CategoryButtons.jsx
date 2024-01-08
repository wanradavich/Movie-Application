import { Link } from "react-router-dom";

function CategoryButtons() {
  return (
    <div id="category-btn">
      <Link to="/TopRated" className="btn btn-light category">
        Top Rated
      </Link>
      <Link to="/NowPlaying" className="btn btn-light category">
        Now Playing
      </Link>
      <button className="btn btn-light category">Upcoming</button>
    </div>
  );
}

export default CategoryButtons;
