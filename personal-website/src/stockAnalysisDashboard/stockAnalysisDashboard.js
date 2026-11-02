const stockAnalysisDashboardInput = "stock-analysis-dashboard-input";
const stockAnalysisDashboardData = "stock-analysis-dashboard-data"

const analyzeStock = async () => {
  document.getElementById(stockAnalysisDashboardData).innerHTML = ""

  const stockSymbolToAnalyze = document.getElementById(
    stockAnalysisDashboardInput
  ).value;
  if (stockSymbolToAnalyze.length == 0) {
    alert("You must put in a ticker symbol before running the analysis");
    return;
  }
  const url = `http://127.0.0.1:5000/analyze-stock/${stockSymbolToAnalyze}`;
  const response = await fetch(url);

  if (!response.ok) {
    alert("There was a problem getting the analysis for your stock");
  }

    const data = await response.json();
    console.log(data);
    
    document.getElementById(stockAnalysisDashboardData).innerHTML = JSON.stringify(data)
};
