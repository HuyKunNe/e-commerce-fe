import HomePage from "./view/Home.vue";
import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./view/Login.vue";
import RegisterPage from "./view/Register.vue";
import ProfilePage from "./view/Profile.vue";
const routes = [
    {
        name: "Home",
        component: HomePage,
        path: "/",
    },
    {
        name: "Account",
        path: "/account",
        children: [
            {   
                name: "Login",
                path: "login",
                component: LoginPage,
            },
            {   
                name: "Register",
                path: "register",
                component: RegisterPage,
            },
            {   
                name: "Profile",
                path: "profile",
                component: ProfilePage,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
