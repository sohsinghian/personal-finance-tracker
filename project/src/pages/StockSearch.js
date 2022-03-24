import React, { useState } from "react";
import StockInfo from "../components/StockInfo";
import SearchForm from "../components/SearchForm";

const StockSearch = (props) => {
  const [query, setQuery] = useState("");

  return (
    <>
      <h2>Stock Search</h2>
      <SearchForm query={query} setQuery={setQuery} />
      <br />
      <StockInfo query={query} />
    </>
  );
};

export default StockSearch;
