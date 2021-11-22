import { createApp } from "vue";
import BootstrapIcon from "@dvuckovic/vue3-bootstrap-icons";
import App from "@/App.vue";
import Router from "@/router";
import "@/styles/all.scss";
import "bootstrap";

createApp(App)
  .use(Router)
  .component("BootstrapIcon", BootstrapIcon)
  .mount("#app");
