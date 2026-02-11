import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    const updatedTodos = [...todos, task.trim()].sort((a, b) =>
      a.localeCompare(b)
    );

    setTodos(updatedTodos);
    setTask("");
  };

  const deleteTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <h2>📝 React To Do App</h2>

        <div style={styles.inputBox}>
          <input
            type="text"
            placeholder="Enter a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={styles.input}
          />
          <button onClick={addTask} style={styles.addBtn}>
            Add
          </button>
        </div>

        <ul style={styles.list}>
          {todos.map((item, index) => (
            <li key={index} style={styles.listItem}>
              <span>{item}</span>
              <button
                onClick={() => deleteTask(index)}
                style={styles.deleteBtn}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {todos.length === 0 && (
          <p style={styles.emptyText}>No tasks added yet</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    backgroundColor: "#f2f4f8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif"
  },
  container: {
    width: "360px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
  },
  inputBox: {
    display: "flex",
    marginBottom: "15px"
  },
  input: {
    flex: 1,
    padding: "8px",
    fontSize: "14px"
  },
  addBtn: {
    marginLeft: "8px",
    padding: "8px 12px",
    cursor: "pointer"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px",
    borderBottom: "1px solid #ddd"
  },
  deleteBtn: {
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    padding: "4px 8px",
    cursor: "pointer"
  },
  emptyText: {
    textAlign: "center",
    color: "#777",
    marginTop: "10px"
  }
};

export default App;