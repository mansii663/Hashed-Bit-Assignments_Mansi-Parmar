import { useLocation, useNavigate } from "react-router-dom";

function BookingSuccess() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const bookingId = Math.floor(100000 + Math.random() * 900000);

  return (
    <div style={styles.container}>
      <h1>✅ Booking Confirmed</h1>
      <p><strong>Booking ID:</strong> {bookingId}</p>
      <p><strong>Movie:</strong> {state.movie.name}</p>
      <p><strong>Name:</strong> {state.name}</p>
      <p><strong>Email:</strong> {state.email}</p>
      <p><strong>Mobile:</strong> {state.mobile}</p>

      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 450,
    margin: "80px auto",
    padding: 30,
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    borderRadius: 12
  }
};

export default BookingSuccess;
