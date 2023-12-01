// libraries
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
//tailwind
import "./index.css";
//pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import ViewCart from "./pages/ViewCart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/cart" element={<ViewCart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/success" element={<Success />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
