import React, { useState, useEffect } from "react";

// API key: 85227d12425f57eca668c4fd1484e6be

const ConsumingStockAPI = (props) => {
  const url = `https://financialmodelingprep.com/api/v3/quote/${props.query.toUpperCase()}?apikey=85227d12425f57eca668c4fd1484e6be`;
  const [stockInfo, setStockInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStockInfo(url);
  }, [props.query]);

  const fetchStockInfo = async (url) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url);

      if (res.status !== 200) {
        throw new Error("Everything went wrong.");
      }

      const data = await res.json();

      console.log(data);

      setStockInfo({
        name: data[0].name,
        symbol: data[0].symbol,
        price: data[0].price.toFixed(2),
        change: data[0].change.toFixed(2),
        percentage: data[0].changesPercentage.toFixed(2),
      });
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  let content = "";
  if (stockInfo) {
    content = (
      <>
        <p>Name: {stockInfo.name}</p>
        <p>Symbol: {stockInfo.symbol}</p>
        <p>Price: {stockInfo.price}</p>
        <p>Change: {stockInfo.change}</p>
        <p>Percentage Change: {stockInfo.percentage}%</p>
      </>
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading......</p>;
  }

  return (
    <>
      <section>{content}</section>
    </>
  );
};

export default ConsumingStockAPI;
