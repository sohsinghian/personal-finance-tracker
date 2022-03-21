import React, { useState, useEffect } from "react";
import Button from "./Button";

// API key: 85227d12425f57eca668c4fd1484e6be

const ConsumingStockAPI = (props) => {
  const url = `https://financialmodelingprep.com/api/v3/quote/${props.query.toUpperCase()}?apikey=85227d12425f57eca668c4fd1484e6be`;
  //   const [stockInfo, setStockInfo] = useState([]);
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

      props.setStockInfo({
        symbol: data[0].symbol,
        name: data[0].name,
        price: data[0].price.toFixed(2),
        change: data[0].change.toFixed(2),
        percentage: data[0].changesPercentage.toFixed(2),
      });
    } catch (err) {
      setError(console.log(err.message));
    }

    setIsLoading(false);
  };

  let content = "";
  if (props.stockInfo) {
    content = (
      <>
        <div className="stock-info">
          <table>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Name</th>
                <th>Price</th>
                <th>Change</th>
                <th>Percentage Change</th>
                {/* <th></th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.stockInfo.symbol}</td>
                <td>{props.stockInfo.name}</td>
                <td>{props.stockInfo.price}</td>
                <td>{props.stockInfo.change}</td>
                <td>{props.stockInfo.percentage}%</td>
                <td>
                  {/* <Button buttonText="Add to Portfolio" /> */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
