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
          {
            path: "shapes",
            component: () => import("@/modules/vue-leaflet/pages/shapes/shapes-page"),
            children: [
            ],
          },   
          {
            path: "markers",
            component: () => import("@/modules/vue-leaflet/pages/markers/markers-page"),
            children: [
            ],
          },   
          {
            path: "controls",
            component: () => import("@/modules/vue-leaflet/pages/controls/controls-page"),
            children: [
            ],
          },   
          {
            path: "geojson",
            component: () => import("@/modules/vue-leaflet/pages/geojson/geojson-page"),
            children: [
            ],
          },   
          {
            path: "image-overlay",
            component: () => import("@/modules/vue-leaflet/pages/image-overlay/image-overlay-page"),
            children: [
            ],
          },   
        ]
      },
      {
        path: "leaflet-geoman",
        component: () => import("@/modules/leaflet-geoman/layout/index-layout.vue"),
        children: [
          {
            path: "test",
            component: () => import("@/modules/leaflet-geoman/pages/test/test-page"),
            children: [
            ],
          },   
        ]
      },
      {
        path: "geoman-non-geographical",
        component: () => import("@/modules/geoman-non-geographical/layout/index-layout.vue"),
        children: [
          {
            path: "test",
            component: () => import("@/modules/geoman-non-geographical/pages/test/test-page"),
            children: [
            ],
          },   
        ]
      }
    ],
  },
  {
    path: '/full-product',
    component:()=> import('@/app/App.vue'),
    children: [
      {
        path: '',
        alias:'layout',
        component:()=> import('@/modules/full-product/layout/index-layout'),
        children: [
          {
            path: "",
            alias:'main-layout',
            component: () => import("@/modules/full-product/layouts/main/main-layout.vue"),
            children: [
              {
                path:'home',
                component:()=> import('@/modules/full-product/pages/home/home-page.vue')
              },
              
            ]
          },
          {
            path: "",
            alias:'full-layout',
            component: () => import("@/modules/full-product/layouts/full/full-layout.vue"),
            children: [
              {
                path:'upload-image',
                component:()=> import('@/modules/full-product/pages/upload-image/upload-image-page.vue')
              },
              
            ]
          },
          {
            path: "",
            alias:'full-layout',
            component: () => import("@/modules/full-product/layouts/full/full-layout.vue"),
            children: [
              {
                path:'preview',
                component:()=> import('@/modules/full-product/pages/preview/preview-page.vue')
              },
              
            ]
          },
          {
            path: "",
            alias:'full-layout',
            component: () => import("@/modules/full-product/layouts/full/full-layout.vue"),
            children: [
              {
                path:'draw',
                component:()=> import('@/modules/full-product/pages/draw/draw-page.vue')
              },
              
            ]
          }
        ]
      }
    ]
  }
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
