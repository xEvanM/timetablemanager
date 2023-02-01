import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/login", component: () => import("../views/Login.vue") },
        { path: "/signup", component: () => import("../views/SignUp.vue") },
        { path: "/student", component: () => import("../views/Student.vue") },
    ]
});

export default router;