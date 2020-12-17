import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCoIngqJIRoT252HrEiOfw3ccz6OndGIjI",
  authDomain: "hatch-dd603.firebaseapp.com",
  projectId: "hatch-dd603",
  storageBucket: "hatch-dd603.appspot.com",
  messagingSenderId: "1028684078530",
  appId: "1:1028684078530:web:27ac49571ad56574f1ca5b",
  measurementId: "G-3GZP4V5R2N",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.analytics();

export default firebase;
