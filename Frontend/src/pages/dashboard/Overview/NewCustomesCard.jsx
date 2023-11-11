import { Avatar } from "@mui/material";

const NewCustomesCard = () => {
  return (
    <div className="dashboard__overview--left-items">
      <div className="p-[20px] pb-[10px]">
        <div className="text-lg font-[600] flex items-center gap-[10px]">
          48K
          <div className="w-[50px] h-[20px] bg-green rounded-lg"></div>
        </div>
        <div className="text-sm font-[600] text-gray-400">
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
