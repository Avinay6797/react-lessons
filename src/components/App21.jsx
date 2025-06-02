import React, { useState, createContext } from "react";
import App21a from "./App21a";
import App21b from "./App21b";

// Create Context
export const UserContext = createContext();

export default function App21() {
  const [users, setUsers] = useState([]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      <h1>App21</h1>
      <p>useContext hook example</p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <App21a />
        <App21b />
      </div>
    </UserContext.Provider>
  );
}
