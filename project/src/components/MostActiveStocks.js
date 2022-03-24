import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

// https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=85227d12425f57eca668c4fd1484e6be

const MostActiveStocks = () => {
  const url = `https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=85227d12425f57eca668c4fd1484e6be`;
  const [activeStocks, setActiveStocks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchActiveStocks(url);
  }, []);

  const fetchActiveStocks = async (url) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url);

      if (res.status !== 200) {
        throw new Error("Everything went wrong.");
      }

      const data = await res.json();

      console.log(data);

      setActiveStocks(data);
    } catch (err) {
      setError(console.log(err.message));
    }

    setIsLoading(false);
  };

  let content = "";
  let rowData = "";
  if (activeStocks) {
    rowData = activeStocks.map((element) => {
      return (
        <tr
          key={nanoid()}
          style={element.change > 0 ? { color: "limegreen" } : { color: "red" }}
        >
          <td>{element.symbol}</td>
          <td>{element.name}</td>
          <td>{element.price.toFixed(2)}</td>
          <td>{element.change.toFixed(2)}</td>
          <td
            style={
              element.changesPercentage > 0
                ? { color: "limegreen" }
                : { color: "red" }
            }
          >
            {element.changesPercentage.toFixed(2)}%
          </td>
        </tr>
      );
    });
    content = (
      <>
        <div className="active-stocks">
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
            <tbody>{rowData}</tbody>
          </table>
        </div>
      </>
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  //   localStorage.setItem("activeStocks", activeStocks);
  //   let active = localStorage.getItem("activeStocks");
  //   console.log(active);

  return (
    <>
      <section>{content}</section>
    </>
  );
};

export default MostActiveStocks;
