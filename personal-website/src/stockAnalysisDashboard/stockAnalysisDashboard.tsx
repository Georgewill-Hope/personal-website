import { useState } from "react";
import { analyzeStock } from "./stockAnalysisDashboard";

function StockAnalysisDashboard() {
  const [stockData, setStockData] = useState();
  const [stockSymbol, setStockSymbol] = useState("");

  async function runStockAnalysis() {
    const gotStockData = await analyzeStock(stockSymbol);
    setStockData(gotStockData);
  }

  return (
    <>
      <div>
        <div id="stock-analysis-dashboarde-title">STOCK ANALYSIS DASHBOARD</div>

        <div id="stock-analysis-dashboard-subtitle">
          Put in a stock symbol you'd like to analyze(e.g. MSFT)
        </div>
        <input
          type="text"
          value={stockSymbol}
          onChange={(e) => setStockSymbol(e.target.value)}
        />
        <button
          className="stock-analysis-dashboard-button"
          onClick={() => runStockAnalysis()}
        >
          Analyze
        </button>
        <div>{JSON.stringify(stockData)}</div>
      </div>
    </>
  );
}

export default StockAnalysisDashboard;
