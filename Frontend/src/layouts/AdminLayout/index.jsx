/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";

const DefaultLayout = () => {
  
  return (
    <div className="admin">
      <AdminHeader/>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
