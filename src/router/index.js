import { createRouter, createWebHistory } from 'vue-router'
import mainPage from "../views/mainPage";
import logInPage from "../views/logInPage";
import signUpPage from "../views/signUpPage";

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
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router