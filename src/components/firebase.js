// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDUxhTcqka1Nh-t7r70DBsmVy4PoQYS_k",
  authDomain: "todoapp-edd9e.firebaseapp.com",
  projectId: "todoapp-edd9e",
  storageBucket: "todoapp-edd9e.appspot.com",
  messagingSenderId: "1092922954054",
  appId: "1:1092922954054:web:8e69668cbb8fb6f5fe1547",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
