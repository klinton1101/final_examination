
import * as actionTypes from "../types";

export const toggleTheme = (isDarkMode) => async (dispatch) => {
  try {
    localStorage.getItem("isDarkMode", isDarkMode);
    dispatch({ type: actionTypes.SET_THEME, payload: isDarkMode });
  } catch (err) {
    console.error(err);
  }
};

export const getTheme = () => (async) => (dispatch) => {
  try {
    const isDarkMode =
      localStorage.getItem("isDarkMode") === "true" ? true : false;
    dispatch({ type: actionTypes.SET_THEME, payload: isDarkMode });
  } catch (err) {
    console.error(err);
  }
};
