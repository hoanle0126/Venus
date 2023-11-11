import { useState } from "react";
import Item1 from "./Orders/Item1";
import Item2 from "./Orders/Item2";
import Item3 from "./Orders/Item3";
import Item4 from "./Orders/Item4";
import Item5 from "./Orders/Item5";
import Item6 from "./Orders/Item6";

const RecentsCard = () => {
  const [value, setValue] = useState(1);

  return (
    <div className="h-[450px] card col-span-6 p-[20px] flex flex-col gap-[20px]">
      <div className="text-sm font-[600] text-dark">Recent Orders</div>
      <div className="w-full h-[70px] flex gap-[20px]">
        <div
          className={`tab ${value === 1 && "tab--active"}`}
          onClick={() => setValue(1)}
        ></div>
        <div
          className={`tab ${value === 2 && "tab--active"}`}
          onClick={() => setValue(2)}
        ></div>
        <div
          className={`tab ${value === 3 && "tab--active"}`}
          onClick={() => setValue(3)}
        ></div>
        <div
          className={`tab ${value === 4 && "tab--active"}`}
          onClick={() => setValue(4)}
        ></div>
        <div
          className={`tab ${value === 5 && "tab--active"}`}
          onClick={() => setValue(5)}
        ></div>
        <div
          className={`tab ${value === 6 && "tab--active"}`}
          onClick={() => setValue(6)}
        ></div>
      </div>
      {value===1&&<Item1/>}
      {value===2&&<Item2/>}
      {value===3&&<Item3/>}
      {value===4&&<Item4/>}
      {value===5&&<Item5/>}
      {value===6&&<Item6/>}
    </div>
  );
};

export default RecentsCard;
