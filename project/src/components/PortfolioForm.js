import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const PortfolioForm = (props) => {
  const [symbol, setSymbol] = useState("");
  const [numberOfShares, setNumberOfShares] = useState("");
  const [priceBought, setPriceBought] = useState("");

  const handleSymbolChange = (input) => {
    setSymbol(input);
  };

  const handleNumberOfSharesChange = (input) => {
    setNumberOfShares(input);
  };

  const handlePriceBoughtChange = (input) => {
    setPriceBought(input);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setPortfolioInfo({
      symbol: symbol,
      numOfShares: numberOfShares,
      buyPrice: priceBought,
    });

    setSymbol("");
    setNumberOfShares("");
    setPriceBought("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          name="input"
          value={symbol}
          type="text"
          placeholder="Enter stock symbol..."
          onChange={handleSymbolChange}
        />
        <Input
          name="shares"
          value={numberOfShares}
          type="number"
          placeholder="Enter no. of shares..."
          onChange={handleNumberOfSharesChange}
        />
        <Input
          name="price"
          value={priceBought}
          type="number"
          placeholder="Enter price bought..."
          onChange={handlePriceBoughtChange}
        />
        <Button type="submit" text="Add to Portfolio" />
      </form>
    </>
  );
};

export default PortfolioForm;
