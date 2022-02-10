import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCmlnSBcUTfkJlNtqHpnLVBMNKK1us83L0",
  authDomain: "midterm-redux-firebase.firebaseapp.com",
  projectId: "midterm-redux-firebase",
  storageBucket: "midterm-redux-firebase.appspot.com",
  messagingSenderId: "398101678688",
  appId: "1:398101678688:web:d3a4e42d64ed28dd0d9105",
  measurementId: "G-9W314CLYFQ"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export { firebase as default };