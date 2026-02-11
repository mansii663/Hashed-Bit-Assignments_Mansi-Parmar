import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (type) => {
    const a = Number(num1);
    const b = Number(num2);

    if (type === "add") setResult(a + b);
    if (type === "sub") setResult(a - b);
    if (type === "mul") setResult(a * b);
    if (type === "div") {
      if (b === 0) {
        setResult("Cannot divide by 0");
      } else {
        setResult(a / b);
      }
    }
  };

  return (
    <div className="app">
      <div className="calculator">
        <h2>🧮 React Calculator</h2>

        <input
          type="number"
          placeholder="First Number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />

        <input
          type="number"
          placeholder="Second Number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />

        <div className="buttons">
          <button onClick={() => calculate("add")}>+</button>
          <button onClick={() => calculate("sub")}>−</button>
          <button onClick={() => calculate("mul")}>×</button>
          <button onClick={() => calculate("div")}>÷</button>
        </div>

        <div className="result">
          Result: <span>{result}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
