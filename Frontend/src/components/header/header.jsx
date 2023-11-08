/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import { axiosClient } from "../../axios";
import HeaderUser from "./HeaderUser";
import HeaderGuest from "./HeaderGuest";
import Venus from "../../assets/venus";
import { green, leaf, wood } from "../../context/ThemeContext";
import Garden from "../../assets/garden";

const HeaderComp = () => {
  const { token, setUser, user } = useStateContext();
  const navigate = useNavigate();

  useEffect(() => {
    axiosClient.get("/user").then(({ data }) => {
      setUser(data);
    });
  }, []);

  user.role_id === 1 ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/e-commerce" />
  );
  const ThemeColor = leaf;
  return (
    <header className={`header`} style={{ borderBottomColor: ThemeColor }}>
      <div className="header__title" onClick={() => navigate("/")}>
        <Garden leaf={leaf} wood={wood}/>
      </div>
      {token ? <HeaderUser ThemeColor={ThemeColor}/> : <HeaderGuest ThemeColor={ThemeColor}/>}
    </header>
  );
};

export default HeaderComp;
