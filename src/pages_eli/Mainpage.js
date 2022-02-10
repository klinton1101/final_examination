import React, { useEffect } from 'react';
//redux
import { useSelector, useDispatch } from 'react-redux';
//MUI
import {
    Box, AppBar, Toolbar, Link, Typography,
    Switch, styled, Avatar, Grid, Paper,
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

//Extra UI Designs
import Typical from 'react-typical';
import AOS from 'aos';
import 'aos/dist/aos.css';

//components
import userimg from '../assets/user.jpg';
import { toggleTheme, getTheme } from '../redux/actions/uiAction';

export default function Mainpage() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const dispatch = useDispatch();
    const ui = useSelector((state) => state.ui);

    useEffect(() => {
        dispatch(getTheme());
    }, [dispatch])

    const _toggleTheme = () => {
        dispatch(toggleTheme(!ui.isDarkMode));
    }

    return (

        // MAIN CONTAINER
        <Box sx={style.root}>

            {/* APPBAR */}
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <Typography sx={style.subtitle1} color="textPrimary">Elinald Mariano</Typography>
                    <Box component="span" sx={{ flexGrow: 1 }} />
                    <Link href="#aboutme" underline="none">
                        <Typography sx={style.menuLink}>About Me</Typography>
                    </Link>
                    <Link href="#contact" underline="none">
                        <Typography sx={style.menuLink}>Contact</Typography>
                    </Link>

                    {/* TOGGLE SWITCH */}
                    <MaterialUISwitch onClick={_toggleTheme} />
                </Toolbar>
            </AppBar>

            {/* AVATAR AND TEXT BELOW */}
            <Box>
                <Box sx={style.section1}>
                    <Avatar src={userimg} sx={style.userImage} data-aos="fade-up" />
                    <Typography color="secondary" sx={{...style.subtitle1, marginTop: 5}}>
                        <Typical wrapper='b' steps={
                            [
                                "a P", 150,
                                "a Pr", 150,
                                "a Pro", 150,
                                "a Prog", 150,
                                "a Progr", 150,
                                "a Progra", 150,
                                "a Program", 150,
                                "a Programm", 150,
                                "a Programme", 150,
                                "a Programmer", 150,
                                "a Programmer💻", 150,
                            ]
                        } />
                    </Typography>
                </Box>
            </Box>

            {/* ABOUT ME CONTAINER */}
            <Box sx={{ ...style.section2, ...style.marginTop5, borderRadius: "25px", }}>
                <Typography sx={style.headingStyle2} color="textPrimary" id="aboutme" data-aos="fade-down">About Me</Typography>
                <Grid container sx={style.grids}>
                    <Grid sm item>
                        <Box component="img" src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1459496/programming-clipart-xl.png"
                            alt="prog" sx={style.imgProg} data-aos="fade-right">
                        </Box>
                    </Grid>
                    <Grid sm item>
                        <Typography sx={style.subtitle1} color="textPrimary" data-aos="fade-in">Hi! I'm Elinald and I'm a little bit about of everything
                            that is shown under my avatar. I'm currently a student so I don't have any corporate experience but I am more than willing
                            to be a part of a team.
                        </Typography>
                    </Grid>
                </Grid>

                {/* EDUCATION SKILLS HOBBIES */}
                <Paper sx={{ margin: 10, }} elevation={5} data-aos="flip-up">
                    <Grid container sx={style.grids2}>

                        <Grid sm item sx={{ padding: 3 }}>
                            <AccountCircleIcon sx={style.gridicons} />
                            <Typography sx={style.gridtxt}>Education</Typography>
                            <Typography sx={style.marginer} color="#1597E5">Past Schools:</Typography>
                            Camachilihan Elementary School
                            <br />
                            Alexis G. Santos National High School
                            <br />
                            ACLC College of Baliuag (ICT)
                            <br />
                            <Typography sx={style.marginer} color="#1597E5">Current University:</Typography>
                            <Typography sx={{ marginBottom: 10, }}>Bulacan State University - Bustos Campus (BSIT)</Typography>
                        </Grid>

                        <Grid sm item sx={{ padding: 3 }}>
                            <FlashOnIcon sx={style.gridicons} />
                            <Typography sx={style.gridtxt}>Skills</Typography>
                            <Typography sx={style.marginer} color="#1597E5">Programming:</Typography>
                            Java
                            <br />
                            C++
                            <br />
                            C#
                            <br />
                            Unity
                            <br />
                            JavaScript
                            <br />
                            PHP
                            <br />
                            <Typography sx={style.marginer} color="#1597E5">Designing:</Typography>
                            UI/UX
                            <br />
                            Prototyping
                            <br />
                            Photoshop
                        </Grid>

                        <Grid sm item sx={{ padding: 3 }}>
                            <AccessibilityNewIcon sx={style.gridicons} />
                            <Typography sx={style.gridtxt}>Hobbies</Typography>
                            <br />
                            <br />
                            Gaming
                            <br />
                            Trading
                            <br />
                            Driving
                            <br />
                            Nature
                            <br />
                            Playing an instrument
                            <br />
                            Fixing computers
                            <Typography sx={{ marginBottom: 17, }}>Listening to Music</Typography>
                        </Grid>

                    </Grid>
                </Paper>
            </Box>

            {/* CONTACT ME AND FOOTER */}
            <Typography sx={{ ...style.headingStyle2, ...style.marginTop5 }}
                color="textPrimary" id="contact" data-aos="fade-down">Contact</Typography>

            <Box sx={{ ...style.marginTop5, display: 'flex', justifyContent: 'center', }} data-aos="fade-up">
                <Link href="https://www.facebook.com/xEverDiex/" underline="none"><FacebookIcon sx={style.gridicons} /></Link>
                <Link href="https://twitter.com/HeyItsElinald"><TwitterIcon sx={style.gridicons} /></Link>
                <Link href="https://github.com/xEverDiex"><GitHubIcon sx={style.gridicons} /></Link>
            </Box>
            <br />
            <br />
            <Box sx={{ ...style.marginTop5, display: 'flex', justifyContent: 'center', }}>
                <Typography color="textPrimary">© 2021. EverDie</Typography>
            </Box>
            <br />
            <br />


        </Box >
    )
}

