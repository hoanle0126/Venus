import { ChartContainer, BarPlot } from "@mui/x-charts";
import { leaf } from "../../../context/ThemeContext";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

const AverageSaleCard = () => {
  return (
    <div className="dashboard__overview--left-items">
      <div className="p-[20px] pb-[10px]">
        <div className="text-lg font-[600] flex items-center gap-[10px]">
          $2,420
          <div className="w-[50px] h-[20px] bg-green rounded-lg"></div>
        </div>
        <div className="text-sm font-[600] text-gray-400">
          Average Daily Sales
        </div>
      </div>
      <div className="h-[100px] w-full flex pr-[30px]">
        <ChartContainer
          width={250}
          height={300}
          margin={{
            left: 35,
            right: 0,
            top: 0,
            bottom: 220,
          }}
          series={[{ data: uData, label: "uv", type: "bar", color: leaf }]}
          xAxis={[{ scaleType: "band", data: xLabels }]}
        >
          <BarPlot />
        </ChartContainer>
      </div>
    </div>
  );
};

export default AverageSaleCard;
