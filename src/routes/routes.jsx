import App from "../App";
import Home from "../Page/Home/Home";
import Products from "../Page/Products/Products";

const routes = [
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "products",
        Component: Products,
      },
    ],
  },
];

export default routes;
