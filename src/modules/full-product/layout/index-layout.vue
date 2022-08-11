<template>
  <transition name="scale" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<script>
import store from "./store.js";
export default {
  created() {
    this.$store.registerModule("full-product-store", store);
    this.$vuetify.theme.themes.light = {
      primary: "#120543",
      secondary: "#03052C",
      accent: "#3A0473",
    };
  },
};
</script>

<style lang="scss">
.theme--light.v-application {
  background-color: #120543;
}
.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
