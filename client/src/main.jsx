import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Root from "./components/layout/Root.jsx";
import User from "./components/pages/User.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
