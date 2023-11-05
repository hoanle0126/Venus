import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="auth">
      <div className="auth__form">
        <Outlet />
      </div>
      <div className="auth__title"></div>
    </div>
  );
};

export default AuthLayout;
