import React, { useState } from "react";

export default function App19() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [message, setMessage] = useState("");

  const isGameOver = wickets >= 10;

  const handleRun = () => {
    if (!isGameOver) {
      setRuns(runs + 1);
      setMessage("Well Done!");
    }
  };

  const handleWicket = () => {
    if (!isGameOver) {
      const newWickets = wickets + 1;
      setWickets(newWickets);

      if (newWickets >= 10) {
        setMessage("Game Over!");
      } else {
        setMessage("Better Luck Next Time!");
      }
    }
  };


  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial" }}>
      <h1>App19</h1>
      <h2>Assignment</h2>
      <h2 style={{ border: "2px solid black", padding: "10px", display: "inline-block" }}>
        Cricket Scoreboard
      </h2>
      <br /><br />

      <div style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
        {/* Score Area */}
        <div style={{ border: "2px solid black", padding: "20px", borderRadius: "20px" }}>
          <h2>{runs}</h2>
          <button onClick={handleRun} disabled={isGameOver}>Run</button>
          <h2>{wickets}</h2>
          <button onClick={handleWicket} disabled={isGameOver}>Wicket</button>
        </div>

        {/* Message Area */}
        <div style={{ border: "2px solid black", padding: "20px", borderRadius: "20px" }}>
          <h3>{message}</h3>
        </div>
      </div>

      <br />
      <p><strong>Wicket should go to max 10</strong></p>
      <p>If wicket is greater or equal to 10, then show Game Over!</p>
      <p>Run should not be incremented once Game is over!</p>
    </div>
    
  );
}

