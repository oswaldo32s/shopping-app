import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = [];
const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;
  switch (actionType) {
    case "ADD_TO_CART": {
      const { id } = actionPayload;
      const productIndex = state.findIndex((item) => item.id == id);
      if (productIndex >= 0) {
        const newState = structuredClone(state);
        newState[productIndex].quantity += 1;
        newState[productIndex].totalPrice += actionPayload.price;
        return newState;
      }

      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1,
          totalPrice: actionPayload.price,
        },
      ];
    }

    case "DELETE_FROM_CART": {
      const { id } = actionPayload;
      return state.filter((item) => item.id !== id);
    }

    case "REMOVE_ONE_ITEM": {
      const { id } = actionPayload;
      const index = state.findIndex((item) => item.id == id);
      const updatedCart = structuredClone(state);
      updatedCart[index].totalPrice - actionPayload.price;
      updatedCart[index].quantity -= 1;
      if (updatedCart[index].quantity == 0) {
        return state.filter((item) => item.id !== id);
      } else {
        return updatedCart;
      }
    }

    case "CLEAR_CART": {
      return initialState;
    }
  }
  return state;
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addCartItem = (product) =>
    dispatch({ type: "ADD_TO_CART", payload: product });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const removeOneItem = (product) =>
    dispatch({ type: "REMOVE_ONE_ITEM", payload: product });

  const deleteItem = (product) =>
    dispatch({ type: "DELETE_FROM_CART", payload: product });

  return (
    <CartContext.Provider
      value={{
        cart: state,
        clearCart,
        deleteItem,
        removeOneItem,
        addCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
