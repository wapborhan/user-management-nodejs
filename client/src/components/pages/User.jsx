import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const User = () => {
  const loadUsers = useLoaderData();
  const [users, setUsers] = useState(loadUsers);

  const handleDelete = (_id) => {
    fetch(`http://localhost:3300/users/${_id}`, {
      method: "DELETE",
      // headers: { "Content-type": "application/json" },
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
      {" "}
      <h1>User Management</h1>
      Number of user: {users?.length}
      <ul className="">
        {users?.map((user, idx) => {
          return (
            <li className="" style={{ marginBottom: "10px" }} key={idx}>
              {user?.name} - {user?.email}{" "}
              <button onClick={() => handleDelete(user?._id)}>x</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default User;
