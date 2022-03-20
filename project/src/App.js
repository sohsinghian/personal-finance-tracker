import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ActiveStocks from "./pages/ActiveStocks";
import Home from "./pages/Home";
import StockSearch from "./pages/StockSearch";

function App() {
  return (
    <>
      <h1>Personal Finance Tracker</h1>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/active-stocks" element={<ActiveStocks />} />
        <Route path="/stock-search" element={<StockSearch />} />
      </Routes>
    </>
  );
}

export default App;
