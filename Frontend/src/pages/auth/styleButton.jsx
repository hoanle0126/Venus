/* eslint-disable react/no-unescaped-entities */
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { leaf, wood } from "../../context/ThemeContext";

export const ColorButton = styled(Button)(() => ({
    backgroundColor: leaf,
    "&:hover": {
      backgroundColor: wood,
    },
    height: "100%",
    fontSize: "1.4rem",
    fontWeight: "600",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "none",
  }));
