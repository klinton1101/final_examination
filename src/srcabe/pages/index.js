import React from "react";

import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Link,
  Avatar,
  IconButton,
} from "@mui/material";

import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector, useDispatch } from "react-redux";


import userImage from "../assets/img/user.jpg";
import col1 from "../assets/img/col1.jpg";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import { grey, deepPurple } from '@mui/material/colors';
import { useEffect } from "react";

const style = {
  //helper
  marginTop3: {
    marginTop: 3,
  },

  root: {
    transition: "0.5s",
    backgroundColor: (theme) => theme.palette.background.default,
    overflow: "hidden",
  },

  appbar: {
    backgroundColor: (theme) => theme.palette.background.default,
  },

  menuLink: {
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
    marginTop: 12,
    padding: "70px 0px",
    backgroundColor: (theme) => theme.palette.background.main,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "60vh",
  },

  userImage: {
    height: {
      xs: 180,
      sm: 230,
    },
    width: {
      xs: 180,
      sm: 230,
    },
    animation: "zoomIn",
    animationDuration: "1s",
    animationFillMode: "both",
  },

  headingStyle1: {
    animation: "zoomIn",
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
    animation: "zoomIn",
    animationDuration: "1s",
    animationFillMode: "both",
    textAlign: "center",
    fontSize: {
      xs: "1rem",
      sm: "1.25rem",
      md: "1.5rem",
    },
  },

  section2: {
    padding: "100px 0px",
    backgroundColor: (theme) => theme.palette.secondary.main,
    marginTop: 10,
  },

  images: {
    height: {
      xs: 300,
      sm: 400,
      md: 500,
      lg: 600,
    },
  },

  colContainer: {
    display: "flex",
    justifyContent: "center",
    padding: 5,
  },
};

export default function Index() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const dispatch = useDispatch();
  const ui = useSelector((state) => state.ui);


  return (
    <Box sx={style.root}>
      <AppBar position="static" sx={style.appbar}>
        <Toolbar>
          <Box component="span" sx={{ flexGrow: 1 }} />
          <Link href="/indexabe" underline="none">
            <Typography color="textPrimary" sx={style.menuLink}>
              {" "}
              Portfolio{" "}
            </Typography>
          </Link>
          <Link href="/contactusabe" underline="none">
            <Typography color="textPrimary" sx={style.menuLink}>
              Contact Us{" "}
            </Typography>
          </Link>
         
        </Toolbar>
      </AppBar>

      <Box sx={style.section1}>
        <Typography
          variant="h1"
          color="textPrimary"
          sx={{ ...style.headingStyle1, ...style.marginTop3 }}
        >
          John Raphael Abejero
        </Typography>
        <Typography
          variant="subtitle1"
          color="textPrimary"
          sx={{ ...style.subtitle1, ...style.marginTop3 }}
        >
          Gamer | Developer | Student
        </Typography>

        <Avatar src={userImage} sx={{ ...style.userImage, marginTop: 2 }} />
      </Box>

      <Box data-aos="slide-left" sx={style.section2}>
        <Grid container>
          <Grid sm item sx={style.colContainer}>
            <Box
              component="img"
              src={col1}
              alt="klinth pogi"
              sx={style.images}
            />
          </Grid>
          <Grid sm item sx={style.colContainer}>
            <Typography color="white" sx={{ textAlign: "justify" }}>
              Pellentesque vitae turpis eros. Proin sapien justo, molestie vitae
              justo ac, faucibus feugiat erat. Ut vitae massa eu metus facilisis
              dictum. Nunc et laoreet urna. Ut tortor tortor, accumsan ac ipsum
              a, convallis semper mi. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Maecenas id
              consectetur ante, sit amet fringilla neque. Nam facilisis arcu
              tortor, vitae elementum eros imperdiet eget. Duis ac neque vel
              nunc tincidunt dapibus. In molestie libero vitae ipsum facilisis,
              sit amet ultrices dui tristique. Suspendisse eu velit at magna
              ultricies gravida vitae nec lectus. In tristique metus nisi, vel
              tempus metus mattis eget. Nullam sit amet magna interdum, posuere
              purus eget, sodales ex. Praesent vel nisi placerat, semper lacus
              et, consectetur orci.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.main,
          marginTop: "none",
          height: 50,
          position: "static",
          display:"flex",
          justifyContent:"center",
          textAlign: "center",

        }}
      >
        <Avatar sx={{margin:"5px", bgcolor: "#116530"}}>
        <Link href="https://www.facebook.com/profile.php?id=100069545361206">
          <FacebookIcon />{" "}
          </Link>
        </Avatar>
        <Avatar sx={{margin:"5px",  bgcolor: "#116530"}}>
          <Link href="https://www.facebook.com/profile.php?id=100069545361206">
          <EmailIcon />{" "}
          </Link>
        </Avatar>
      </Box>

      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.main,
          marginTop: "none",
          height: 50,
          position: "static",
          display:"flex",
          justifyContent:"center",
          textAlign: "center",

        }}
      > 
        <Typography variant="p" color="textPrimary">Handcrafted by yours truly</Typography>
      </Box>
    </Box>
  );
}
