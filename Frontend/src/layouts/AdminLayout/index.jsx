/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

const DefaultLayout = () => {
  
  return (
    <div className="admin">
      <AdminHeader className={"admin__header"}/>
      <main className="flex">
        <AdminSidebar className=" w-[240px] bg-white h-[calc(100vh-60px)] z-[500] shadow-lg flex flex-col items-center p-[20px] gap-[20px]"/> 
        <div className="flex-1"><Outlet/></div>
      </main>
    </div>
  );
};

export default DefaultLayout;
