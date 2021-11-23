import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Bus from "@/components/Bus.vue";
import Stop from "@/components/Stop.vue";
import Transport from "@/components/Transport.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

export default router;
