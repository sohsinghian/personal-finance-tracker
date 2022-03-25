import React, { useState, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";

const PortfolioForm = (props) => {
  const [symbol, setSymbol] = useState("");
  const [numberOfShares, setNumberOfShares] = useState("");
  const [priceBought, setPriceBought] = useState("");

  const [validNumOfShares, setValidNumOfShares] = useState(false);
  const [validPriceBought, setValidPriceBought] = useState(false);

  const [error, setError] = useState(false);

  // form validation for numbers to be greater than 0
  useEffect(() => {
    setValidNumOfShares(numberOfShares > 0);
    setValidPriceBought(priceBought > 0);
  }, [numberOfShares, priceBought]);

  // error if number is not greater than 0
  useEffect(() => {
    setError(!validNumOfShares || !validPriceBought);
  }, [error]);

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

    if (validNumOfShares && validPriceBought) {
      props.setPortfolioInputs({
        symbol: symbol,
        numOfShares: numberOfShares,
        buyPrice: priceBought,
      });
    } else if (error) {
      alert("Please enter valid numbers greater than 0");
    }

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
