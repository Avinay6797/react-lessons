import React, { useContext, useRef } from "react";
import { UserContext } from "./App21";

export default function App21a() {
  const { users, setUsers } = useContext(UserContext);
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

  const handleSubmit = () => {
    const newUser = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    setUsers([...users, newUser]);
    nameRef.current.value = "";
    emailRef.current.value = "";
    passRef.current.value = "";
    alert("User Registered");
  };

  return (
    <div>
      <h3>Register.jsx</h3>
      <input ref={nameRef} placeholder="Name" /><br />
      <input ref={emailRef} placeholder="Email" /><br />
      <input ref={passRef} placeholder="Password" /><br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
