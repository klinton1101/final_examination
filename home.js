import React from "react";
import firebase from "../utils/firebase";
import {useHistory} from "react-router-dom";
import { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import {
  Box,
  Typography,
Button,
} from "@mui/material";
//import { Link } from "react-router-dom";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
//
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, getTheme } from "../redux/actions/uiAction";
import { isLogged, logout } from "../redux/actions/isLogged";
import GoogleIcon from "@mui/icons-material/Google";
//import theme from "../utils/theme.js";

import { useEffect } from "react";


const style = {
  h1: {
    fontSize: "3rem",
    
  },

center: {
height: "100%",
width:"100%",
display:"flex",
textAlign:"center",
justifyContent:"center",
alignItems: "center",
marginTop:"200px",
flexDirection:"column",
},

};

const db = firebase.firestore();
//////////////////////////////////////////google login start

const provider = new GoogleAuthProvider();
const auth = getAuth();

//////////////////////////////////////////google login end



export default function Home() {
  const dispatch = useDispatch();
  const history = useHistory();

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


  const ui = useSelector((state) => state.ui);
  const logged = useSelector((state) => state.logged);
  useEffect(() => {
    dispatch(getTheme());
  }, [dispatch]);



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
        localStorage.setItem("active", true);
        dispatch(isLogged(user.displayName));
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

        if(localStorage.getItem("name")==="Klinth Vincent Nicolas"){
            window.location.href = "/indexklinth";
        }
        if(localStorage.getItem("name")==="Marcy Bunag"){
            window.location.href = "/indexmarcy";
        }
        if(localStorage.getItem("name")==="Jeric Ace Valmadrid"){
          window.location.href = "/indexace";
      }
      if(localStorage.getItem("name")==="Elinald Mariano"){
        window.location.href = "/indexeli";
    }

    if(localStorage.getItem("name")==="John Raphael Abejero"){
      window.location.href = "/indexabe";
  }

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
        window.location.href="/";
      })
      .catch((error) => {
        // An error happened.
      });
  };


  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        if(localStorage.getItem("name")==="Klinth Vincent Nicolas"){
          window.location.href = "/indexklinth";
      }
      if(localStorage.getItem("name")==="Marcy Bunag"){
          window.location.href = "/indexmarcy";
      }
      if(localStorage.getItem("name")==="Jeric Ace Valmadrid"){
        window.location.href = "/indexace";
    }
    if(localStorage.getItem("name")==="Elinald Mariano"){
      window.location.href = "/indexeli";
  }
  if(localStorage.getItem("name")==="John Raphael Abejero"){
    window.location.href = "/indexabe";
}

 /*  else{
    window.location.href = "/indexabe";
  } */
        // ...
    }
});


  return (
      <Box sx={style.center}>
    <Typography sx={style.h1}>
        Student Portfolios Compilation
        </Typography>
        <Box>
        <Typography>
                  <br/>
                Log in via:{" "}
              </Typography>
              &nbsp; &nbsp;
              <Button
                variant="contained"
                onClick={loginGoogle}
                // sx={logged.active ? { display: "none" } : { display: "block" }}
               // href={logged.isLogged="Nicolas, Klinth Vincent O"? "/index" : "/contactus"}
              >
                <GoogleIcon sx={{ height: "30px", width: "auto" }} />
              </Button>
           </Box>   
    </Box>
  );
}
