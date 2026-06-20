import React, { createContext, useState } from "react";

// Create Context
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    username: "",
    role: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
    alert("Login Form Submitted Successfully");
  };

  return (
    <UserContext.Provider value={user}>
      <div>
        <h2>Day-39 Miniproject-1  User Login Context </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
          <br /><br />

          <input
            type="text"
            name="role"
            placeholder="Role"
            onChange={handleChange}
          />
          <br /><br />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <br /><br />

          <button type="submit">Login</button>
        </form>

        <hr />

        <h3>User Details (Context API)</h3>
        <p>Username: {user.username}</p>
        <p>Role: {user.role}</p>
        <p>Email: {user.email}</p>
      </div>
    </UserContext.Provider>
  );
}

export default App;