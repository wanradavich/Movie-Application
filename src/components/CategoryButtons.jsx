import { Link } from "react-router-dom";

function CategoryButtons() {
  return (
    <div id="category-btn">
      <Link to="/Popular" className="btn btn-light category">
        Popular
      </Link>
      <button className="btn btn-light category">Top Rated</button>
      <button className="btn btn-light category">Now Playing</button>
      <button className="btn btn-light category">Upcoming</button>
    </div>
  );
}

export default CategoryButtons;
