import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyA6Cz_d9XiuQmQJLvZg6hK9xnGHlP_v-Eg",

    authDomain: "timetable-management-sys-71448.firebaseapp.com",
  
    projectId: "timetable-management-sys-71448",
  
    storageBucket: "timetable-management-sys-71448.appspot.com",
  
    messagingSenderId: "60058033727",
  
    appId: "1:60058033727:web:663ab6e3e1bb4d7cade28a",
  
    measurementId: "G-6H05LBM8T3"
}
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();