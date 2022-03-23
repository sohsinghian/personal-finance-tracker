import React, { useState, useEffect } from "react";
import Portfolio from "../components/Portfolio";
import PortfolioForm from "../components/PortfolioForm";

const PortfolioPage = () => {
  const [portfolioInfo, setPortfolioInfo] = useState();
  const [portfolio, setPortfolio] = useState([]);
  const [totalProfitAndLoss, setTotalProfitAndLoss] = useState(0);

  const handlePortfolio = (newStock) => {
    setPortfolio((prevState) => {
      return [...prevState, newStock];
    });
  };

  useEffect(() => {
    let totalPNL = 0;
    if (portfolio.length > 0) {
      for (let i = 0; i < portfolio.length; i++) {
        totalPNL = totalPNL + Number(portfolio[i].profitAndLoss);
      }
      setTotalProfitAndLoss(totalPNL.toFixed(2));
      console.log(totalProfitAndLoss);
    }
  }, [portfolio]);

  return (
    <>
      <h2>Portfolio</h2>
      <PortfolioForm
        portfolioInfo={portfolioInfo}
        setPortfolioInfo={setPortfolioInfo}
      />
      {portfolioInfo && (
        <Portfolio
          portfolioInfo={portfolioInfo}
          setPortfolioInfo={setPortfolioInfo}
          portfolio={portfolio}
          setPortfolio={setPortfolio}
          handlePortfolio={handlePortfolio}
          totalProfitAndLoss={totalProfitAndLoss}
        />
      )}
    </>
  );
};

export default PortfolioPage;
