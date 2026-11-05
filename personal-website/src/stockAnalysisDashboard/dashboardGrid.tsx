import "gridstack/dist/gridstack.min.css";
import { GridStack } from "gridstack";
import { useEffect } from "react";
import { DashboardGridContent } from "./stockAnalysisDashboard";
import NumberStat from "./numberStat";

const DashboardGrid = ({ stockData }: { stockData: any }) => {
  useEffect(() => {
    GridStack.init();
  }, []);
  return (
    <div>
      <div className="grid-stack">
        {/* First Row */}
        <div className="grid-stack-item" gs-w="3">
          <DashboardGridContent className="grid-stack-item-content">
            <NumberStat
              value={stockData.basicInfo.marketCap}
              label="Market Cap"
              center={true}
            />
          </DashboardGridContent>
        </div>
        <div className="grid-stack-item" gs-w="3">
          <DashboardGridContent className="grid-stack-item-content">
            <NumberStat
              value={stockData.basicInfo.fullTimeEmployees}
              label="Employees"
              center={true}
            />
          </DashboardGridContent>
        </div>
        <div className="grid-stack-item" gs-w="3">
          <DashboardGridContent className="grid-stack-item-content">
            <NumberStat
              value={stockData.basicInfo.totalRevenue}
              label="Total Revenue"
              center={true}
            />
          </DashboardGridContent>
        </div>
        <div className="grid-stack-item" gs-w="3">
          <DashboardGridContent className="grid-stack-item-content">
            <NumberStat
              value={stockData.basicInfo.trailingEps}
              label="Earnings Per Share"
              center={true}
            />
          </DashboardGridContent>
        </div>
      </div>
    </div>
  );
};

export default DashboardGrid;
