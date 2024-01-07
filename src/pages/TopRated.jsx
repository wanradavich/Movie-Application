import MovieCard from "../components/MovieCard";
import CategoryButtons from "../components/CategoryButtons";

function TopRated() {
  return (
    <>
      <CategoryButtons />
      <div className="category-container">
        <div className="category-container">
          <MovieCard />
        </div>
      </div>
    </>
  );
}

export default TopRated;
