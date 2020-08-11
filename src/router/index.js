import Vue from "vue";
import Home from "../views/home.vue";
import Camera from "../views/camera.vue";
import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/camera",
    name: "Camera",
    component: Camera
  },
];

const router = new IonicVueRouter({
  // For the offline routing, history mode config is commented out.
  mode: "history",
  // base: process.env.BASE_URL,
  routes
});

export default router;