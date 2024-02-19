import { Link } from "react-router-dom";

const BigMovieBanner = ({ src, alt, desc, movieId }) => {
  // Function to limit the description to 25 words
  const limitDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 25) {
      return words.slice(0, 25).join(" ") + "...";
    }
    return description;
  };

  const limitedDesc = limitDescription(desc);
  return (
    <>
      <div id="banner-card">
        <div className="big-movie-picture">
          <img src={src} alt={alt} />
        </div>
        <div className="banner-desc">
          <h2>{alt}</h2>
          <div className="vote-average-container">
            <div className="number-icon">#1</div>
            <div className="vote-average-title">Vote Avergage</div>
          </div>

          <p>{limitedDesc}</p>
          <div className="banner-button">
            {/* Link to movie details page */}
            <Link to={`/movie/${movieId}`}>
              <button className="banner-play-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                </svg>
                <span id="play">Play</span>
              </button>
            </Link>
            <Link to={`/movie/${movieId}`}>
              <button className="banner-info-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
                <span id="info">More Info</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BigMovieBanner;
