// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration, log into Firebase and get the config settings under project settings
const firebaseConfig = {
    apiKey: "AIzaSyA6Cz_d9XiuQmQJLvZg6hK9xnGHlP_v-Eg",
    authDomain: "timetable-management-sys-71448.firebaseapp.com",
    projectId: "timetable-management-sys-71448",
    storageBucket: "timetable-management-sys-71448.appspot.com",
    messagingSenderId: "60058033727",
    appId: "1:60058033727:web:663ab6e3e1bb4d7cade28a"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;