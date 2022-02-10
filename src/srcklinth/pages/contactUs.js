import React from "react";

import {
  Box,

  AppBar,
  Toolbar,
  Typography,

  Link,
  Avatar,
  IconButton,

  Drawer,

  List,

  ListItem,

} from "@mui/material";
//import { Link } from "react-router-dom";

import 'animate.css';
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, getTheme } from "../redux/actions/uiAction";


import userImage from "../assets/img/user.jpg";
import Nav from "../components/nav";
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import MenuIcon from '@mui/icons-material/Menu';
//import theme from "../utils/theme.js";

import { useEffect } from "react";

const style = {
  //helper
  marginTop3: {
    marginTop: 2,
  },

  root: {
      transition: "0.5s",
    backgroundColor: (theme) => theme.palette.background.default,
    height: {
        xs: "100vh",
      }, 
  },

  appbar: {
    backgroundColor: (theme) => theme.palette.background.default,
  },

  menuLink: {
    //color: (theme) => theme.palette.primary.black,
    marginLeft: 2,
    
    "&:hover": {
      color: (theme) => theme.palette.secondary.main,
      transform: "scale(1.05)",
      transition: ".3s",
    },
    fontSize: {
      xs: "0.9rem",
      sm: "1.1rem",
      md: "1.3rem",
    },


    
  },

  section1: {
    padding: "10px 0px",
    backgroundColor: (theme) => theme.palette.background.main,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  section2: {
    padding: "10px 0px",
    backgroundColor: (theme) => theme.palette.background.main,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  userImage: {
      display: "none",
    height: {
      xs: 200,
      sm: 250,
    },
    width: {
      xs: 200,
      sm: 250,
    },
  },

  headingStyle1: {
    animation: "fadeInUp",
    animationDuration: "1s",
    animationDelay: "0.4s",
    animationFillMode: "both",
    textAlign: "center",
    fontWeight: 700,
    fontSize: {
      xs: "2.5rem",
      sm: "3.5rem",
      md: "4.8rem",
    },
  },
  subtitle1: {
    animation: "zoomIn",
    animationDuration: "1s",
    animationDelay: "0.6s",
    animationFillMode: "both",
    textAlign: "center",
    fontSize: {
      xs: "1rem",
      sm: "1.25rem",
      md: "1.5rem",
    },
  },


  images: {
    height: {
      xs: 200,
      sm: 400,
      md: 600,
    },
  },

  colContainer: {
    animation: "fadeInLeft",
    animationDuration: "1s",
    animationDelay: "1s",
    animationFillMode: "both",
  },

  menu: {
    display: {
      xs: "block",
      sm: "block",
      md: "none",
    }
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

  /////////////////////////////////////////////drawer
const [state, setState] = React.useState({
  right: false,
});

const toggleDrawer = (anchor, open) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }

  setState({ ...state, [anchor]: open });
};



/////////////////////////////////////////////////////drawer end



  return (
    <Box sx={style.root}>
      
     <AppBar position="static" sx={style.appbar}>
        <Toolbar  sx={{ display:"flex", justifyContent:"center"}}>
          <Box component="span" />
          <Link href="/indexklinth" underline="none">
            <Typography  color="textPrimary" sx={style.menuLink}> Portfolio </Typography>
          </Link>
          <Link href="/contactusklinth" sx={{underline:"3px solid black"}}>
            <Typography  color="textPrimary" sx={style.menuLink}>Contact Us </Typography>
          </Link>

        </Toolbar>
      </AppBar>

      <Box sx={style.section1}>
        <Avatar src={userImage} sx={style.userImage} />

        <Typography
          variant="h1"
          color="textPrimary"
          sx={{ ...style.headingStyle1, ...style.marginTop3 }}
        >
          Klinth Nicolas
        </Typography>
        <Typography
          variant="subtitle1"
          color="textPrimary"
          sx={{ ...style.subtitle1, marginTop: "1" }}
        >
          Full Stack sa Alak
        </Typography>
      </Box>


      <Box sx={style.section2} >
          
          <Typography color="textPrimary" sx={{ ...style.colContainer, ...style.marginTop3  }}>
              Facebook: <b>Klinth Vincent Nicolas</b>
            </Typography>
          
          
            <Typography color="textPrimary" sx={{...style.colContainer, ...style.marginTop3 }}>
                Email: <b>klinthvincent.nicolas.o@bulsu.edu.ph</b>
            </Typography>
          
        
      </Box>
    </Box>
  );
}
