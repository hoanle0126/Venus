/* eslint-disable react/prop-types */
import {
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React from "react";
import {
  BsFillBellFill,
  BsChatDotsFill,
  BsFillGearFill,
  BsBoxArrowRight,
} from "react-icons/bs";
import Garden from "../../assets/garden";
import { leaf, wood } from "../../context/ThemeContext";

const AdminHeader = ({className}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={className}>
      <div className="admin__header--left">
        <div className="admin__header--left--title">
          <Garden leaf={leaf} wood={wood} />
          Garden
        </div>
      </div>
      <div className="admin__header--right">
        <div className="admin__header--right--icon">
          <IconButton color="primary" aria-label="add to shopping cart">
            <BsChatDotsFill className={`text-[2.3rem] text-green`} />
          </IconButton>
          <IconButton color="primary" aria-label="add to shopping cart">
            <BsFillBellFill className={`text-[2.3rem] text-green`} />
          </IconButton>
        </div>
        <div className="admin__header--right--avatar">
          <Avatar
            sx={{ width: "40px", height: "40px", cursor: "pointer" }}
            onClick={handleClick}
          />
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose} sx={{ fontSize: "1.6rem" }}>
              <Avatar /> Profile
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose} sx={{ fontSize: "1.6rem" }}>
              <ListItemIcon>
                <BsFillGearFill />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{ fontSize: "1.6rem" }}>
              <ListItemIcon>
                <BsBoxArrowRight />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
