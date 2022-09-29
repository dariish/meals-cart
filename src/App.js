import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import AvailableMeals from "./components/meals/AvailableMeals";
import CartProvider from "./Store/CartContext";
function App() {
  return (
    <CartProvider>
      <Header />
      <AvailableMeals />
    </CartProvider>
  );
}

export default App;
