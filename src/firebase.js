import  firebase from 'firebase/app'
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAdyp76v4k0Hl457v_s0e5xBq_7VTeo0hs",
    authDomain: "crud-movies-5aa8a.firebaseapp.com",
    projectId: "crud-movies-5aa8a",
    storageBucket: "crud-movies-5aa8a.appspot.com",
    messagingSenderId: "751223582853",
    appId: "1:751223582853:web:0f798be68ba02e754939ec",
    measurementId: "G-K7Y741QV6M"
  };
  // Initialize Firebase
  var firedb=firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  // firebase.initializeApp({ ... })


  export default firedb.database().ref();