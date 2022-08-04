import Vue from "vue";
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/app/App.vue"),
    children: [
      {
        path: "",
        component: () => import("@/modules/dev-module/layouts/full/full-layout.vue"),
        children: [
          {
            path: "",
            alias: '/dashboard',
            component: () => import("@/modules/dev-module/pages/dashboard/dashboard-page.vue"),
            children: [
              
            ],
          },    
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  },
  routes,
});

export default router;
