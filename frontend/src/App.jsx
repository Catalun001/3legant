// libraries
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
//tailwind
import "./index.css";
//pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
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
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
