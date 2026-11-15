import { useState } from "react";
import {
  analyzeStock,
  VerticalAlignContainer,
  VerticalAlignContent,
  DashboardGridContainer,
  DashboardSubTitle,
  DashboardTitle,
  InputContainer,
  AnalyzeButton,
  AnalyzeInput,
  MarginSpace,
  BackButton,
  LoadingOvalContainer,
} from "./stockAnalysisDashboard";
import { Oval } from "react-loader-spinner";
import "./stockAnalysisDashboard.css";
import DashboardGrid from "./dashboardGrid";

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
          <DashboardGridContainer>
            <DashboardTitle>{stockData.basicInfo.longName}</DashboardTitle>
            <DashboardSubTitle>{stockData.basicInfo.sector}</DashboardSubTitle>
            <MarginSpace />
            <BackButton onClick={goBack}>Back</BackButton>
            <div>
              <DashboardGrid stockData={stockData} />
            </div>
          </DashboardGridContainer>
        </VerticalAlignContent>
      </VerticalAlignContainer>
    );
  }

  return (
    <VerticalAlignContainer>
      <VerticalAlignContent>
        <div>
          <DashboardTitle id="stock-analysis-dashboarde-title">
            STOCK ANALYSIS DASHBOARD
          </DashboardTitle>
          {isLoading ? (
            <LoadingOvalContainer>
              <MarginSpace />
              <Oval
                height={80}
                width={80}
                color="white"
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="white"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </LoadingOvalContainer>
          ) : (
            <div>
              <DashboardSubTitle id="stock-analysis-dashboard-subtitle">
                Put in a stock symbol you'd like to analyze(e.g. MSFT)
              </DashboardSubTitle>
              <MarginSpace />
              <InputContainer>
                <AnalyzeInput
                  type="text"
                  value={stockSymbol}
                  onChange={(e) => setStockSymbol(e.target.value)}
                />
                <AnalyzeButton
                  className="stock-analysis-dashboard-button"
                  onClick={() => runStockAnalysis()}
                >
                  Analyze
                </AnalyzeButton>
              </InputContainer>
            </div>
          )}
        </div>
      </VerticalAlignContent>
    </VerticalAlignContainer>
  );
}

export default StockAnalysisDashboard;
