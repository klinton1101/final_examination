import React from "react";

import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Link,
  Avatar,
  IconButton,
 
} from "@mui/material";
//import { Link } from "react-router-dom";

import 'animate.css';
import { useSelector, useDispatch } from "react-redux";


import userImage from "../assets/img/user.jpg";

import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
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
      transform: "scale(1.1)",
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


  headingStyle1: {
    animation: "backInLeft",
    animationDuration: "1s",
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
    animation: "backInRight",
    animationDuration: "1s",
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
    animationFillMode: "both",
  },
};

export default function Index() {
  const dispatch = useDispatch();
  const ui = useSelector((state) => state.ui);
  

  return (
    <Box sx={style.root}>
     <AppBar position="static" sx={style.appbar}>
        <Toolbar>
        <Avatar src={userImage} sx={{height:"50px", width:"50px"}}  />
          <Box component="span" sx={{ flexGrow: 1 }} />
          <Link href="/indexabe" underline="none">
            <Typography  color="textPrimary" sx={style.menuLink}> Portfolio </Typography>
          </Link>
          <Link href="/contactusabe"  underline="none">
            <Typography  color="textPrimary" sx={style.menuLink}>Contact Us </Typography>
          </Link>
          

        </Toolbar>
      </AppBar>

      <Box sx={style.section1}>
        <Typography 
          variant="h1"
          color="textPrimary"
          sx={{ ...style.headingStyle1, marginTop:20}}
        >
          John Raphael Abejero
        </Typography>
        <Typography
          variant="subtitle1"
          color="textPrimary"
          sx={{ ...style.subtitle1, marginTop: "1" }}
        >
          Gamer | Developer | Student
        </Typography>
      </Box>


      <Box sx={style.section2} >
          
          <Typography color="textPrimary" sx={{ ...style.colContainer, ...style.marginTop3  }}>
              <FacebookIcon/> <b>Raphael Abejero</b>
            </Typography>
          
          
            <Typography color="textPrimary" sx={{...style.colContainer, ...style.marginTop3 }}>
                <EmailIcon/> <b>johnraphaelsuarezabejero.jrsa@gmail.com</b>
            </Typography>
          
        
      </Box>
    </Box>
  );
}
