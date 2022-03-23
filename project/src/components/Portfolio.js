import React, { useState, useEffect } from "react";
import Button from "./Button";
import LoadingSpinner from "./LoadingSpinner";
import { nanoid } from "nanoid";

const Portfolio = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://financialmodelingprep.com/api/v3/quote/${props.portfolioInfo.symbol.toUpperCase()}?apikey=1b69ae383498bc758a5ed7838b33da15`;
    fetchStockInfo(url);
  }, [props.portfolioInfo]);

  const fetchStockInfo = async (url) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url);

      if (res.status !== 200) {
        throw new Error("Everything went wrong.");
      }

      const data = await res.json();

      let numOfShares = Number(props.portfolioInfo.numOfShares);
      let buyPrice = Number(props.portfolioInfo.buyPrice);
      let investment = numOfShares * buyPrice;
      let currentPrice = Number(data[0].price.toFixed(2));
      let currentValue = numOfShares * currentPrice;
      let profitAndLoss = currentValue - investment;

      let newStock = {
        id: nanoid(),
        name: data[0].name,
        symbol: data[0].symbol,
        numOfShares: numOfShares,
        buyPrice: buyPrice.toFixed(2),
        investment: investment.toFixed(2),
        currentPrice: currentPrice.toFixed(2),
        currentValue: currentValue.toFixed(2),
        profitAndLoss: profitAndLoss.toFixed(2),
      };

      props.handlePortfolio(newStock);
    } catch (err) {
      setError(console.log(err.message));
    }
    setIsLoading(false);
  };

  const handleDelete = (event) => {
    console.log(event.target.parentNode.parentNode);
    // for (let i = 0; i < props.portfolio.length; i++) {
    //   if (props.portfolio[i].id === event.target.parentNode.parentNode.id) {
    //     props.portfolio.splice(i, 1);
    //   }
    // }
    console.log(props.portfolio);

    // props.portfolio.filter(id !== event.target.parentNode.parentNode.id);
  };
  // let rand;
  return (
    <>
      {props.portfolio && (
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
                <th></th>
              </tr>
            </thead>
            <tbody>
              {props.portfolio.map((element) => {
                // rand = nanoid();
                return (
                  <>
                    {/* <tr key={rand} id={rand}> */}
                    <tr id={element.id}>
                      <td>{element.name}</td>
                      <td>{element.symbol}</td>
                      <td>{element.numOfShares}</td>
                      <td>${element.buyPrice}</td>
                      <td>${element.investment}</td>
                      <td>${element.currentPrice}</td>
                      <td>${element.currentValue}</td>
                      <td>${element.profitAndLoss}</td>
                      <td>
                        <Button text="Delete" onClick={handleDelete} />
                      </td>
                    </tr>
                  </>
                );
              })}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Total:</td>
                <td></td>
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

      {error && <p>{error}</p>}
    </>
  );
};

export default Portfolio;
