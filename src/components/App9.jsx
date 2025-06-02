import { useState } from "react";

export default function App9() {
  const [value, setValue] = useState(10); // Default value is 10

  const increase = () => {
    setValue(value + 1); // Increment the value
  };

  const decrease = () => {
    setValue(value - 1); // Decrement the value
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Counter</h1>
      <button onClick={decrease} style={{ marginRight: "10px" }}>
        -
      </button>
      <span style={{ fontSize: "20px", margin: "0 10px" }}>{value}</span>
      <button onClick={increase}>+</button>
    </div>
  );
}