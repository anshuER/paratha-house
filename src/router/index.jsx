import React from "react";
import { Route, Routes } from "react-router-dom";
import Checkout from "../pages/Checkout";
import HomePage from "../pages/home";

const RouterList = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default RouterList;
