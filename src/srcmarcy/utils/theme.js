

const theme = (isDarkMode) => ({
  palette: {
    mode: isDarkMode ? "dark" : "light",
    primary: {
      main: "#a117f2",
    },
    secondary: {
      main: "#700B97",
    },
    error: {
      main: "#700B97",
    },
  },

  typography: {
    fontFamily: ["Helvetica"],
  },
});



export default theme;
