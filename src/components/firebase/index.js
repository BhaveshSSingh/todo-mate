import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBec5P5l50T2ayu9JkJou5Z7DV9dp-UNYM",
  authDomain: "todo-mate-clone.firebaseapp.com",
  projectId: "todo-mate-clone",
  storageBucket: "todo-mate-clone.appspot.com",
  messagingSenderId: "309419271048",
  appId: "1:309419271048:web:5db32b48c82aa07f3c903d",
  measurementId: "G-R4JGZMG6F6",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
