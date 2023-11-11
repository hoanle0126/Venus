import AverageSaleCard from "./Overview/AverageSaleCard";
import NewCustomesCard from "./Overview/NewCustomesCard";
import OrdersCard from "./Overview/OrdersCard";
import RevenueCard from "./Overview/RevenueCard";
import RightCard from "./Overview/RightCard";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <section className="dashboard__top">
        <span className="dashboard__top--header">Dashboard</span>
        <div className="dashboard__top--breadcrumbs">
          <span className="text-gray-500">Home</span>
          <span className="text-gray-500">/</span>
          <span>Dashboard</span>
        </div>
      </section>
      <section className="dashboard__overview">
        <div className="dashboard__overview--left">
          <RevenueCard/>
          <AverageSaleCard/>
          <OrdersCard/>
          <NewCustomesCard/>
        </div>
        <RightCard/>
      </section>
    </div>
  );
};

export default Dashboard;
