<template>
  <v-app class="leaflet-geoman-layout">
    <mh-module-nav-bar :links="links" />
    <v-main class="grey lighten-3">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [
    { text: "Test", link: "/geoman-non-geographical/test" },
    ],
  }),
};
</script>
<style lang="scss">
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
