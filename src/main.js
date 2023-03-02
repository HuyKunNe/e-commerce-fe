import { createApp } from "vue";
import App from "./App.vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { dom, library } from "@fortawesome/fontawesome-svg-core";

import router from "./router";
import vueClickOutsideElement from "vue-click-outside-element";
import "./assets/css/main.css";

library.add(fas, far, fab);
dom.watch();
createApp(App)
    .use(router)
    .use(vueClickOutsideElement)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");
