/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import { axiosClient } from "../../axios";
import { useEffect } from "react";
import HeaderComp from "../../components/header/header"

const AuthLayout = () => {
  const { user, token, setUser } = useStateContext();

  useEffect(() => {
    axiosClient.get("/user").then(({ data }) => {
      setUser(data);
    });
  }, []);

  if (token && user.role_id == 1) {
    return <Navigate to={"/dashboard"} />;
  } else if (token && user.role_id == 2) {
    return <Navigate to={"/e-commerce"} />;
  }

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
