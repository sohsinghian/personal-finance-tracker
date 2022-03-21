import React from "react";

const Portfolio = (props) => {
  const handlePortfolio = () => {};

  const stockName = "Alphabet Inc.";
  const symbol = "GOOGL";
  const numOfShares = 8;
  const buyPrice = 2883;
  const investment = numOfShares * buyPrice;
  const currentPrice = 2597.41;
  const currentValue = numOfShares * currentPrice;
  const profitAndLoss = currentValue - investment;

  return (
    <>
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{stockName}</td>
              <td>{symbol}</td>
              <td>{numOfShares}</td>
              <td>${buyPrice}</td>
              <td>${investment}</td>
              <td>${currentPrice}</td>
              <td>${currentValue}</td>
              <td>${profitAndLoss.toFixed(2)}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Total:</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Portfolio;
