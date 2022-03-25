import React, { useState, useEffect } from "react";
import Button from "./Button";
import LoadingSpinner from "./LoadingSpinner";
import { nanoid } from "nanoid";

const Portfolio = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // only renders when the inputs are submitted successfully
    if (props.portfolioInputs) {
      const url = `https://financialmodelingprep.com/api/v3/quote/${props.portfolioInputs.symbol.toUpperCase()}?apikey=85227d12425f57eca668c4fd1484e6be`;
      fetchStockInfo(url);
    }
  }, [props.portfolioInputs]);

  const fetchStockInfo = async (url) => {
    setIsLoading(true);
    setError(null);

    try {
      // fetch stock data from API
      const res = await fetch(url);

      if (res.status !== 200) {
        throw new Error("Everything went wrong.");
      }

      const data = await res.json();

      // put the respectively data needed into variables first so can do the calculation
      let numOfShares = Number(props.portfolioInputs.numOfShares);
      let buyPrice = Number(props.portfolioInputs.buyPrice);
      let investment = Number(numOfShares * buyPrice);
      let currentPrice = Number(data[0].price.toFixed(2));
      let currentValue = Number(numOfShares * currentPrice);
      let profitAndLoss = Number(currentValue - investment);
      let roi = Number((profitAndLoss / investment) * 100);

      // create a unique id
      let id = nanoid();

      let newStock = {
        id: id,
        name: data[0].name,
        symbol: data[0].symbol,
        numOfShares: numOfShares,
        buyPrice: buyPrice.toFixed(2),
        investment: investment.toFixed(2),
        currentPrice: currentPrice.toFixed(2),
        currentValue: currentValue.toFixed(2),
        profitAndLoss: profitAndLoss.toFixed(2),
        roi: roi.toFixed(2),
      };

      props.handlePortfolio(newStock);
    } catch (err) {
      if (err.message) {
        setError("Stock not found! Please enter a valid stock symbol.");
      }
    }
    setIsLoading(false);
  };

  const handleDelete = (event) => {
    let update = [...props.portfolioData];
    for (let i = 0; i < props.portfolioData.length; i++) {
      if (props.portfolioData[i].id === event.target.parentNode.parentNode.id) {
        update.splice(i, 1);
      }
    }
    props.setPortfolioData(update);
  };

  return (
    <>
      {error && <p>{error}</p>}

      {props.portfolioData && (
        <div className="portfolio">
          <table>
            <thead>
              <tr>
                <th>Stock Name</th>
                <th>Symbol</th>
                <th>No. of Shares</th>
                <th>Buy Price</th>
                <th>Investment</th>
                <th>Current Price</th>
                <th>Current Value</th>
                <th>Profit/Loss</th>
                <th>ROI</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {props.portfolioData.map((element) => {
                return (
                  <tr key={nanoid()} id={element.id} className="hover">
                    <td className="name">{element.name}</td>
                    <td>{element.symbol}</td>
                    <td>{element.numOfShares}</td>
                    <td>
                      <span className="dollar">$</span>
                      <span className="data">{element.buyPrice}</span>
                    </td>
                    <td>
                      <span className="dollar">$</span>
                      <span className="data">{element.investment}</span>
                    </td>
                    <td>
                      <span className="dollar">$</span>
                      <span className="data">{element.currentPrice}</span>
                    </td>
                    <td>
                      <span className="dollar">$</span>
                      <span className="data">{element.currentValue}</span>
                    </td>
                    <td
                      style={
                        element.profitAndLoss > 0
                          ? { color: "limegreen" }
                          : { color: "red" }
                      }
                    >
                      <span className="dollar">$</span>
                      <span className="data">{element.profitAndLoss}</span>
                    </td>
                    <td
                      style={
                        element.roi > 0
                          ? { color: "limegreen" }
                          : { color: "red" }
                      }
                    >
                      <span className="data">{element.roi}%</span>
                    </td>
                    <td>
                      <Button text="Delete" onClick={handleDelete} />
                    </td>
                  </tr>
                );
              })}
              <tr className="hover">
                <td></td>
                <td></td>
                <td></td>
                <td className="data">Total Investment:</td>
                <td>
                  <span className="dollar">$</span>
                  <span className="data">{props.totals.totalInvestment}</span>
                </td>
                <td></td>
                <td className="data">Totals:</td>
                <td
                  style={
                    props.totals.totalProfitAndLoss > 0
                      ? { color: "limegreen" }
                      : { color: "red" }
                  }
                >
                  <span className="dollar">$</span>
                  <span className="data">
                    {props.totals.totalProfitAndLoss}
                  </span>
                </td>
                <td
                  style={
                    props.totals.averageROI > 0
                      ? { color: "limegreen" }
                      : { color: "red" }
                  }
                >
                  <span className="data">{props.totals.averageROI}%</span>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {isLoading && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
    </>
  );
};

export default Portfolio;
