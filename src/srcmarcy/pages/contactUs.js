import React from "react";

import {
  Box,
  
} from "@mui/material";


import 'animate.css';
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, getTheme } from "../redux/actions/uiAction";
import { useEffect } from "react";

const style = {
  marginTop3: {
    marginTop: 2,
  },
};

export default function Index() {
  const dispatch = useDispatch();
  const ui = useSelector((state) => state.ui);
  useEffect(() => {
    dispatch(getTheme());
  }, [dispatch]);

  const _toggleTheme = () => {
    dispatch(toggleTheme(!ui.isDarkMode));
  };
  return (
    <Box >

    </Box>
  );
}
