// libraries
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//tailwind
import "./index.css";
//pages
import Home from "./pages/Home";

import Shop from "./pages/Shop";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
