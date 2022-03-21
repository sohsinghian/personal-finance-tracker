import React from "react";
import Portfolio from "../components/Portfolio";

const PortfolioPage = (props) => {

  return (
    <>
      <h2>Portfolio</h2>
      <Portfolio
        stockInfo={props.stockInfo}
        setStockInfo={props.setStockInfo}
      />
    </>
  );
};

export default PortfolioPage;
