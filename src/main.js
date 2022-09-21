import Vue from "vue";
import App from "./App.vue";
import * as THREE from "three";
// import { createApp } from "vue";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as dat from "dat.gui";
import gsap from "gsap";
Vue.config.productionTip = false;
// Vue.use(THREE);
// Vue.use(dat);
Vue.prototype.THREE = THREE;
new Vue({
  render: (h) => h(App),
  // createApp,
  OrbitControls,
  gsap,
  THREE,
  dat,
}).$mount("#app");
