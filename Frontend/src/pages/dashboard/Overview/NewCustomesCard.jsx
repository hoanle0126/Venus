import { Avatar } from "@mui/material";

const NewCustomesCard = () => {
  return (
    <div className="dashboard__overview--left-items">
      <div className="overview__card">
        <div className="overview__card--header">
          48K
          <div className="overview__card--badge">a</div>
        </div>
        <div className="overview__card--subheader">
          New Customers This Month
        </div>
      </div>
      <div className="h-[100px] w-full flex px-[20px] pb-[20px] justify-end flex-col">
        <div className="px-[10px] font-[600] text-sm">Customers</div>
        <div className="h-[30px] w-full flex">
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            className="border hover:z-10 cursor-pointer mr-[-10px]"
          />
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            className="border hover:z-10 cursor-pointer mr-[-10px]"
          />
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            className="border hover:z-10 cursor-pointer mr-[-10px]"
          />
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            className="border hover:z-10 cursor-pointer mr-[-10px]"
          />
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            className="border hover:z-10 cursor-pointer mr-[-10px]"
          />
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            className="border hover:z-10 cursor-pointer mr-[-10px]"
          />
          <div className="w-[30px] h-[30px] rounded-full z-[9] cursor-pointer flex-center border bg-gray-200 text-gray-600 font-[600]">
            +42
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCustomesCard;
