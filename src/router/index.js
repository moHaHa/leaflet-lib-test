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
    redirect: 'quick-start/test', 
            path: "",
            alias: 'dashboard',
            component: () => import("@/modules/dev-module/pages/dashboard/dashboard-page.vue"),
            children: [
            ],
          },    
        ],
      },
      {
        path: "quick-start",
        component: () => import("@/modules/quick-start/layout/index-layout.vue"),
        children: [
          {
            path: "test",
            component: () => import("@/modules/quick-start/pages/test/test-page"),
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
