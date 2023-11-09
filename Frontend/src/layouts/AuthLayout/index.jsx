/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from "react-router-dom";
import HeaderComp from "../../components/header/header"

const AuthLayout = () => {

  return (
    <div className="auth">
      <HeaderComp/>
      <div className="auth__form">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
