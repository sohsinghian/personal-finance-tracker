import React, { useState } from "react";
import StockInfo from "../components/StockInfo";
import Form from "../components/Form";

const StockSearch = (props) => {
  const [query, setQuery] = useState("");

  return (
    <>
      <h2>Stock Search</h2>
      <Form query={query} setQuery={setQuery} />
      <StockInfo query={query} />
    </>
  );
};

export default StockSearch;
