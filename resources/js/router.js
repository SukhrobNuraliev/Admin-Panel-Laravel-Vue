import VueRouter from "vue-router";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile.vue";
import Users from "./components/Users.vue";

const routes = [
    {
        path: "/",
        component: Dashboard
    },
    {
        path: "/dashboard",
        component: Dashboard
    },
    {
        path: "/profile",
        component: Profile
    },
    {
        path: "/users",
        component: Users
    }
];

export default new VueRouter({
    routes,
    mode: "history",
    linkActiveClass: "active"
});
