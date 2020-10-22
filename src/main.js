import { createApp } from "vue";
import App from "./App.vue";
import routers from "./router";

const vue = createApp(App);

vue.use(routers);
vue.mount("#app");
