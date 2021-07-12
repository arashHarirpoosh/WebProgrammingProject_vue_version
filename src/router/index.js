import { createRouter, createWebHistory } from 'vue-router'
import mainPage from "../views/mainPage";
import logInPage from "../views/logInPage";
import signUpPage from "../views/signUpPage";
import adminCategoryLists from "../views/adminCategoryLists";
import userReceipts from "../views/userReceipts";
import adminReceipts from "../views/adminReceipts";
import adminProducts from "../views/adminProducts";

const routes = [
    {
        path: '/main',
        name: 'MainPage',
        component: mainPage,
    },

    {
        path: '/logIn',
        name: 'LogInPage',
        component: logInPage,
    },

    {
        path: '/signUp',
        name: 'SignUpPage',
        component: signUpPage,
    },

    {
        path: '/adminProfile',
        name: 'adminCategoryLists',
        component: adminCategoryLists,
    },

    {
        path: '/usrReceipts',
        name: 'userReceipts',
        component: userReceipts,
    },

    {
        path: '/adminReceipts',
        name: 'adminReceipts',
        component: adminReceipts,
    },

    {
        path: '/adminProducts',
        name: 'adminProducts',
        component: adminProducts,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router