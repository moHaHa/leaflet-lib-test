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
            path: "edit-jeojson",
            component: () => import("@/modules/jeojson/pages/edit-jeojson/edit-jeojson-page"),
            children: [
            ],
          },    
          {
            path: "add-marker",
            component: () => import("@/modules/jeojson/pages/add-marker/add-marker-page"),
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
      {
        path: "vue-leaflet",
        component: () => import("@/modules/vue-leaflet/layout/index-layout.vue"),
        children: [
          {
            path: "test",
            component: () => import("@/modules/vue-leaflet/pages/test/test-page"),
            children: [
            ],
          },   
          {
            path: "base",
            component: () => import("@/modules/vue-leaflet/pages/base/base-page"),
            children: [
            ],
          },   
        ]
      }
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
