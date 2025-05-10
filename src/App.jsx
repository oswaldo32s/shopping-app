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

  function clearCart() {
    setCartItems([]);
  }

  function deleteItem(event) {
    event.stopPropagation();
    const itemID = event.target.closest("article").id;
    const itemIndex = cartItems.findIndex((item) => item.id == itemID);

    const newCartItems = [...cartItems];
    newCartItems.splice(itemIndex, 1);
    setCartItems(newCartItems);
  }

  function removeOneItem(event) {
    event.stopPropagation();

    const itemID = event.target.closest("article").id;
    const product = products.find((product) => product.id == itemID);
    const itemIndex = cartItems.findIndex((item) => item.id == itemID);

    const updatedCartItems = [...cartItems];
    updatedCartItems[itemIndex] = {
      ...updatedCartItems[itemIndex],
      totalPrice: updatedCartItems[itemIndex].totalPrice - product.price,
      quantity: updatedCartItems[itemIndex].quantity - 1,
    };

    // Check if Item quantity > 0
    if (updatedCartItems[itemIndex].quantity == 0) {
      const newCartItems = [...cartItems];
      newCartItems.splice(itemIndex, 1);
      setCartItems(newCartItems);
    } else {
      setCartItems(updatedCartItems);
    }
  }

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
      setCartItems(newCartItems);
    }
  }

  return (
    <>
      <Header cart={cartItems} />
      <Outlet
        context={[
          {
            products,
            cartItems,
            addCartItem,
            deleteItem,
            removeOneItem,
            clearCart,
          },
        ]}
      />
    </>
  );
}

export default App;
