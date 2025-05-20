import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CartProvider } from "./context/cart";
import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./routes/routes";
import "./index.css";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
