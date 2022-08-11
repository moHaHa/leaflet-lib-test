<template>
  <v-app-bar app :color="'transparent'" :flat="true" dark class="px-15 pt-3">
    <v-toolbar-title>
      <router-link :to="logoLink">
        <logo-component :width="60"></logo-component>
      </router-link>
    </v-toolbar-title>
    <v-spacer />
    <v-app-bar-nav-icon
      class="mr-4"
      v-if="false"
    />

    <div v-else>
      <v-btn v-for="link , index in links" :key="index" text @click="$vuetify.goTo(link.link)">
        <span class="mr-2">{{link.text}}</span>
      </v-btn>
    </div>
        <div>
        <slot></slot>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    logoLink:{
      type: String,
      default: ()=> '/full-product',
    },
    links: {
      type: Array,
    },
  },
};
</script>

<style></style>
