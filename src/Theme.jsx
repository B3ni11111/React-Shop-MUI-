import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#415a77", // הרקע שלך
    },
    secondary: {
      main: "#778da9", // צבע משני
    },
    background: {
      default: "#415a77", // רקע כללי
      paper: "#1b263b", // רקע כרטיסים או קופסאות
    },
    text: {
      primary: "#e0e1dd", // טקסט רגיל
      secondary: "#778da9", // טקסט משני
    },
    custom: {
      dark: "#1b263b",
      veryDark: "#0d1b2a",
    },
  },
});

export default theme;
