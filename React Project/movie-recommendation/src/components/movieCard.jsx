function MovieCard({ movie, onClick }) {
  function onFavouriteClick(e) {
    e.stopPropagation(); // Prevent modal from opening
    alert("clicked");
  }

  return (
    <div
      onClick={onClick}
      className="movie-card cursor-pointer hover:scale-105 transition-transform"
    >
      <div className="movie-poster relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <button
          className="favourite-btn absolute top-2 right-2 text-xl"
          onClick={onFavouriteClick}
        >
          ♡
        </button>
      </div>
      <div className="movie-info mt-2">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
