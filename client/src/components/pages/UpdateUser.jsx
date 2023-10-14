import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const user = useLoaderData();
  console.log(user.name);

  const handeUpdate = (user) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
  };
  return (
    <div>
      UpdateUser
      <form onSubmit={handeUpdate}>
        <input type="text" name="name" defaultValue={user?.name} />
        <br />
        <input type="email" name="name" defaultValue={user?.email} />
        <br />
        <input type="submit" value="Update User" />
      </form>
    </div>
  );
};

export default UpdateUser;
