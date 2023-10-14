import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Root from "./components/layout/Root.jsx";
import User from "./components/pages/User.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UpdateUser from "./components/pages/UpdateUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/user",
        element: <User />,
        loader: () => fetch("http://localhost:3300/users"),
      },
      {
        path: "/update/:id",
        element: <UpdateUser />,
        loader: ({ params }) =>
          fetch(`http://localhost:3300/users/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
