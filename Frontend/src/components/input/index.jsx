/* eslint-disable react/prop-types */
import { createTheme } from "@mui/material/styles";
import { leaf } from "../../context/ThemeContext";
import TextField from "@mui/material/TextField";
import { ThemeProvider, useTheme } from "@mui/material/styles";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#333",
            "--TextField-brandBorderHoverColor": leaf,
            "--TextField-brandBorderFocusedColor": leaf,
            "& label.Mui-focused": {
              color: leaf,
            },
            "& label": {
              color: "#333",
            },
            "& input": {
              color: "#333",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&:before": {
              borderBottom: `2px solid ${"#333"}`,
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: `2px solid ${leaf}`,
            },
            "&.Mui-focused:after": {
              borderBottom: `2px solid ${leaf}`,
            },
            width: "100%",
            height: "40px",
            paddingLeft: "10px",
            fontSize: "1.4rem",
          },
        },
      },
    },
  });

const StyleInput = ({ inputRef, type, label }) => {
  const outerTheme = useTheme();
  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <TextField
        inputRef={inputRef}
        type={type}
        label={label}
        variant="standard"
        InputLabelProps={{ style: { fontSize: "1.6rem" } }}
      />
    </ThemeProvider>
  );
};
export default StyleInput;
