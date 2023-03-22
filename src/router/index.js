import { createRouter, createWebHistory } from 'vue-router';
import firebase from '../api/firebase.js'
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth" ;
import app from '../api/firebase.js';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/login", component: () => import("../views/Login.vue") },
        { path: "/signup", component: () => import("../views/SignUp.vue") },
        { path: "/student", component: () => import("../views/Student.vue"), beforeEnter: isAuth  },
        { path: "/forgot", component: () => import("../views/ForgotPassword.vue") },
        { path: "/lecturer", component: () => import("../views/Lecturer.vue") },
        { path: "/lectureralt", component: () => import("../views/LecturerAlt.vue") },
        { path: "/daily", component: () => import("../views/Daily.vue"), beforeEnter: isAuth  }
    ]
});

function isAuth(to, from, next) {
    console.log("Checking auth");
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user);
            // User is signed in so continue to desired page
            return next();
            // ...
        } else {
            // User is signed out
            // Send them back to the home page or maybe the login page
            return next({path: '/login'});
        }
    });
}

export default router;
