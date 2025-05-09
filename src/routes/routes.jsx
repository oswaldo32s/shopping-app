import { Component } from "react";
import App from "../App";
import Home from "../Page/Home/Home";
import NotFound from "../Page/NotFound/NotFound";
import Products from "../Page/Products/Products";
import Cart from "../Page/Cart/Cart";

const routes = [
  {
    path: "/",
    Component: App,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "products",
        Component: Products,
      },
      {
        path: "cart",
        Component: Cart,
      },
    ],
  },
];

export default routes;
