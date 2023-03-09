import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/login", component: () => import("../views/Login.vue") },
        { path: "/signup", component: () => import("../views/SignUp.vue") },
        { path: "/student", component: () => import("../views/Student.vue") },
        { path: "/forgot", component: () => import("../views/ForgotPassword.vue") },
        { path: "/lecturer", component: () => import("../views/Lecturer.vue") },
        { path: "/lectureralt", component: () => import("../views/Lecturer_alt.vue") },
        { path: "/studentdaily", component: () => import("../views/Daily.vue") }

    ]
});

export default router;