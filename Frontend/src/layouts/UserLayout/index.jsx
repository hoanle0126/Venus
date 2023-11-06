/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import { BsCart3, BsChatDots, BsBell } from "react-icons/bs";
import Avatar from "./avatar";
import { useEffect } from "react";
import { axiosClient } from "../../axios";

const UserLayout = () => {
  const { token, setUser, user } = useStateContext();
  const navigate = useNavigate();

  useEffect(() => {
    axiosClient.get("/user").then(({ data }) => {
      setUser(data);
    });
  }, []);

  if (user.role_id === 1) {
    return <Navigate to={"/dashboard"} />;
  }
  return (
    <div className="user">
      <div className="user__header">
        <div className="user__header--title">
          <img src="./src/assets/venus.svg" alt="" />
          enus
        </div>
        {token ? (
          <div className="user__header--login">
            <BsCart3 />
            <BsChatDots />
            <BsBell />
            <Avatar />
          </div>
        ) : (
          <div className="user__header--guest">
            <button
              onClick={() => navigate("/register")}
              className="user__header--guest--signup"
            >
              Sign Up
            </button>
            <button
              onClick={() => navigate("/login")}
              className="user__header--guest--signin"
            >
              Sign In
            </button>
          </div>
        )}
      </div>
      <div className="user__content">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
