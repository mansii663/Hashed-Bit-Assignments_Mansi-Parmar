import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import BookingForm from "./pages/BookingForm";
import BookingSuccess from "./pages/BookingSuccess";

function App() {
  return (
    <BrowserRouter>
      <div style={styles.netflixBg}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/book" element={<BookingForm />} />
          <Route path="/success" element={<BookingSuccess />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const styles = {
  netflixBg: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #141414 0%, #181818 50%, #141414 100%)",
    paddingBottom: "40px",
    color: "#ffffff"
  }
};

export default App;
