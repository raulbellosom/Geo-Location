import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD0BH6D2NabCLbn7TL_mmH9R2SrFyZXXZI",
    authDomain: "crud-rn-fb-33306.firebaseapp.com",
    projectId: "crud-rn-fb-33306",
    storageBucket: "crud-rn-fb-33306.appspot.com",
    messagingSenderId: "406208241607",
    appId: "1:406208241607:web:a8e9964d787da58de0c3e2",
    measurementId: "G-GXMG0BN22J"
  };
  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig);