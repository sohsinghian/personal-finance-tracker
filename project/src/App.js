import React, { useState } from "react";
import ConsumingStockAPI from "./components/ConsumingStockAPI";
import Form from "./components/Form";

function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <h1>Personal Finance Tracker</h1>
      <Form query={query} setQuery={setQuery} />
      {/* <ConsumingStockAPI query={query} /> */}
    </>
  );
}

export default App;
