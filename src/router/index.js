import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/login", component: () => import("../views/Login.vue") },
        { path: "/signup", component: () => import("../views/SignUp.vue") },
    ]
});

export default router;