import { useEffect, useState } from "react";

function App() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <h2>🏏 IPL 2022 Points Table</h2>

      {loading ? (
        <p>Loading data...</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px"
          }}
          border="1"
          cellPadding="10"
        >
          <thead style={{ backgroundColor: "#1e90ff", color: "white" }}>
            <tr>
              <th>Team</th>
              <th>Matches</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Points</th>
              <th>NRR</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={index}>
                <td>{team.Team}</td>
                <td>{team.Matches}</td>
                <td>{team.Won}</td>
                <td>{team.Lost}</td>
                <td>{team.Points}</td>
                <td>{team.NRR}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
