import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import AddProductForm from "./components/AddProduct/AddProductForm";
import Cart from "./components/Cart/Cart";
import EditProductForm from "./components/EditProductForm/EditProductForm";
import HomePage from "./components/HomePage/HomePage";
import LoginForm from "./components/LoginForm/LoginForm";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductsList from "./components/ProductsList/ProductsList";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { authContext } from "./contexts/authContext";

const Routing = () => {
  const { isAdmin } = useContext(authContext);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsList />} />
      <Route path="/add-product" element={<AddProductForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route
        path="/add-product"
        element={isAdmin ? <AddProductForm /> : <Navigate replace to="*" />}
      />
      <Route path="/products" element={<ProductsList />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route
        path="/edit/:id"
        element={isAdmin ? <EditProductForm /> : <Navigate replace to="*" />}
      />
      <Route path="/cart" element={<Cart />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default Routing;
