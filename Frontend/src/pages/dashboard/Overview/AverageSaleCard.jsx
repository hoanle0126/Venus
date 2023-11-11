import { BarChart, Bar,  ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const AverageSaleCard = () => {
  return (
    <div className="dashboard__overview--left-items">
      <div className="overview__card">
        <div className="overview__card--header">
          $2,420
          <div className="overview__card--badge">as</div>
        </div>
        <div className="overview__card--subheader">
          Average Daily Sales
        </div>
      </div>
      <div className="overview__card--contents">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={data} margin={{left:30,bottom:20,top:10}} >
          <Bar dataKey="uv" fill={"#17C653"} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AverageSaleCard;
