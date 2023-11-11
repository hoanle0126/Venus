import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  const data = [
    {
      name: "Page A",
      uv: 4000,
    },
    {
      name: "Page B",
      uv: 3000,
    },
    {
      name: "Page C",
      uv: 2000,
    },
    {
      name: "Page D",
      uv: 2780,
    },
    {
      name: "Page E",
      uv: 1890,
    },
    {
      name: "Page F",
      uv: 2390,
    },
    {
      name: "Page G",
      uv: 3490,
    },
  ];

const DiscountedProductSales = () => {
  return (
    <div className="col-span-6 h-[450px] card p-[30px] flex flex-col justify-between">
      <div className="font-[600] text-sm">Discounted Product Sales</div>
      <div className="w-full h-[350px]">
        <div className="text-lg font-[700]">%14,094</div>
        <div className="text-sm font-[600] text-gray-400">Totals Sales</div>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 30,
              right: 10,
              left: -20,
              bottom: 60,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#18C453"
              fill="#E5F2EB"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default DiscountedProductSales