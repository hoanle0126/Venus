import { BsArrowClockwise } from "react-icons/bs";
import { FaCarSide, FaServicestack } from "react-icons/fa";

const ECommerceService = () => {
  return (
    <section className="ecommerce__service">
      <div className="ecommerce__service--item">
        <FaCarSide />
        FREE SHIPPING ON ORDERS OVER $50
      </div>
      <div className="ecommerce__service--item">
        <BsArrowClockwise />
        30 -DAY RETURNS MONEY BACK
      </div>
      <div className="ecommerce__service--item">
        <FaServicestack />
        24/7 SUPPORT
      </div>
    </section>
  );
};

export default ECommerceService;
