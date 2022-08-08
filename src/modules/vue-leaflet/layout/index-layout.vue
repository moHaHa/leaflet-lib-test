<template>
  <v-app class="vue-leaflet-layout" id="inspire">
    <mh-module-nav-bar :links="links" />

    <v-main class="grey lighten-3">
      <div
        class="vue-leaflet-layout-relative-router-view"
       
      >
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [
      { text: "Test", link: "/vue-leaflet/test" },
      { text: "Base", link: "/vue-leaflet/base" },
      { text: "Shapes", link: "/vue-leaflet/shapes" },
      { text: "markers", link: "/vue-leaflet/markers" },
      { text: "controls", link: "/vue-leaflet/controls" },
      { text: "geojson", link: "/vue-leaflet/geojson" },
      { text: "Image Overlay", link: "/vue-leaflet/image-overlay" },
      { text: "New", link: "" },
    ],
  }),
};
</script>
<style lang="scss">
.vue-leaflet-layout {
  .vue-leaflet-layout-relative-router-view {
    position: relative;
    z-index: 1;
  }
}
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
