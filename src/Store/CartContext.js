import React, { useReducer } from "react";

export const CartContext = React.createContext();

function cartReducer(state, action) {
  let updatedItems;
  let updatedBadgeAmount;
  let updatedTotalPrice;
  if (action.type === "ADD") {
    //Checks if the items exists, if it exists, update the amount instead
    const existingItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    if (existingItem >= 0) {
      state.items[existingItem].amount += action.item.amount;
      updatedItems = state.items;
    } else {
      updatedItems = [action.item, ...state.items];
    }
  } else if (action.type === "DEL") {
    const existingItem = state.items.findIndex((item) => item.id === action.id);

    if (state.items[existingItem].amount === 1) {
      updatedItems = state.items;
      updatedItems.splice(existingItem, 1);
    } else {
      state.items[existingItem].amount -= 1;
      updatedItems = state.items;
    }
  }

  updatedBadgeAmount = updatedItems
    .map((item) => item.amount)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  updatedTotalPrice = updatedItems
    .map((item) => item.amount * item.price)
    .reduce((prevValue, currValue) => prevValue + currValue, 0)
    .toFixed(2);
  //console.log(amount, updatedItems);
  return {
    items: updatedItems,
    badgeAmount: updatedBadgeAmount,
    totalPrice: updatedTotalPrice,
  };
}
export default function CartProvider(props) {
  const [cart, cartDispatch] = useReducer(cartReducer, {
    items: [],
    badgeAmount: 0,
    totalPrice: 0,
  });

  function addItem(item) {
    cartDispatch({ type: "ADD", item: item });
  }
  function delItem(id) {
    cartDispatch({ type: "DEL", id: id });
  }

  const cartValues = {
    items: cart.items,
    badgeAmount: cart.badgeAmount,
    totalPrice: cart.totalPrice,
    addItem: addItem,
    delItem: delItem,
  };

  return (
    <CartContext.Provider value={cartValues}>
      {props.children}
    </CartContext.Provider>
  );
}
