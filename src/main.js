import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import pinia from "@/store";
import ant from "ant-design-vue";

import SvgIcon from "@/components/SvgIcon";
import "normalize.css";
import "ant-design-vue/dist/reset.css";
import "./index.css";

const app = createApp(App);
app.use(ant);
app.use(pinia);
app.use(SvgIcon);
app.use(router).mount("#app");
