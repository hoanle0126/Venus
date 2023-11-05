import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="user">
      <div className="user__header">
        <div className="user__header--title">Venus</div>
        <div className="user__header__function">asda</div>
      </div>
      <div className="user__content">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
