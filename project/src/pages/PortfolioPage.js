import React, { useState, useEffect } from "react";
import Portfolio from "../components/Portfolio";
import PortfolioForm from "../components/PortfolioForm";

const PortfolioPage = () => {
  const [portfolioInfo, setPortfolioInfo] = useState();
  const [portfolio, setPortfolio] = useState([]);
  const [totals, setTotals] = useState({});

  const handlePortfolio = (newStock) => {
    setPortfolio((prevState) => {
      return [...prevState, newStock];
    });
  };
  useEffect(() => {
    if (portfolio.length === 0) {
      let item = localStorage.getItem("portfolio");
      setPortfolio(JSON.parse(item));
    }
  }, []);

  useEffect(() => {
    let totalPNL = 0;
    let totalInvested = 0;
    let overallROI = 0;
    if (portfolio.length >= 0) {
      for (let i = 0; i < portfolio.length; i++) {
        totalPNL = totalPNL + Number(portfolio[i].profitAndLoss);
        totalInvested = totalInvested + Number(portfolio[i].investment);
        overallROI = (totalPNL / totalInvested) * 100;
      }

      setTotals({
        totalProfitAndLoss: totalPNL.toFixed(2),
        totalInvestment: totalInvested.toFixed(2),
        averageROI: overallROI.toFixed(2),
      });

      localStorage.setItem("portfolio", JSON.stringify(portfolio));
    }
  }, [portfolio]);

  return (
    <>
      <h2>Portfolio</h2>
      <PortfolioForm
        portfolioInfo={portfolioInfo}
        setPortfolioInfo={setPortfolioInfo}
      />
      <br />
      <Portfolio
        portfolioInfo={portfolioInfo}
        setPortfolioInfo={setPortfolioInfo}
        portfolio={portfolio}
        setPortfolio={setPortfolio}
        handlePortfolio={handlePortfolio}
        totals={totals}
      />
    </>
  );
};

export default PortfolioPage;
