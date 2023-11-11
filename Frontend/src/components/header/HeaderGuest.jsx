import { useNavigate } from "react-router-dom";
import { StyleButton } from "../button";
import { leaf, wood } from "../../context/ThemeContext";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: leaf,
    },
    secondary: {
      main: wood,
    }
  },
});

const HeaderGuest = () => {
  const navigate = useNavigate();

  return (
    <div className="header__guest">
      <ThemeProvider theme={theme}>
        <StyleButton variant="outlined" onClick={() => navigate("/register")} sx={{paddingX:"18px",paddingY:"7px",backgroundColor:"white",color:leaf}}>
          Sign Up
        </StyleButton>
        <StyleButton variant="contained"
          onClick={() => navigate("/login")} sx={{paddingX:"18px",paddingY:"7px"}}
        >
          Sign In
        </StyleButton>
      </ThemeProvider>
    </div>
  );
};

export default HeaderGuest;
