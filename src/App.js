import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Routing from "./Routing";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import ProductsContextProvider from "./contexts/productsContext";
import AuthContextProvider from "./contexts/authContext";
import CartContextProvider from "./contexts/cartContext";
const App = () => {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Header />
            <Routing />
          </BrowserRouter>
        </CartContextProvider>
      </ProductsContextProvider>
    </AuthContextProvider>
  );
};

export default App;
