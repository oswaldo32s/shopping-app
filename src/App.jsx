import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [shoppingItems, setShoppingItems] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    const fakeStoreURL = "https://fakestoreapi.com/products";
    fetch(fakeStoreURL)
      .then((response) => response.json())
      .then((data) => {
        setShoppingItems(data);
      });
  }, []);

  return (
    <>
      <Header />
      <Outlet context={[shoppingItems, shoppingCart]} />
    </>
  );
}

export default App;
