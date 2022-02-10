//import { withTheme } from "@emotion/react";

const theme = (isDarkMode) => ({
  palette: {
    mode: isDarkMode ? "dark" : "light",
    primary: {
      main: "#75E6DA",
    },
    secondary: {
      main: "#189AB4",
    },
    error: {
      main: "#D4F1F4",
    },
  },

  typography: {
    fontFamily: ["Open Sans"],
  },
});

/*import { createTheme } from "@mui/material";

const theme = createTheme({
    mode: isDarkMode ? "dark" : "light",
    primary: {
      main: "#a20a0a",
    },
    secondary: {
      main: "#ffa36c",
    },
    error: {
      main: "#ff2442",
    },
  });
  */

export default theme;
