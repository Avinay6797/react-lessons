import React, { useContext, useRef, useState } from "react";
import { UserContext } from "./App21";

export default function App21b() {
  const { users } = useContext(UserContext);
  const emailRef = useRef();
  const passRef = useRef();
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      setMessage(`Welcome ${user.name}`);
    } else {
      setMessage("Invalid credentials");
    }
  };

  return (
    <div>
      <h3>Login.jsx</h3>
      <input ref={emailRef} placeholder="Email" /><br />
      <input ref={passRef} placeholder="Password" /><br />
      <button onClick={handleLogin}>Submit</button>
      <p>{message}</p>
    </div>
  );
}
