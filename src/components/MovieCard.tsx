import "../css/MovieCard.css";

function MovieCard({
  movie,
}: {
  movie: {
    id: number;
    title: string;
    img: string;
    releaseDate: number;
  };
}) {
  function onFavoriteClick() {
    alert("Hey you have clicked this button");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.img} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.releaseDate}</p>
      </div>
    </div>
  );
}

export default MovieCard;
