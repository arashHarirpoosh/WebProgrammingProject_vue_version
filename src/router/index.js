import { createRouter, createWebHistory } from 'vue-router'
import mainPage from "../views/mainPage";
import logInPage from "../views/logInPage";

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
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router