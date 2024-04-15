import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./components/GlobalContext.tsx";
import { AppRoute } from "./routes/App.route.tsx";

const router = createBrowserRouter([
  {
    element: <GlobalProvider />,
    children: [
      {
        path: "/",
        element: <AppRoute />,
      },
      {
        path: "/login",
        element: <AppRoute />,
      },
      {
        path: "/register",
        element: <AppRoute />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
