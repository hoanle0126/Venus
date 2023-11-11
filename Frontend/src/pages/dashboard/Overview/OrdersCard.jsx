import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#DFFFEA",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#17C653",
  },
}));

const OrdersCard = () => {
  return (
    <div className="dashboard__overview--left-items">
      <div className="p-[20px] pb-[10px]">
        <div className="text-lg font-[600] flex items-center gap-[10px]">
          1,836
          <div className="w-[50px] h-[20px] bg-green rounded-lg"></div>
        </div>
        <div className="text-sm font-[600] text-gray-400">
          Orders This Month
        </div>
      </div>
      <div className="h-[100px] w-full flex p-[20px] items-end">
        <Box sx={{ flexGrow: 1 }}>
          <div className="flex justify-between px-3 text-[1.1rem] font-[600]">
            <span>1,048 to Goal</span>
            <span className="text-gray-500">62%</span>
          </div>
          <BorderLinearProgress variant="determinate" value={50} />
        </Box>
      </div>
    </div>
  );
};

export default OrdersCard;
