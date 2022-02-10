const custom_Theme = (isDarkMode) => ({
  mode: isDarkMode ? "dark" : "light",
  pallete: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#d94e4e",
    },
    error: {
      main: "#f74437",
    },
    background: {
      paper: "#d94f4f",
    },
    text: {
      secondary: "#b3b0b1",
    },
  },
});

export default custom_Theme;
