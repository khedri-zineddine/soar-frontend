import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";
import { Mutations, Actions } from "@/store/enums/StoreEnums";
import JwtService from "@/core/services/JwtService";

const Layout = () => import("@/layout/Layout.vue");
const Dashboard = () => import("@/views/Dashboard.vue");
const Rapport = () => import("@/views/crafted/pages/profile/Overview.vue");
const AuthLayout = () => import("@/components/page-layouts/Auth.vue");
const LoginPage = () =>
    import("@/views/crafted/authentication/basic-flow/SignIn.vue");
const SignupPage = () =>
    import("@/views/crafted/authentication/basic-flow/SignUp.vue");
const ResetPasswordPage = () =>
    import("@/views/crafted/authentication/basic-flow/PasswordReset.vue");

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/dashboard",
        component: Layout,
        children: [
            {
                path: "/dashboard",
                name: "dashboard",
                component: Dashboard,
            },
            {
                path: "/rapport",
                name: "Rapports",
                component: Rapport,
            },
        ],
    },
    {
        path: "/",
        component: AuthLayout,
        children: [
            {
                path: "/sign-in",
                name: "sign-in",
                component: LoginPage,
            },
            {
                path: "/sign-up",
                name: "sign-up",
                component: SignupPage,
            },
            {
                path: "/password-reset",
                name: "password-reset",
                component: ResetPasswordPage,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(() => {
    // reset config to initial state
    store.commit(Mutations.RESET_LAYOUT_CONFIG);

    store.dispatch(Actions.VERIFY_AUTH, { api_token: JwtService.getToken() });

    // Scroll page to top on every route change
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
});

export default router;
