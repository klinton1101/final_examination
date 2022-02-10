import React, { useState } from "react";
import firebase from "../utils/firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  IconButton,
  Button,
  Drawer,
  Divider,
  Popover,
  TextField,
} from "@mui/material";
//import { Link } from "react-router-dom";
//tab
import PropTypes from "prop-types";
//tab end


import Index from "../pages/index";


import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, getTheme } from "../redux/actions/uiAction";
import { isLogged, logout } from "../redux/actions/isLogged";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import MenuIcon from "@mui/icons-material/Menu";
import GoogleIcon from "@mui/icons-material/Google";

import { useEffect } from "react";

const style = {
  root: {
    transition: "0.5s",
    backgroundColor: (theme) => theme.palette.background.main,
    height: "100%",
  },
  appbar: {
    backgroundColor: (theme) => theme.palette.background.main,
  },

  menuLink: {
    marginLeft: 2,

    "&:hover": {
      color: (theme) => theme.palette.secondary.main,
      transform: "scale(1.05)",
      transition: ".3s",
    },
    fontSize: {
      xs: "0.9rem",
      sm: "0.9rem",
      md: "1.1rem",
    },

    display: {
      xs: "none",
      sm: "none",
      md: "block",
    },
  },

  menuLink2: {
    fontSize: {
      xs: "0.9rem",
      sm: "0.9rem",
      md: "1.1rem",
    },
    minWidth: "140px",
  },

  menu: {
    display: {
      xs: "block",
      sm: "block",
      md: "none",
    },
  },
};

const db = firebase.firestore();
//////////////////////////////////////////google login start

const provider = new GoogleAuthProvider();
const auth = getAuth();

//////////////////////////////////////////google login end

///tab
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

///tab end

export default function Nav() {
  //tab
  const [value, setValue] = React.useState(0);

  const tabChange = (event, newValue) => {
    setValue(newValue);
  };

  //tab end

  //////////////////////////////////////login

  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const [state, setState] = React.useState({
    isLoading: true,
    right: false,
  });

  const [profile, setProfile] = React.useState({
    profile: [],
  });
  const handleChange = (prop) => (e) => {
    setPayload({ ...payload, [prop]: e.target.value });
  };

  const dispatch = useDispatch();
  const ui = useSelector((state) => state.ui);
  const logged = useSelector((state) => state.logged);
  useEffect(() => {
    dispatch(getTheme());
  }, [dispatch]);

  const _toggleTheme = () => {
    dispatch(toggleTheme(!ui.isDarkMode));
  };

  /////////////////////////////////////////////drawer

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center", flexDirection:"column",
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        overflow: "hidden",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

<Box sx={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center", flexDirection:"column",}}>   
      <IconButton
          component="span"
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
            sx={{
              transition: "0.9s",
              display: "block",
            }}
          >
             {logged.active ? <Avatar src={localStorage.getItem("photo")}></Avatar> : <AccountCircleIcon />}
        
          </IconButton>
 
          <Typography color="textPrimary"
            sx={logged.active ? { display: "block", fontSize:"15px", textAlign:"center"} : { display: "none" }}
          >
            {" "}
            {logged.active ? localStorage.getItem("name") : ""}
          </Typography>
  </Box>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: "200px",
                height: "100px",
              }}
            >
              <Typography
                sx={logged.active ? { display: "none" } : { display: "block" }}
              >
                Log in via:{" "}
              </Typography>
              &nbsp; &nbsp;
              <Button
                variant="contained"
                onClick={loginGoogle}
                sx={logged.active ? { display: "none" } : { display: "block" }}
              >
                <GoogleIcon sx={{ height: "30px", width: "auto" }} />
              </Button>
              <Button
                variant="contained"
                onClick={logoutGoogle}
                sx={logged.active ? { display: "block" } : { display: "none" }}
              >
                {" "}
                LOG OUT
              </Button>
              <br />
              <br />
            </Box>
          </Popover>


<Box sx={{width:"100%"}}>
        <IconButton
          color="default"
          sx={{transition: "0.9s" }}
          onClick={_toggleTheme}
          component="span"
        >
          {ui.isDarkMode ? <Brightness7Icon /> : <Brightness2Icon />}
        </IconButton>
        </Box>

      <Divider />
    </Box>
  );

  /////////////////////////////////////////////////////drawer end

  /////////////////////////////////////popover start
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  //////////////////////////////////popover end
  const loginGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        //const credential = GoogleAuthProvider.credentialFromResult(result);
        //const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        localStorage.setItem("userid", user.uid);
        localStorage.setItem("name", user.displayName);
        localStorage.setItem("photo", user.photoURL);
        dispatch(isLogged(user.uid));
        setProfile({
          name: user.displayName,
          id: user.uid,
          email: user.email,
          phone: user.phoneNumber,
          photoURL: user.photoURL,
        });
        console.log(profile);
        //TODO if userid exists IN USERS db then use update IF NULL use set
        db.collection("users").doc(user.uid).update({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          phone: user.phoneNumber,
          photoURL: user.photoURL,
        });

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        //const errorCode = error.code;
        //const errorMessage = error.message;
        // The email of the user's account used.
        //const email = error.email;
        // The AuthCredential type that was used.
        //const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const logoutGoogle = () => {
    dispatch(logout());
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("SIGNED OUT");
        localStorage.clear();
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <Box sx={style.root}>
      <AppBar position="static" sx={style.appbar}>
        <Toolbar sx={{ paddingLeft: 2 }}>
          <Typography color="textPrimary" sx={style.menuLink2}>
            Student Portfolio
          </Typography>

          <Box sx={{ width: "100%" }}>
          </Box>
          {/*username when logged in*/}
          <Typography color="textPrimary"
            sx={logged.active ? { display: {
              xs:"none",
              sm:"none",
              md:"block"}, fontSize:"15px", width:"250px", textAlign:"right"} : { display: "none" }}
          >
            {" "}
            {logged.active ? localStorage.getItem("name") : ""}{" "}
          </Typography>
          <IconButton
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
            sx={{
              marginLeft: 2,
              transition: "0.9s",
              display: {
                xs: "none",
                sm: "none",
                md: "block",
              },
            }}
          >
            {logged.active ? <Avatar src={localStorage.getItem("photo")}></Avatar> : <AccountCircleIcon />}
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: "200px",
                height: "100px",
              }}
            >
              <Typography
                sx={logged.active ? { display: "none" } : { display: "block" }}
              >
                Log in via:{" "}
              </Typography>
              &nbsp; &nbsp;
              <Button
                variant="contained"
                onClick={loginGoogle}
                sx={logged.active ? { display: "none" } : { display: "block" }}
              >
                <GoogleIcon sx={{ height: "30px", width: "auto" }} />
              </Button>
              <Button
                variant="contained"
                onClick={logoutGoogle}
                sx={logged.active ? { display: "block" } : { display: "none" }}
              >
                {" "}
                LOG OUT
              </Button>
              <br />
              <br />
            </Box>
          </Popover>

          <IconButton
            color="default"
            sx={{
              marginLeft: 2,
              transition: "0.9s",
              display: {
                xs: "none",
                sm: "none",
                md: "block",
              },
            }}
            onClick={_toggleTheme}
            component="span"
          >
            {ui.isDarkMode ? <Brightness7Icon /> : <Brightness2Icon />}
          </IconButton>

          {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              <IconButton
                color="default"
                sx={style.menu}
                onClick={toggleDrawer(anchor, true)}
              >
                {" "}
                <MenuIcon />{" "}
              </IconButton>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </Toolbar>
      </AppBar>
      </Box>
  );
          }
