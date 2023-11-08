import { Menu,MenuItem } from "@mui/material";
import React from "react";
import {BsFillPersonFill,BsFillGearFill} from "react-icons/bs";
import {FiLogOut} from "react-icons/fi"
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import { axiosClient } from "../../axios";

const Avatar = () => {
    const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {user,setToken,setUser} = useStateContext();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogout = ev => {
    ev.preventDefault()

    axiosClient.post('/logout')
      .then(() => {
        setUser({})
        setToken(null)
      })
  }

  return (
    <>
      <button
        onClick={handleClick}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <img
          src={user.avatar}
          alt=""
        />
      </button>
      <Menu
        className="menu"
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
      <div className="menu__info"><span>{user.name}</span></div>
          <MenuItem className="menu__item" onClick={()=>navigate("/profile")}><BsFillPersonFill/><span>Profile</span></MenuItem>
          <MenuItem className="menu__item" onClick={()=>navigate("/setting")}><BsFillGearFill/><span>Setting</span></MenuItem>
          <MenuItem className="menu__item" onClick={onLogout}><FiLogOut/><span>Logout</span></MenuItem>
      </Menu>
    </>
  );
};

export default Avatar;
