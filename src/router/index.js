import { createRouter, createWebHistory } from 'vue-router';
import firebase from '../api/firebase.js'
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth" ;
import app from '../api/firebase.js';
import { getFunctions, httpsCallable } from "firebase/functions";

const functions = getFunctions(app);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/login", component: () => import("../views/Login.vue") },
        { path: "/signup", component: () => import("../views/SignUp.vue") },
        { path: "/forgot", component: () => import("../views/ForgotPassword.vue") },
        { path: "/student", component: () => import("../views/Student.vue"), beforeEnter: isAuthStudent},
        { path: "/lecturer", component: () => import("../views/Lecturer.vue"), beforeEnter: isAuthLecturer },
        { path: "/daily", component: () => import("../views/Daily.vue"), beforeEnter: isAuthStudent },
        { path: "/", redirect: "/login"},
    ]
});

function isAuthLecturer(to, from, next) {
    const auth = getAuth(app);

    onAuthStateChanged(auth, (user) => {
        if(user) {
            const getAccessLevel = httpsCallable(functions, "getAccessLevel");
            const email = auth.currentUser.email;
            const data = {
                email: email,
            };
            getAccessLevel(data).then((result) => {
                if (result.data.accessLevel === "lecturer") {
                    return next();
                } else {
                    return next({ path: "/login" });
                }
            });
        } else {
            return next({ path: "/login" })
        }
    });
}

function isAuthStudent(to, from, next) {
    const auth = getAuth(app);

    onAuthStateChanged(auth, (user) => {
        if(user) {
            const getAccessLevel = httpsCallable(functions, "getAccessLevel");
            const email = auth.currentUser.email;
            const data = {
                email: email,
            };
            getAccessLevel(data).then((result) => {
                if (result.data.accessLevel === "student") {
                    return next();
                } else {
                    return next({ path: "/login" });
                }
            });
        } else {
            return next({ path: "/login" })
        }
    });
}

export default router;
