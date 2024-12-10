import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Tables from "@/views/Tables.vue";
import Billing from "@/views/Billing.vue";
import VirtualReality from "@/views/VirtualReality.vue";
import Profile from "@/views/Profile.vue";
import Rtl from "@/views/Rtl.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import Users from "@/views/Users.vue";
import Logout from "@/views/Logout.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard",
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
    meta: { requiresAuth: true },
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
    meta: { requiresAuth: true },
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
    meta: { requiresAuth: true },
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
    meta: { requiresAuth: true },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { requiresAuth: true },
  },
  {
    path: "/rtl-page",
    name: "Rtl",
    component: Rtl,
    meta: { requiresAuth: true },
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: SignIn,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    component: SignUp,
  },
];



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("authToken"); // Cambiar según tu implementación
  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/sign-in");
  } else {
    next();
  }
});

export default router;
