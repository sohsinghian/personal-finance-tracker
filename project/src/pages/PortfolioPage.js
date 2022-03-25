import React, { useState, useEffect } from "react";
import Portfolio from "../components/Portfolio";
import PortfolioForm from "../components/PortfolioForm";

const PortfolioPage = () => {
  const [portfolioInputs, setPortfolioInputs] = useState();
  const [portfolioData, setPortfolioData] = useState([]);
  const [totals, setTotals] = useState({});

  const handlePortfolio = (newStock) => {
    // add new stocks to the portfolio
    setPortfolioData((prevState) => {
      return [...prevState, newStock];
    });
  };

  useEffect(() => {
    // renders the portfolio data on when page loads
    if (portfolioData.length === 0) {
      let item = localStorage.getItem("portfolio");
      setPortfolioData(JSON.parse(item));
    }
  }, []);

  useEffect(() => {
    let totalPNL = 0;
    let totalInvested = 0;
    let overallROI = 0;
    // calculate totals for investment, profit/loss and ROI by iterating over the portfolio data.
    if (portfolioData.length >= 0) {
      for (let i = 0; i < portfolioData.length; i++) {
        totalPNL = totalPNL + Number(portfolioData[i].profitAndLoss);
        totalInvested = totalInvested + Number(portfolioData[i].investment);
        overallROI = (totalPNL / totalInvested) * 100;
      }

      // add totals into state through key value pairs.
      setTotals({
        totalProfitAndLoss: totalPNL.toFixed(2),
        totalInvestment: totalInvested.toFixed(2),
        averageROI: overallROI.toFixed(2),
      });

      // store portfolio data into local storage
      localStorage.setItem("portfolio", JSON.stringify(portfolioData));
    }
  }, [portfolioData]);

  return (
    <>
      <h2>Portfolio</h2>
      <PortfolioForm
        portfolioInputs={portfolioInputs}
        setPortfolioInputs={setPortfolioInputs}
      />
      <br />
      <Portfolio
        portfolioInputs={portfolioInputs}
        setPortfolioInputs={setPortfolioInputs}
        portfolioData={portfolioData}
        setPortfolioData={setPortfolioData}
        handlePortfolio={handlePortfolio}
        totals={totals}
      />
    </>
  );
};

export default PortfolioPage;
