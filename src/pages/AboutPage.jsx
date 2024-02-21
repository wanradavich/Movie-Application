import TMBDLogo from "../components/images/tmdb-logo.svg";
import CineSyncLogo from "../components/images/logo-movieapp.jpg";

function AboutPage() {
  return (
    <div id="about-main">
      <h2 id="about-title">About Us</h2>
      <img
        id="about-logo"
        src={ CineSyncLogo }
        alt="cinesync-logo"
      />
      <p className="about-desc">
        CineSync is an immersive movie application designed to elevate your
        cinematic experience. Discover a world of entertainment at your
        fingertips, where you can seamlessly explore a vast library of movies
        across genres. Whether you are a fan of timeless classics or eager to
        dive into the latest releases, CineSync provides a user-friendly
        interface for effortless navigation and discovery.
      </p>
      <div className="tmdb-reference">
        <p>
          <img
            id="tmdb-logo"
            src={ TMBDLogo }
            alt="TMDB-logo"
          />
          This product uses the TMDb API but is not endorsed or certified by
          TMDb.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
