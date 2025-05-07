import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import routes from "./routes/routes";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
