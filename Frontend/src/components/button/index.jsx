/* eslint-disable react/no-unescaped-entities */
import { Button } from "@mui/material";
import {
  alpha,
  createTheme,
  getContrastRatio,
  styled,
} from "@mui/material/styles";
import { leaf, wood } from "../../context/ThemeContext";

const violetBase = leaf;
const violetMain = alpha(violetBase, 0.7);

const theme = createTheme({
  palette: {
    violet: {
      main: violetMain,
      light: alpha(violetBase, 0.5),
      dark: alpha(violetBase, 0.9),
      contrastText:
        getContrastRatio(violetMain, "#fff") > 4.5 ? "#fff" : "#111",
    },
  },
});

export const StyleButton = styled(Button)(() => ({
  color: theme.palette.getContrastText(leaf),
  backgroundColor: leaf,
  "&:hover": {
    backgroundColor: theme.palette.violet.main,
    color: theme.palette.getContrastText(wood),
  },
  height: "100%",
  fontSize: "1.4rem",
  fontWeight: "600",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textTransform: "none",
}));
