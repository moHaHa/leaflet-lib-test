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
        alias: 'dev',
        component: () => import("@/modules/dev-module/layouts/full/full-layout.vue"),
        children: [
          {
            path: "",
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
          {
            path: "other",
            component: () => import("@/modules/quick-start/pages/other/other-page"),
            children: [
            ],
          },    
        ],
      },
      {
        path: "jeojson",
        component: () => import("@/modules/jeojson/layout/index-layout.vue"),
        children: [
          {
            path: "preview",
            component: () => import("@/modules/jeojson/pages/preview/preview-page"),
            children: [
            ],
          },    
          {
            path: "other",
            component: () => import("@/modules/jeojson/pages/other/other-page"),
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
