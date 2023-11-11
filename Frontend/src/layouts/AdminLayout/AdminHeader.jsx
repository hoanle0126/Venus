import { Divider, ListItemIcon, Menu, MenuItem } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import React from "react";

const AdminHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="admin__header">
      <Avatar sx={{ width: "40px", height: "40px",cursor:"pointer" }} onClick={handleClick}/>
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
            }
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose} sx={{fontSize:"1.6rem"}}>
          <Avatar /> Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} sx={{fontSize:"1.6rem"}}>
          <ListItemIcon>
            <Settings/>
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{fontSize:"1.6rem"}}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default AdminHeader;
