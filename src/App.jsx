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

  function addCartItem(event) {
    event.stopPropagation();
    // Get the Item
    const itemID = event.target.closest("article").id;
    const product = products.find((product) => product.id == itemID);
    const itemIndex = cartItems.findIndex((item) => item.id == itemID);
    // Check if Item exist
    if (itemIndex !== -1) {
      // Update item
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex] = {
        ...updatedCartItems[itemIndex],
        totalPrice: updatedCartItems[itemIndex].totalPrice + product.price,
        quantity: updatedCartItems[itemIndex].quantity + 1,
      };
      console.log(updatedCartItems);
      setCartItems(updatedCartItems);
    } else {
      // Add new Item
      const newCartItems = [
        ...cartItems,
        {
          id: product.id,
          title: product.title,
          image: product.image,
          unitPrice: product.price,
          totalPrice: product.price,
          quantity: 1,
        },
      ];
      console.log(newCartItems);
      setCartItems(newCartItems);
    }
  }

  return (
    <>
      <Header cart={cartItems} />
      <Outlet context={[{ products, cartItems, addCartItem }]} />
    </>
  );
}

export default App;
