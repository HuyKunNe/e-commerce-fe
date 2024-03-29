import HomePage from "./view/Home.vue";
import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./view/Login.vue";
import RegisterPage from "./view/Register.vue";
import ProfilePage from "./view/Profile.vue";
import AddressPage from "./view/Address.vue";
import CollectionPage from "./view/Collection.vue";
import TestVue from "./view/Test.vue";
const routes = [
    {
        name: "Home",
        component: HomePage,
        path: "/",
        meta: {
            title: "BAD HABITS | BADDEST SINCE 2017 – Bad Habits Official Store",
        },
    },
    {
        name: "ProductModal",
        component: TestVue,
        path: "/test",
        meta: {
            title: "BAD HABITS | BADDEST SINCE 2017 – Bad Habits Official Store",
        },
    },
    {
        name: "Account",
        path: "/account",
        children: [
            {
                name: "Login",
                path: "login",
                component: LoginPage,
                meta: { title: "Tài khoản – Bad Habits Official Store" },
            },
            {
                name: "Register",
                path: "register",
                component: RegisterPage,
                meta: { title: "Tạo tài khoản – Bad Habits Official Store" },
            },
            {
                name: "Profile",
                path: "profile",
                component: ProfilePage,
                meta: { title: "Tài khoản – Bad Habits Official Store" },
            },
            {
                name: "Address",
                path: "address",
                component: AddressPage,
                meta: { title: "Tài khoản – Bad Habits Official Store" },
            },
        ],
    },
    {
        name: "Collection",
        path: "/collection/:collectionName",
        component: CollectionPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach((to) => {
    document.title =
        to.meta.title ||
        "BAD HABITS | BADDEST SINCE 2017 – Bad Habits Official Store";
});

export default router;
