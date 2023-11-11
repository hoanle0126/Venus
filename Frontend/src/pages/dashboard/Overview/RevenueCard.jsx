import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { value: 5, label: "Office Bonsai" },
  { value: 10, label: "Fenshui Bonsai" },
  { value: 15, label: "Other" },
];

const RevenueCard = () => {
  return (
    <div className="dashboard__overview--left-items">
            <div className="p-[20px] pb-[10px]">
              <div className="text-lg font-[600] flex items-center gap-[10px]">
                $60,000
                <div className="w-[50px] h-[20px] bg-green rounded-lg"></div>
              </div>
              <div className="text-sm font-[600] text-gray-400">Revenue</div>
            </div>
            <div className="h-[100px] w-full flex pr-[30px]">
              <PieChart
                colors={["#333", "blue", "green"]}
                series={[
                  {
                    data,
                    innerRadius: 20,
                  },
                ]}
                slotProps={{
                  legend: {
                    direction: "column",
                    position: { vertical: "middle ", horizontal: "right" },
                    itemMarkWidth: 10,
                    itemMarkHeight: 10,
                  },
                }}
                height={80}
                margin={{
                  left: 0,
                }}
              />
            </div>
          </div>
  )
}

export default RevenueCard