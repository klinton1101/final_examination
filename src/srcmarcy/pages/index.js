import React from "react";

import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Link,
  Avatar,
  IconButton
} from "@mui/material";


import AOS from 'aos';
import 'aos/dist/aos.css';

import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, getTheme } from "../redux/actions/uiAction";


import userImage from "../assets/img/user.jpg";
import logo from "../assets/img/logo.png";

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness5Icon from '@mui/icons-material/Brightness5';

import eevee2 from "../assets/img/eevee2.gif";
import eevee from "../assets/img/Eevee.gif";

import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import EditIcon from '@mui/icons-material/Edit';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ImportantDevicesOutlinedIcon from '@mui/icons-material/ImportantDevicesOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { useEffect } from "react";

const style = {
  marginTop3: {
    marginTop: 2,
  },
  root: {
    transition: "0.5s",
    backgroundColor: (theme) => theme.palette.background.default,
  },
  appbar: {
    backgroundColor: (theme) => theme.palette.background.main,
  },
  menuLink: {
    fontSize: "1.2rem",
    marginLeft: 2,
    "&:hover": {
      color: (theme) => theme.palette.secondary.main,
      transform: "scale(1.05)",
      transition: ".3s",
      fontWeight: 700,
    },
    fontSize: {
      xs: "0.9rem",
      sm: "1.1rem",
      md: "1.3rem",
    },
  },
  menuLink1: {
    fontSize: "1.2rem",
    marginLeft: 2,
    "&:hover": {
      color: (theme) => theme.palette.secondary.main,
      transform: "scale(1.05)",
      transition: ".3s",
      fontWeight: 700,
    },
    fontSize: {
      xs: "1.2rem",
      sm: "1.3rem",
      md: "1.6rem",
    },
  },
  logo: {
    height: {
      xs: 50,
      sm: 100,
    },
    width: {
      xs: 50,
      sm: 100,
    },
  },
  section1: {
    padding: "70px 0px",
    backgroundColor: (theme) => theme.palette.background.default,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  userImage: {
    marginTop: 10,
    height: {
      xs: 300,
      sm: 350,
    },
    width: {
      xs: 300,
      sm: 350,
    },
    animation: "bounceIn",
    animationDuration: "2s",
    animationDelay: "1.2s",
    animationFillMode: "both",
  },
  headingStyle1: {
    animation: "bounceIn",
    animationDuration: "2s",
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
    animation: "bounceIn",
    animationDuration: "2s",
    animationDelay: "0.8s",
    animationFillMode: "both",
    textAlign: "center",
    fontSize: {
      xs: "1rem",
      sm: "1.25rem",
      md: "1.5rem",
    },
    "&:hover": {
      color: (theme) => theme.palette.secondary.main,
      transform: "scale(1.05)",
      transition: ".3s",
      fontWeight: 700,
    },
  },
  subtitle6: {
    animation: "zoomIn",
    animationDuration: "1s",
    animationDelay: "0.6s",
    animationFillMode: "both",
    textAlign: "center",
    fontSize: {
      xs: ".8rem",
      sm: "1.rem",
      md: "1.25rem",
    },
  },
  section2: {
    padding: "10px 0px",
    backgroundColor: (theme) => theme.palette.background.main,
    marginTop: 2,
    marginBottom: 30,
    overflow: "hidden",
    borderRadius: "40px",
  },
  images: {
    height: {
      xs: 150,
      sm: 320,
      md: 450,
    },
  },
  colContainer: {
    display: "flex",
    justifyContent: "center",
    padding: 10,
  },
  colContainer1: {
    display: "flex",
    padding: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginTop: 12,
  },
  section3: {
    padding: "1px 0px",
    backgroundColor: (theme) => theme.palette.primary.main,
    marginTop: 2,
    overflow: "hidden",
  },
  subtitle2: {
    animation: "zoomIn",
    animationDuration: "1s",
    animationDelay: "0.6s",
    animationFillMode: "both",
    textAlign: "center",
    fontWeight: "700",
    fontSize: {
      xs: "2.5rem",
      sm: "3rem",
      md: "3.25rem",
    },
  },
  subtitle3: {
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
  subtitle4: {
    animation: "zoomIn",
    animationDuration: "1s",
    animationDelay: "0.6s",
    animationFillMode: "both",
    textAlign: "left",
    fontSize: {
      xs: "1rem",
      sm: "1.25rem",
      md: "1.5rem",
    },
  },
  subtitle5: {
    animation: "zoomIn",
    animationDuration: "1s",
    animationDelay: "0.6s",
    animationFillMode: "both",
    fontWeight: 700,
    textAlign: "center",
    fontSize: {
      xs: "1.25rem",
      sm: "1.5rem",
      md: "1.75rem",
    },
  },
  section4: {
    padding: "40px 0px",
    backgroundColor: (theme) => theme.palette.primary.main,
    marginTop: -10,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "40px",
    marginLeft: 40,
    marginRight: 40,
  },
  section5: {
    padding: "1px 0px",
    backgroundColor: (theme) => theme.palette.secondary.main,
    marginTop: 20,
    overflow: "hidden",
    paddingBottom: 10,
    borderTopLeftRadius: "40px",
    borderTopRightRadius: "40px",
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
  return (
    <Box sx={style.root}>
      <AppBar position="static" sx={style.appbar} color="transparent">
        <Toolbar sx={{ padding: 2 }}>
          <Box
            component="img"
            src={logo}
            alt="bsu"
            sx={style.logo}
          />
          <Link href="https://www.facebook.com/bulsuofficial" underline="none" >
            <Typography color="textPrimary" sx={style.menuLink1}> Bulacan State University </Typography>
          </Link>
          <Box component="span" sx={{ flexGrow: 1 }} />
          <Link href="/indexmarcy" underline="none" >
            <Typography color="textPrimary" sx={style.menuLink}> Portfolio </Typography>
          </Link>
          <Link href="#contactus" underline="none">
            <Typography color="textPrimary" sx={style.menuLink}>Contact Me </Typography>
          </Link>
          <IconButton
            color="default"
            sx={{ marginLeft: 2, transition: "0.9s" }}
            onClick={_toggleTheme}
            component="span"
          >
            {ui.isDarkMode ? <Brightness5Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={style.section1}>
        <Typography
          variant="h1"
          color="textPrimary"
          sx={{ ...style.headingStyle1, ...style.marginTop3 }}
        >
          Marcy Yalong Bunag
        </Typography>
        <Link href="#aboutme" underline="none">
          <Typography
            variant="subtitle1"
            color="textPrimary"
            sx={{ ...style.subtitle1, ...style.marginTop3 }}
          >
            Software Developer | Crypto Trader | Editor | Pokemon Trainer
          </Typography>
        </Link>
        <Avatar src={userImage} sx={style.userImage} />
      </Box>

      <Box data-aos="slide-up"
        sx={style.section3} >
        <Grid container>
          <Grid sm item data-aos="slide-right" data-aos-delay="1000" sx={style.colContainer}>
            <Box
              component="img"
              src={eevee2}
              alt="eevee"
              sx={style.images}
            />
          </Grid>
          <Grid sm item data-aos="flip-down" data-aos-delay="500" sx={style.colContainer1} >
            <Typography color="white" sx={{ textAlign: "justify" }} sx={{ ...style.subtitle2, ...style.marginTop3 }}>
              Hi, I'm Marcy, Nice to meet you.
            </Typography>
            <Typography color="white" sx={{ textAlign: "justify" }} sx={{ ...style.subtitle3, ...style.marginTop3 }}>
              I am a passionate student who wants to enhance coding abilities. In the future I want to became a world known IT Specialist.
            </Typography>
          </Grid>
          <Grid sm item data-aos="slide-left" data-aos-delay="1000" sx={style.colContainer}>
            <Box
              component="img"
              src={eevee}
              alt="eevee"
              sx={style.images}
            />
          </Grid>
        </Grid>
      </Box>

      <Box data-aos="fade-up" id="aboutme"
        sx={style.section2} >
        <Grid container>
          <Grid sm item data-aos="flip-down" data-aos-delay="500" sx={style.colContainer1}>
            <Typography color="primary" sx={{ textAlign: "justify" }} sx={{ ...style.subtitle5, ...style.marginTop3 }}>
              <ImportantDevicesOutlinedIcon sx={style.logo} />
            </Typography>
            <Typography color="primary" sx={{ textAlign: "justify" }} sx={{ ...style.subtitle5, ...style.marginTop3 }}>
              Software Developer
            </Typography>
            <Typography color="textPrimary" sx={{ textAlign: "left" }} sx={{ ...style.subtitle4, ...style.marginTop3 }}>
              JavaScript
              <br />
              C#
              <br />
              C++
              <br />
              Android Studio
              <br />
              Unity
              <br />
              React JS/Native
              <br />
            
            </Typography>
          </Grid >
          <Grid sm item data-aos="flip-down" data-aos-delay="700" sx={style.colContainer1}>
            <Typography color="primary" sx={{ textAlign: "justify" }} sx={{ ...style.subtitle5, ...style.marginTop3 }}>
              <MonetizationOnOutlinedIcon sx={style.logo} />
            </Typography>
            <Typography color="primary" sx={{ textAlign: "justify" }} sx={{ ...style.subtitle5, ...style.marginTop3 }}>
              Crypto Trader
            </Typography>
            <Typography color="textPrimary" sx={{ textAlign: "left" }} sx={{ ...style.subtitle4, ...style.marginTop3 }}>
              Alien Worlds
              <br />
              Crypto Blades
              <br />
              Kucoin
              <br />
              Meta Mask
            </Typography>
          </Grid>
          <Grid sm item data-aos="flip-down" data-aos-delay="900" sx={style.colContainer1}>
            <Typography color="primary" sx={{ textAlign: "justify" }} sx={{ ...style.subtitle5, ...style.marginTop3 }}>
              <EditIcon sx={style.logo} />
            </Typography>
            <Typography color="primary" sx={{ textAlign: "justify" }} sx={{ ...style.subtitle5, ...style.marginTop3 }}>
              Editor
            </Typography>
            <Typography color="textPrimary" sx={{ textAlign: "left" }} sx={{ ...style.subtitle4, ...style.marginTop3 }}>
              Photography
              <br />
              Videography
              <br />
              Photoshop
              <br />
              Filmora
            </Typography>
          </Grid>
          <Grid sm item data-aos="flip-down" data-aos-delay="1100" sx={style.colContainer1}>
            <Typography color="primary" sx={{ textAlign: "justify" }} sx={{ ...style.subtitle5, ...style.marginTop3 }}>
              <CatchingPokemonIcon sx={style.logo} />
            </Typography>
            <Typography color="primary" sx={{ textAlign: "justify" }} sx={{ ...style.subtitle5, ...style.marginTop3 }}>
              Pokemon Trainer
            </Typography>
            <Typography color="textPrimary" sx={{ textAlign: "left" }} sx={{ ...style.subtitle4, ...style.marginTop3 }}>
              Veteran Trainer
              <br />
              Bulbasaur Main
              <br />
              Cramorant Main
              <br />
              Lucario Main
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box data-aos="slide-up"
        sx={style.section4} >
        <Typography color="white" sx={{ textAlign: "justify" }} sx={{ ...style.subtitle5 }}>
          My Recent Work
        </Typography>
        <Typography color="white" sx={{ textAlign: "justify" }} sx={{ ...style.subtitle3, ...style.marginTop3 }}>
          Currently Working...
          <br />
          For more details, kindly PM me. Thanks.
        </Typography>
      </Box>

      <Box data-aos="slide-up" id="contactus"
        sx={style.section5} >
        <Typography color="white" sx={{ textAlign: "justify" }} sx={{ ...style.subtitle6, ...style.marginTop3 }}>
          <Link href="https://www.facebook.com/marcy.bunag" underline="none"><FacebookOutlinedIcon sx={style.logo} /></Link>
        </Typography>
        <Typography color="white" sx={{ textAlign: "justify" }} sx={{ ...style.subtitle6, ...style.marginTop3 }}>
          Contact Number: 09397970185
          <br />
          Email Address: marcy.bunag.y@bulsu.edu.ph
        </Typography>
        <Typography color="white" sx={{ textAlign: "justify" }} sx={{ ...style.subtitle6, ...style.marginTop3 }}>
          <br />
          Hand Crafted by me Ⓒ Bartz18
        </Typography>
      </Box>
    </Box>
  );
}