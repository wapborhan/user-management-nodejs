import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUser] = useState();

  const UserUrl = "http://localhost:3300/users";

  useEffect(() => {
    fetch(UserUrl)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch(UserUrl, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const newUser = [...users, data];
        setUser(newUser);

        form.reset();
      });
  };

  return (
    <>
      <h1>User Management</h1>
      Number of user: {users?.length}
      {users?.map((user, idx) => {
        return (
          <li key={idx}>
            {user?.name} - {user?.email}
          </li>
        );
      })}
      <br />
      <h2>Add User</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  );
}

export default App;
