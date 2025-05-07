import Header from "./components/Header/Header";
import { Outlet } from "react-router";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fakeStoreURL = "https://fakestoreapi.com/products";
    fetch(fakeStoreURL)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <>
      <Header />
      <Outlet context={[products, cartItems]} />
    </>
  );
}

export default App;
