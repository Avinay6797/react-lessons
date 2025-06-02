import React, { useState } from 'react';

function App13() {
  const [num, setNum] = useState(0);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>App13</h2>
      <h3>Assignment</h3>

      <div>
        <p><b>Addition</b><br />100 + {num} = {100 + Number(num)}</p>
        <p><b>Subtraction</b><br />100 - {num} = {100 - Number(num)}</p>
      </div>

      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        style={{ padding: '5px', margin: '10px' }}
      />

      <div>
        <p><b>Multiplication</b><br />100 × {num} = {100 * Number(num)}</p>
        <p><b>Division</b><br />100 ÷ {num || 1} = {(100 / (num || 1)).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default App13;
