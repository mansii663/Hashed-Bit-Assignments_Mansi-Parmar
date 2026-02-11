import movies from "../movies";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <h1>🎬 Movie Booking App</h1>

      <div style={styles.grid}>
        {movies.map((movie) => (
          <div
                key={movie.id}
                style={styles.card}
                onClick={() => navigate(`/movie/${movie.id}`)}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
            <img
              src={`${process.env.PUBLIC_URL}/images/${movie.img}`}
              alt={movie.name}
              style={styles.img}
            />
            <h3 style={{ marginTop: 10 }}>{movie.name}</h3>
            <p style={{ color: "#bbb" }}>⭐ {movie.rating} | {movie.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: 30,
    textAlign: "center",
    fontFamily: "Segoe UI, sans-serif",
    minHeight: "100vh"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 20,
    marginTop: 30
  },
  card: {
    background: "#1f1f1f",
    color: "#ffffff",
    borderRadius: 12,
    padding: 12,
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(0,0,0,0.6)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "transform 0.2s ease, box-shadow 0.2s ease"
  },
  img: {
    width: "100%",
    height: 260,
    objectFit: "contain",
    backgroundColor: "#000",
    borderRadius: 10,
    padding: 10
  }

};

export default Home;
