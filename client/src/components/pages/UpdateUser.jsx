import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const loadUser = useLoaderData();
  const handeUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };

    fetch(`http://localhost:3300/users/${loadUser._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("user upadded successfully");
        }
      });
  };
  return (
    <div>
      UpdateUser
      <form onSubmit={handeUpdate}>
        <input type="text" name="name" defaultValue={loadUser?.name} />
        <br />
        <input type="email" name="email" defaultValue={loadUser?.email} />
        <br />
        <input type="submit" value="Update User" />
      </form>
    </div>
  );
};

export default UpdateUser;
