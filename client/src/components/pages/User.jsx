import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const User = () => {
  const loadUsers = useLoaderData();
  const [users, setUsers] = useState(loadUsers);

  const handleDelete = (_id) => {
    fetch(`http://localhost:3300/users/${_id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("User deleted");
          const remainguser = users.filter((user) => user._id !== _id);
          setUsers(remainguser);
        }
      });
  };

  return (
    <>
      <h1>User Management</h1>
      Number of user: {users?.length}
      <table>
        <thead>
          <tr>
            <td>SL</td>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{user?._id}</td>
                <td> {user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  <span
                    className="span"
                    style={{ display: "flex", gap: "10px" }}
                  >
                    <Link to={`/update/${user._id}`}>
                      <button>U</button>
                    </Link>
                    <button onClick={() => handleDelete(user?._id)}>X</button>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default User;
