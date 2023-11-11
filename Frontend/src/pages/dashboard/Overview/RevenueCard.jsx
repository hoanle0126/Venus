import { PieChart } from "@mui/x-charts/PieChart";
import { ResponsiveContainer } from "recharts";

const data = [
  { value: 5, label: "Office Bonsai" },
  { value: 10, label: "Fenshui Bonsai" },
  { value: 15, label: "Other" },
];

const RevenueCard = () => {
  return (
    <div className="dashboard__overview--left-items">
      <div className="overview__card">
        <div className="overview__card--header">
          $60,000
          <div className="overview__card--badge"></div>
        </div>
        <div className="overview__card--subheader">Revenue</div>
      </div>
      <div className="overview__card--contents">
        <ResponsiveContainer width="100%" height="100%">
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
            height={60}
            margin={{
              left: 10,
              bottom: 20,
            }}
          />
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueCard;
