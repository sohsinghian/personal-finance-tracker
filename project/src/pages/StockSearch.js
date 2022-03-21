import React, { useState } from "react";
import ConsumingStockAPI from "../components/ConsumingStockAPI";
import Form from "../components/Form";

const StockSearch = (props) => {
  const [query, setQuery] = useState("");

  return (
    <>
      <h2>Stock Search</h2>
      <Form query={query} setQuery={setQuery} />
      {/* <ConsumingStockAPI
        query={query}
        stockInfo={props.stockInfo}
        setStockInfo={props.setStockInfo}
      /> */}
    </>
  );
};

export default StockSearch;
