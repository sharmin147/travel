import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/:uid",
    alias: "/booking/:uid",
    name: "booking",
    component: () => import("./components/BookingList")
  },
  {
    path: "/invoice/:id",
    name: "invoice",
    component: () => import("./components/Invoice")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddTutorial")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;