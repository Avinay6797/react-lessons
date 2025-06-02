import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App14() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/users";
      const res = await axios(url);
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter users based on searchTerm
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>App14</h1>
      <h2>Search and Display User Info</h2>

      <p>
        <input
          type="text"
          placeholder="Type a name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </p>

      {/* Full details for matching users */}
      {searchTerm ? (
        filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
              <h3>{user.name}</h3>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Website:</strong> {user.website}</p>
              <p><strong>Company:</strong> {user.company?.name}</p>
              <p><strong>Address:</strong> 
                {user.address?.suite}, {user.address?.street}, 
                {user.address?.city} - {user.address?.zipcode}
              </p>
            </div>
          ))
        ) : (
          <p>No user found with that name.</p>
        )
      ) : null}

      {/* List of all names */}
      <h3>All User Names:</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
