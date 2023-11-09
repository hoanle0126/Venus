/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from "react-router-dom";
import HeaderComp from "../../components/header/header"

const DefaultLayout = () => {
  
  return (
    <div className="admin">
      <HeaderComp/>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
