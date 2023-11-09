/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import { axiosClient } from "../../axios";
import HeaderUser from "./HeaderUser";
import HeaderGuest from "./HeaderGuest";
import { leaf, wood } from "../../context/ThemeContext";
import Garden from "../../assets/garden";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const HeaderComp = () => {
  const { token, setUser, user } = useStateContext();
  const navigate = useNavigate();
  const [header, setHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeader(false);
      } else {
        setHeader(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    axiosClient.get("/user").then(({ data }) => {
      setUser(data);
      user.role_id === 1 ? (
        <Navigate to="/dashboard" />
      ) : (
        <Navigate to="/e-commerce" />
      );
    });
  }, []);

  console.log(user)

  const ThemeColor = leaf;
  return (
    <>
      {header ? (
        <header className={`header`} style={{ borderBottomColor: ThemeColor }}>
          <div className="header__title" onClick={() => navigate("/")}>
            <Garden leaf={leaf} wood={wood} />
          </div>
          <div className="header__center">
            <div className="header__center--search">
              <Paper
                component="form"
                sx={{
                  p: "2px 2px",
                  display: "flex",
                  alignItems: "center",
                  width: 400,
                  boxShadow:'none',
                  border: `1px solid ${wood}`,
                  borderRadius: 99,
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1,fontSize:"1.4rem" }}
                  placeholder="Search"
                  inputProps={{ "aria-label": "search google maps" }}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px", color: "white",backgroundColor:leaf }}
                  aria-label="search"
                >
                  <SearchIcon/>
                </IconButton>
              </Paper>
            </div>
          </div>
          {token ? (
            <HeaderUser ThemeColor={ThemeColor} />
          ) : (
            <HeaderGuest ThemeColor={ThemeColor} />
          )}
        </header>
      ) : (
        <div className="header--scroll">
          <Garden leaf={leaf} wood={wood} />
        </div>
      )}
    </>
  );
};

export default HeaderComp;
