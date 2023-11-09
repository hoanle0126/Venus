/* eslint-disable react/prop-types */

import { useRef } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const EcommerceCategory = ({ categories }) => {
  const elementRef = useRef(null);

  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      element.scrollRight += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };

  return (
    <div className="ecommerce__category">
      <div className="ecommerce__category--header">
        <div className="ecommerce__category--header-title">TOP CATEGORIES</div>
        <div className="absolute right-[20px] top-[50%] text-[2rem] flex gap-5 translate-y-[-50%]">
          <div
            className={` top-0 right-0 text-black`}
            onClick={() => {
              handleHorizantalScroll(elementRef.current, 25, 225, -10);
            }}
          >
            <BsArrowLeftCircle />
          </div>
          <div
            className="w-[30px] h-[30px] absolute top-0 right-0 text-black"
            onClick={() => {
              handleHorizantalScroll(elementRef.current, 25, 225, 10);
            }}
          ></div>

          <BsArrowRightCircle />
        </div>
      </div>
      <div className="ecommerce__category--content" ref={elementRef}>
        {categories.map((category) => (
          <div key={category.id} className="ecommerce__category--content-item">
            <div className="ecommerce__category--content-item-image">
              <img src={category.image} alt={category.name} />
            </div>
            <div className="ecommerce__category--content-item-title">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcommerceCategory;
