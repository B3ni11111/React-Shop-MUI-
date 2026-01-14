import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#415a77",
    },
    secondary: {
      main: "#778da9",
    },
    background: {
      default: "#415a77",
      paper: "#1b263b",
    },
    text: {
      primary: "#e0e1dd",
      secondary: "#778da9",
    },
    custom: {
      dark: "#1b263b",
      veryDark: "#0d1b2a",
    },
  },
});

export default theme;
