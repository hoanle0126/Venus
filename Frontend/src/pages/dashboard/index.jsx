import AverageSaleCard from "./Overview/AverageSaleCard";
import NewCustomesCard from "./Overview/NewCustomesCard";
import OrdersCard from "./Overview/OrdersCard";
import RevenueCard from "./Overview/RevenueCard";
import RightCard from "./Overview/RightCard";
import ProductsDelivery from "./Products/ProductsDelivery";
import DiscountedProductSales from "./Recents/DiscountedProductSales";
import RecentsCard from "./Recents/RecentsCard";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <section className="dashboard__top">
        <span className="dashboard__top--header">Dashboard</span>
        <div className="dashboard__top--breadcrumbs">
          <span className="text-gray-1 font-[600]">Home</span>
          <span className="text-gray-1 font-[600]">/</span>
          <span className=" font-[600] text-dark">Dashboard</span>
        </div>
      </section>
      <section className="dashboard__overview">
        <div className="dashboard__overview--left">
          <RevenueCard />
          <AverageSaleCard />
          <OrdersCard />
          <NewCustomesCard />
        </div>
        <RightCard />
      </section>
      <section className="w-full  grid grid-cols-12 gap-[30px]">
        <RecentsCard/>
        <DiscountedProductSales/>
        <ProductsDelivery/>
        <div className="h-[450px] card col-span-8 "></div>
      </section>
    </div>
  );
};

export default Dashboard;
