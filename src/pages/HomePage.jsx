import CategoryButtons from "../components/CategoryButtons";
import MovieCard from "../components/MovieCard";

function HomePage() {
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

export default HomePage;
