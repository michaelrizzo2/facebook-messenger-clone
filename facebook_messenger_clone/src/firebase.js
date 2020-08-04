import firebase from "firebase"
const firebaseapp=firebase.initializeApp({apiKey: "AIzaSyDKE9G2HFaK_D51DML8titvDU-xdnOhoqQ",
    authDomain: "facebook-messenger-clone-46e9a.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-46e9a.firebaseio.com",
    projectId: "facebook-messenger-clone-46e9a",
    storageBucket: "facebook-messenger-clone-46e9a.appspot.com",
    messagingSenderId: "585082656588",
    appId: "1:585082656588:web:fca491e605ca116548a1e9",
       measurementId: "G-B6F3X09F30"})


  const db=firebaseapp.firestore()
  export default db;