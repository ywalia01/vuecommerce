import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/product/:productID",
      name: "Product",
      component: () => import("../views/ProductView.vue"),
    },
    {
      path: "/shop/:shopID",
      name: "Shop",
      component: () => import("../views/ShopView.vue"),
    },
    {
      path: "/category/:categoryID",
      name: "Category",
      component: () => import("../views/CategoryView.vue"),
    },
    {
      path: "/cart",
      name: "Cart",
      component: () => import("../views/CartView.vue"),
    },
    {
      path: "/checkout",
      name: "CheckOut",
      component: () => import("../views/CheckOutView.vue"),
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("../views/UserProfileView.vue"),
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import("../views/DashboardView.vue"),
    },
    {
      path: "/admin",
      component: () => import("../views/admin/AdminView.vue"),
      children: [
        {
          path: "",
          name: "AdminHome",
          component: () => import("../views/admin/AdminHome.vue"),
        },
        {
          path: "users",
          name: "AdminUsers",
          component: () => import("../views/admin/AdminUsers.vue"),
        },
        {
          path: "shops",
          name: "AdminShops",
          component: () => import("../views/admin/AdminShops.vue"),
        },
        {
          path: "products",
          name: "AdminProducts",
          component: () => import("../views/admin/AdminProducts.vue"),
        },
      ],
    },
  ],
});

export default router;
