import React, { useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Link,
  Typography,
  Grid,
  Paper,
  Button,
} from "@mui/material";

//redux
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, getTheme } from "../redux/actions/uiAction";
//icons
import { FaFacebookF, FaFacebookMessenger } from "react-icons/fa";
import {
  SiGmail,
  SiCsswizardry,
  SiJavascript,
  SiCplusplus,
  SiCsharp,
  SiJava,
} from "react-icons/si";
import { MdDarkMode } from "react-icons/md";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiAdobexd,
} from "react-icons/si";
import { GrReactjs, GrHtml5 } from "react-icons/gr";
import "../utils/app.css";

//photo,logo etc
import soloImg from "../assets/img/mesolo.png";
import alt from "../assets/img/alt.png";
import coder from "../assets/img/coder.png";
import designer from "../assets/img/designer.png";
import logo from "../assets/img/mylogo.png";
//import WebFont from "webfontloader";

/* WebFont.load({
  custom: {
    families: ["Century Gothic"],
  },
}); */
export default function Index() {
  const style = {
    menuLink: {
      color: "#b3b0b1",
      fontSize: { xs: "1rem", sm: "1.8rem", md: 18 },
      marginLeft: 5,
      alignItems: "center",
    },
    appBar: {
      height: "80px",
    },
    titleLarge: {
        fontSize: { xs: "1.8rem", sm: "2.3rem", md: 50 },
        marginBottom: -1,
      },
    titleLarge2: {
      fontSize: { xs: "1.8rem", sm: "2.3rem", md: 50 },
      marginBottom: 2,
    },
    details: {
      fontSize: { xs: "0.75rem", sm: "1rem", md: 20 },
    },
    details2: {
      fontSize: { xs: "0.75rem", sm: "1rem", md: 20 },
    },
    detail2Cont: {
      margin: 1,
    },
    soloImg: {
      height: "20%",
      width: "auto",
      marginBottom: "-20px",
    },
    gridSpaceContact:{
        marginBottom: 2,
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTheme());
  }, [dispatch]);
  const ui = useSelector((state) => state.ui);

  const useDarkMode = () => {
    dispatch(toggleTheme(!ui.isDarkMode));
  };

  return (
    <Box>
      <AppBar position="static" sx={style.appBar}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <img src={logo} style={{ height: 32, width: 110 }} className="logo"  alt="valalas"/>
          <Box sx={{ flexGrow: 3 }} className="appBarSpace" />
          <Link href="#about" underline="none">
            <Typography sx={style.menuLink}>about</Typography>
          </Link>
          <Link href="#contact" underline="none">
            <Typography sx={style.menuLink}>contact </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Button onClick={useDarkMode}>
            <MdDarkMode size={25} color="white" style={{ marginLeft: 20 }}>
              {" "}
            </MdDarkMode>
          </Button>
        </Toolbar>
      </AppBar>

      <Box className="firstPaper">
        <Paper className="specPaper">
          <Grid
            container
            flex={1}
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
          >
            <Grid sm item>
              <Box>
                <img src={designer} alt="designer"></img>
                <Typography sx={style.details}>
                  Awarded with Visual Graphics Design NC III
                </Typography>
                <Typography sx={style.details}>
                  Adobe : Photoshop, Illustrator, Premiere, Xd
                </Typography>
                <Box flexDirection="row" marginTop="20px">
                  <SiAdobephotoshop size={25} style={{ marginLeft: 25 }} />{" "}
                  <SiAdobeillustrator size={25} style={{ marginLeft: 25 }} />{" "}
                  <SiAdobepremierepro size={25} style={{ marginLeft: 25 }} />{" "}
                  <SiAdobexd size={25} style={{ marginLeft: 25 }} />{" "}
                </Box>
              </Box>
            </Grid>

            <Grid sm item>
              <img src={soloImg} sx={style.soloImg} className="soloImg" alt="solopic"></img>
              <img src={alt} sx={style.alt} className="alt" alt="circle"></img>
            </Grid>

            <Grid sm item>
              <img src={coder} alt="coder"></img>
              <Typography sx={style.details}>
                Web & Software development using:{" "}
              </Typography>
              <Typography sx={style.details}>
                ReactJs, HTML, CSS, Javascript, C++, C#, JAVA{" "}
              </Typography>
              <Box flexDirection="row" marginTop="20px">
                <GrReactjs size={25} style={{ marginLeft: 25 }} />{" "}
                <GrHtml5 size={25} style={{ marginLeft: 25 }} />{" "}
                <SiCsswizardry size={25} style={{ marginLeft: 25 }} />{" "}
                <SiJavascript size={25} style={{ marginLeft: 25 }} />{" "}
                <SiCplusplus size={25} style={{ marginLeft: 25 }} />{" "}
                <SiCsharp size={25} style={{ marginLeft: 25 }} />{" "}
                <SiJava size={25} style={{ marginLeft: 25 }} />{" "}
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <Box/>

        <Box>
          <Paper sx={{ paddingTop: 10, paddingBottom: 10 }}>
            <Grid
              container
              flex={1}
              justifyContent={"center"}
              alignItems={"center"}
              textAlign={"center"}
            >
              <Grid sm item>
                <Box sx={style.detail2Cont} id="about">
                  <Typography sx={style.titleLarge2}>about. </Typography>
                  <Typography sx={style.details2}>
                    Hi, I am Jeric Ace Valmadrid.
                  </Typography>
                  <Typography sx={style.details2}>
                    {" "}
                    I have only minor experience in web development and under
                    continous learning from my college.
                  </Typography>
                  <Typography sx={style.details2}>
                    I am working for a dream to become a full-stack developer in
                    the coming years.
                  </Typography>
                </Box>
              </Grid>
            
              <Grid sm item >
                <Box sx={style.detail2Cont}>
                  <Typography sx={style.titleLarge}>contact. </Typography>

                  <Box
                    id="contact"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: " center",
                    }}
                  >
                    <Grid sm item sx={style.gridSpaceContact}>
                      <Link href="#">
                        <SiGmail style={{ fontSize: 30 }} underline="none" />
                        <Typography
                          style={{ marginLeft: 15, verticalAlign: "middle" }}
                          sx={style.details}
                        >
                          {" "}
                          jericacevalmadrid@gmail.com
                        </Typography>
                      </Link>{" "}
                    </Grid>

                    <Grid sm item sx={style.gridSpaceContact}>
                      {" "}
                      <Link href="https://www.facebook.com/Valalas9">
                        <FaFacebookF style={{ fontSize: 30 }} />
                        <Typography
                          style={{ marginLeft: 15, verticalAlign: "middle" }}
                          sx={style.details}
                        >
                          {" "}
                          www.facebook.com/Valalas9
                        </Typography>
                      </Link>
                    </Grid>
                    <Grid sm item sx={style.gridSpaceContact}>
                      {" "}
                      <Link href="https://m.me/Valalas9">
                        <FaFacebookMessenger style={{ fontSize: 30 }} />
                        <Typography
                          style={{ marginLeft: 15, verticalAlign: "middle" }}
                          sx={style.details}
                        >
                          {" "}
                          m.me/Valalas9
                        </Typography>
                      </Link>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
