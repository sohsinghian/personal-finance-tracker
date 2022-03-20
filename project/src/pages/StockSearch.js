import React, { useState } from "react";
import ConsumingStockAPI from "../components/ConsumingStockAPI";
import Form from "../components/Form";

const StockSearch = () => {
  const [query, setQuery] = useState("");

  return (
    <>
      <h1>Stock Search</h1>
      <Form query={query} setQuery={setQuery} />
      {/* <ConsumingStockAPI query={query} /> */}
    </>
  );
};

export default StockSearch;
