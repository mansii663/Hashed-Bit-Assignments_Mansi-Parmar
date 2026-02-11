import { useParams, useNavigate } from "react-router-dom";
import movies from "../movies";

function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));
  const navigate = useNavigate();

  return (
    <div style={{ padding: 40, textAlign: "center"}}>
      <img
        src={`${process.env.PUBLIC_URL}/images/${movie.img}`}
        alt={movie.name}
        style={{ width: 300, borderRadius: 10 }}
      />
      <h2>{movie.name}</h2>
      <p>⭐ Rating: {movie.rating}</p>
      <p>🎭 Genre: {movie.genre}</p>

      <button
        style={btnStyle}
        onClick={() => navigate("/book", { state: movie })}
      >
        🎟️ Book Seat
      </button>
    </div>
  );
}

const btnStyle = {
  padding: "10px 20px",
  fontSize: 16,
  marginTop: 20,
  cursor: "pointer",
  borderRadius: 8
};

export default MovieDetails;