//SWITCH TOGGLE DARKMODE
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));



//STYLING
const style = {
    //helper
    marginTop5: {
        marginTop: "7rem",
    },
    marginer: {
        margin: "1.5rem"
    },
    //mga styling na

    root: {
        transition: "1s",
        backgroundColor: (theme) => theme.palette.background.default,
    },
    menuLink: {

        fontSize: {
            xs: ".8rem",
            sm: ".9rem",
            md: "1rem",
        },
        marginRight: 2,
        "&:hover": {
            fontSize: "1.2rem",
            color: (theme) => theme.palette.secondary.main
        }
    },
    section1: {
        padding: "100px 0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: (theme) => theme.palette.background.default,
    },
    section2: {
        padding: "50px 0px",
        backgroundColor: (theme) => theme.palette.secondary.main
    },
    userImage: {
        height: {
            xs: 150,
            sm: 200,
            md: 250,
        },
        width: {
            xs: 150,
            sm: 200,
            md: 250,
        },
    },
    headingStyle1: {
        textAlign: "center",
        fontWeight: 700,
        fontSize: {
            xs: "2rem",
            sm: "3.2rem",
            md: "4.8rem"
        },
        fontFamily: "SpaceMono",
    },
    headingStyle2: {
        textAlign: "center",
        fontSize: {
            xs: "1.5rem",
            sm: "2rem",
            md: "3rem"
        },
        fontFamily: "SpaceMono",
    },
    subtitle1: {
        textAlign: "center",
        fontFamily: "SpaceMono",
        fontSize: {
            xs: "1rem",
            sm: "1.5rem",
            md: "2rem"
        },
    },
    gridtxt: {
        fontWeight: 1000,
        fontSize: {
            xs: "1rem",
            sm: "1.6rem",
            md: "2.4rem"
        },
    },
    gridicons: {
        marginRight: 5,
        marginLeft: 5,
        height: {
            xs: 30,
            sm: 50,
            md: 60,
        },
        width: {
            xs: 30,
            sm: 50,
            md: 60,
        },
    },
    grids: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
    },
    grids2: {
        textAlign: "center",
        alignItems: "center",
        flexDirection: {
            xs: "column",
            sm: "row",
            md: "row",
        },
    },
    imgProg: {
        padding: 5,
        height: {
            xs: 150,
            sm: 200,
            md: 350,
        },
        width: {
            xs: 230,
            sm: 280,
            md: 500,
        },
    },
}