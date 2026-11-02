// import { useState } from "react";
// import './App.css'

function StockAnalysisDashboard() {
  // const [count, setCount] = useState(0);
  async function runStockAnalysis() {
    alert("Function called!");
  }

  return (
    <>
      <div>
        <div id="stock-analysis-dashboarde-title">STOCK ANALYSIS DASHBOARD</div>

        <div id="stock-analysis-dashboard-subtitle">
          Put in a stock symbol you'd like to analyze(e.g. MSFT)
        </div>
        <input type="text" id="stock-analysis-dashboard-input" />
        <button
          className="stock-analysis-dashboard-button"
          onClick={() => runStockAnalysis()}
        >
          Analyze
        </button>
        <div id="stock-analysis-dashboard-data"></div>
      </div>
      {/* <button
        type="button"
        className="counter"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button> */}
    </>
  );
}

export default StockAnalysisDashboard;
