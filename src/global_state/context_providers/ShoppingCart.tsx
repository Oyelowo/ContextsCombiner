import * as React from "react";

interface ShoppingCartProps {
  cart: Array<any>;
  item: {id: number, name: string, user: string} | {}  
}

const initialState = {cart: [], item:{} }

const ShoppingContext = React.createContext(initialState)

const ShoppingCart = () => {
  const [item, setItem] = React.useState({id: 1, name: "Rice", user: "lowo"});
  const [cart, setCart] = React.useState([]);
  
  const globalState = {
    cart: cart,
       item: item
  }
  return (

    <ShoppingContext.Provider value={globalState}>

    </ShoppingContext.Provider>
  );
};

export default ShoppingCart;
