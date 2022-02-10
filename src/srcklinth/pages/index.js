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

  Drawer,

  List,
  Divider,
  ListItem,

} from "@mui/material";
//import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
//
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, getTheme } from "../redux/actions/uiAction";

import userImage from "../assets/img/user.jpg";
import col1 from "../assets/img/col1.jpg";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

//import theme from "../utils/theme.js";

import { useEffect } from "react";
import { textAlign } from "@mui/system";

const style = {
  //helper
  marginTop3: {
    marginTop: 3,
  },

  root: {
    transition: "0.5s",
    backgroundColor: (theme) => theme.palette.background.default,
  },

  appbar: {
    backgroundColor: (theme) => theme.palette.background.default,
 width:"100%",
  },

  menuLink: {
    marginLeft: 2,
    
    "&:hover": {
      color: (theme) => theme.palette.secondary.main,
      transform: "scale(1.05)",
      transition: ".3s",
    },
    fontSize: {
      xs: "0.8rem",
      sm: "1.0rem",
      md: "1.2rem",
    },


    
  },

  section1: {
    padding: "70px 0px",
    backgroundColor: (theme) => theme.palette.background.main,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: {
      xs: "70vh",
      sm: "70vh",
    },
  },

  userImage: {
    height: {
      xs: 200,
      sm: 250,
    },
    width: {
      xs: 200,
      sm: 250,
    },
    animation: "zoomIn",
    animationDuration: "1s",
    animationDelay: "0.2s",
    animationFillMode: "both",
  },

  headingStyle1: {
    animation: "zoomIn",
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

  section2: {
 
    padding: {
      xs: "10px 0px",
      sm: "10px 0px",
      md: "100px 0px",
  },
   
    backgroundColor: (theme) => theme.palette.secondary.main,
    marginTop: 1,
    overflow: "hidden",
  },

  images: {
    height: {
      xs: 300,
      sm: 400,
      md: 600,
    },
  },

  colContainer: {
    display: "flex",
    flexDirection: {
      xs: "column",
      sm: "row",
    },
    justifyContent: "center",
    padding: 5,
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
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
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
        <Toolbar sx={{ display:"flex", justifyContent:"center"}}>
          <Link href="/indexklinth" sx={{ underline: "3px solid black" }}>
            <Typography color="textPrimary" sx={style.menuLink}>
              {" "}
              Portfolio{" "}
            </Typography>
          </Link>
          <Link href="/contactusklinth" underline="none">
            <Typography color="textPrimary" sx={style.menuLink}>
              Contact Us{" "}
            </Typography>
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
          sx={{ ...style.subtitle1, ...style.marginTop3 }}
        >
          Full Stack sa Alak
        </Typography>
      </Box>

      <Box data-aos="fade-up" sx={style.section2}>
        <Grid container>
          <Grid sm item data-aos="zoom-in" sx={style.colContainer}>
            <Box
              component="img"
              src={col1}
              alt="klinth pogi"
              sx={style.images}
            />
          </Grid>
          <Grid
            sm
            item
            data-aos="fade"
            data-aos-delay="300"
            sx={style.colContainer}
          >
            <Typography color="white" sx={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
              et, consectetur orci. Nunc sollicitudin augue vitae orci sagittis
              porta. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Nam dapibus lectus id felis porta, non elementum elit
              dignissim. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Nam dapibus lectus id felis porta, non elementum elit
              dignissim. Donec varius vitae arcu id mollis. Sed risus lacus,
              scelerisque id purus vitae, posuere varius urna. Suspendisse
              pulvinar mi a justo volutpat pulvinar. Nullam facilisis mauris sed
              purus mollis interdum. Quisque nec rhoncus dui. Vivamus augue
              tellus, ullamcorper ut convallis vel, vulputate in elit. Duis
              commodo ut metus vel imperdiet. Nulla vel dolor enim. Nam tempus
              ullamcorper luctus. Maecenas placerat efficitur erat, sit amet
              pretium dui tempor id. Vivamus ut neque congue, mattis nulla ac,
              hendrerit mi. Vestibulum nunc libero, rhoncus quis quam vel,
              porttitor auctor elit. Sed purus nibh, pulvinar elementum ante id,
              venenatis condimentum justo. Praesent vel sem turpis. Morbi at
              pulvinar diam. Maecenas tellus nisi, posuere in malesuada eget,
              imperdiet sed turpis. Donec sit amet metus augue. Aliquam augue
              ipsum, eleifend ut semper id, consequat sit amet mi.
            </Typography>
          </Grid>
        </Grid>
      </Box>

<Divider/>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.main,
          marginTop: "5px",
          height: 50,
          position: "static",
          display:"flex",
          justifyContent:"center",
          textAlign: "center",
        }}
      >
        <Avatar sx={{margin:"5px", bgcolor: "#05445E", marginTop:"10px"}}>
        <Link href="https://www.facebook.com/klinthvincent/">
          <FacebookIcon />{" "}
          </Link>
        </Avatar>
        <Avatar sx={{margin:"5px",  bgcolor: "#05445E", marginTop:"10px"}}>
          <Link href="https://klinthnicolas@gmail.com">
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
        <Typography sx={{marginTop:"10px"}} variant="p" color="textPrimary">@KlinthNicolas</Typography>
      </Box>

    </Box>
  );
}
