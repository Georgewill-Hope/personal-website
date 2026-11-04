import { useState } from "react";
import {
  analyzeStock,
  VerticalAlignContainer,
  VerticalAlignContent,
} from "./stockAnalysisDashboard";
import { Oval } from "react-loader-spinner";
import "./stockAnalysisDashboard.css";

function StockAnalysisDashboard() {
  const [stockData, setStockData] = useState<any>();
  const [stockSymbol, setStockSymbol] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [gotData, setGotData] = useState(false);

  function goBack() {
    setGotData(false);
    setIsLoading(false);
  }

  async function runStockAnalysis() {
    setIsLoading(true);
    const gotStockData = await analyzeStock(stockSymbol);
    if (gotStockData) {
      setStockData(gotStockData);
      setGotData(true);
      setIsLoading(false);
    } else {
      goBack();
    }
  }

  if (gotData) {
    return (
      <VerticalAlignContainer>
        <VerticalAlignContent>
          <div onClick={goBack}>Back</div>
          <div>{JSON.stringify(stockData)}</div>
        </VerticalAlignContent>
      </VerticalAlignContainer>
    );
  }

  return (
    <VerticalAlignContainer>
      <VerticalAlignContent>
        <div>
          <div id="stock-analysis-dashboarde-title">
            STOCK ANALYSIS DASHBOARD
          </div>
          {isLoading ? (
            <div>
              <Oval
                height={80}
                width={80}
                color="#4fa94d"
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </div>
          ) : (
            <div>
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
            </div>
          )}
        </div>
      </VerticalAlignContent>
    </VerticalAlignContainer>
  );
}

export default StockAnalysisDashboard;
