import React, { useState, useEffect } from "react";
import Button from "./Button";
import LoadingSpinner from "./LoadingSpinner";

// API key: 85227d12425f57eca668c4fd1484e6be

const StockInfo = (props) => {
  const url = `https://financialmodelingprep.com/api/v3/quote/${props.query.toUpperCase()}?apikey=1b69ae383498bc758a5ed7838b33da15`;
  const [stockInfo, setStockInfo] = useState();
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

      // console.log(data);

      setStockInfo({
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

  return (
    <>
      <section>
        {stockInfo && (
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
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{stockInfo.symbol}</td>
                    <td>{stockInfo.name}</td>
                    <td>{stockInfo.price}</td>
                    <td
                      style={
                        stockInfo.change > 0
                          ? { color: "limegreen" }
                          : { color: "red" }
                      }
                    >
                      {stockInfo.change}
                    </td>
                    <td
                      style={
                        stockInfo.percentage > 0
                          ? { color: "limegreen" }
                          : { color: "red" }
                      }
                    >
                      {stockInfo.percentage}%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
        {isLoading && (
          <div className="centered">
            <LoadingSpinner />
          </div>
        )}
        {error && <p>{error}</p>}
      </section>
    </>
  );
};

export default StockInfo;
