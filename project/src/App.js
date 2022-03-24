import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ActiveStocks from "./pages/ActiveStocks";
import Home from "./pages/Home";
import PortfolioPage from "./pages/PortfolioPage";
import StockSearch from "./pages/StockSearch";
import { TextField } from "@material-ui/core";

function App() {
  return (
    <>
      <h1>Personal Finance Tracker</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/active-stocks" element={<ActiveStocks />} />
        <Route path="/stock-search" element={<StockSearch />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </>
  );
}

export default App;
