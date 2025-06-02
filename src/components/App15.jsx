import React, { useRef, useState } from "react";

export default function App15() {
  const nameRef = useRef();
  const num1Ref = useRef();
  const num2Ref = useRef();
  const colorRef = useRef();
  const [sum, setSum] = useState(null);
  const [textColor, setTextColor] = useState("black");

  const handleNameSubmit = () => {
    alert(nameRef.current.value);
    nameRef.current.style.color = "blue";
    nameRef.current.value = "";
    nameRef.current.focus();
  };

  const handleSumSubmit = () => {
    const n1 = parseInt(num1Ref.current.value);
    const n2 = parseInt(num2Ref.current.value);
    if (!isNaN(n1) && !isNaN(n2)) {
      setSum(n1 + n2);
    } else {
      setSum("Invalid input");
    }
  };

  const handleColorSubmit = () => {
    setTextColor(colorRef.current.value.toLowerCase());
  };

  return (
    <div>
      <h1>App15</h1>
      <h2>useRef hook - to create uncontrolled component</h2>

      {/* Name input */}
      <p>
        <input type="text" ref={nameRef} placeholder="Enter name" />
      </p>
      <button onClick={handleNameSubmit}>Submit</button>

      <hr />

      {/* Sum calculator */}
      <input type="text" ref={num1Ref} defaultValue="4" style={{ width: "40px", marginRight: "5px" }} />
      <input type="text" ref={num2Ref} defaultValue="5" style={{ width: "40px", marginRight: "5px" }} />
      <button onClick={handleSumSubmit}>Submit</button>
      <p>{sum !== null && <strong>{sum}</strong>}</p>

      <hr />

      {/* Color changer */}
      <input type="text" ref={colorRef} defaultValue="Blue" style={{ marginRight: "5px" }} />
      <button onClick={handleColorSubmit}>Submit</button>
      <p style={{ color: textColor, fontWeight: "bold" }}>Hello world</p>
    </div>
  );
}
