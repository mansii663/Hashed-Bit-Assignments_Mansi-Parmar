import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function BookingForm() {
  const navigate = useNavigate();
  const { state: movie } = useLocation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const submit = () => {
    if (!name || !email || !mobile) {
      alert("Please fill all details");
      return;
    }

    navigate("/success", {
      state: { name, email, mobile, movie }
    });
  };

  return (
    <div style={styles.container}>
      <h2>🎟️ Book Ticket</h2>
      <h3>{movie.name}</h3>

      <input placeholder="Name" onChange={e => setName(e.target.value)} style={styles.input} />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} style={styles.input} />
      <input placeholder="Mobile" onChange={e => setMobile(e.target.value)} style={styles.input} />

      <button onClick={submit} style={styles.button}>Submit</button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 400,
    margin: "80px auto",
    padding: 25,
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    borderRadius: 12
  },
  input: {
    width: "100%",
    padding: 10,
    margin: "10px 0"
  },
  button: {
    padding: "10px 20px",
    cursor: "pointer"
  }
};

export default BookingForm;
