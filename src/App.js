import Header from "./components/Layout/header";
import React from "react";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
import Cart from './components/Cart/Cart';
import CartContextProvider from "./store/CartContextProvider";


function App() {

  const [cartIsVisible, setCartIsVisible] = useState(false)

  const showCartHandler = () =>{
    setCartIsVisible(true)
  }

  const hideCartHandler = () =>{
    setCartIsVisible(false)
  }

  return (
    <CartContextProvider>
     {cartIsVisible && <Cart onHideCart={hideCartHandler}/> }
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartContextProvider>
  );
}

export default App;
