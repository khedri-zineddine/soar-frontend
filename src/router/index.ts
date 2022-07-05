import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";
import { Mutations, Actions } from "@/store/enums/StoreEnums";
import JwtService from "@/core/services/JwtService";

const Layout = () => import("@/layout/Layout.vue");
const Dashboard = () => import("@/views/Dashboard.vue");

const AuthLayout = () => import("@/components/page-layouts/Auth.vue");
const LoginPage = () =>
    import("@/views/crafted/authentication/basic-flow/SignIn.vue");
const SignupPage = () =>
    import("@/views/crafted/authentication/basic-flow/SignUp.vue");
const ResetPasswordPage = () =>
    import("@/views/crafted/authentication/basic-flow/PasswordReset.vue");

// rapports
const Rapport = () => import("@/views/AttackLayout.vue");
const AnomaliesAttack = () =>
    import("@/views/repports-attacks/AnomaliesAttack.vue");
const EmailPhishing = () =>
    import("@/views/repports-attacks/EmailPhishing.vue");
const SSHBurteForce = () =>
    import("@/views/repports-attacks/SSHBurteForce.vue");
const RansomewareAttack = () =>
    import("@/views/repports-attacks/RansomewareAttack.vue");
const CDODos = () => import("@/views/repports-attacks/CDPDosAttack.vue");
const DHCPSpoof = () => import("@/views/repports-attacks/DHCPSpoofAttack.vue");
const DHCPStarvation = () =>
    import("@/views/repports-attacks/DHCPStarvation.vue");
const HSRPAttack = () => import("@/views/repports-attacks/HSRPAttack.vue");
const PeriodicPing = () => import("@/views/repports-attacks/PeriodicPing.vue");
const STPDos = () => import("@/views/repports-attacks/STPDos.vue");
const STPRoot = () => import("@/views/repports-attacks/STPRoot.vue");

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
                path: "rapport",
                component: Rapport,
                children: [
                    {
                        path: "email-phishing",
                        name: "EmailPhishing",
                        component: EmailPhishing,
                    },
                    {
                        path: "ssh",
                        name: "SSHBruteForce",
                        component: SSHBurteForce,
                    },
                    {
                        path: "anomalies",
                        name: "Anomalies",
                        component: AnomaliesAttack,
                    },
                    {
                        path: "ransomeware",
                        name: "Ransomeware",
                        component: RansomewareAttack,
                    },
                    {
                        path: "cdp-dos",
                        name: "CDPDos",
                        component: CDODos,
                    },
                    {
                        path: "dhcp-spoof",
                        name: "DHCPSpoof",
                        component: DHCPSpoof,
                    },
                    {
                        path: "dhcp-starvation",
                        name: "DHCPStarvation",
                        component: DHCPStarvation,
                    },
                    {
                        path: "hsrp",
                        name: "HSRPAttack",
                        component: HSRPAttack,
                    },
                    {
                        path: "periodic-ping",
                        name: "PeriodicPing",
                        component: PeriodicPing,
                    },
                    {
                        path: "stp-dos",
                        name: "STPDos",
                        component: STPDos,
                    },
                    {
                        path: "stp-root",
                        name: "STPRoot",
                        component: STPRoot,
                    },
                    {
                        path: "",
                        redirect: { name: "EmailPhishing" },
                    },
                ],
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
