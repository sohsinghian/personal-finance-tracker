import React, { useState } from "react";
import Portfolio from "../components/Portfolio";
import PortfolioForm from "../components/PortfolioForm";

const PortfolioPage = () => {
  const [portfolioInfo, setPortfolioInfo] = useState();
  const [portfolio, setPortfolio] = useState([]);

  const handlePortfolio = (newStock) => {
    setPortfolio((prevState) => {
      return [...prevState, newStock];
    });
  };

  return (
    <>
      <h2>Portfolio</h2>
      <PortfolioForm
        portfolioInfo={portfolioInfo}
        setPortfolioInfo={setPortfolioInfo}
      />
      {/* {portfolioInfo && (
        <Portfolio
          portfolioInfo={portfolioInfo}
          setPortfolioInfo={setPortfolioInfo}
          portfolio={portfolio}
          handlePortfolio={handlePortfolio}
        />
      )} */}
    </>
  );
};

export default PortfolioPage;
