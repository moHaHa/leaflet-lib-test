<template>
  <router-view></router-view>
</template>

<script>
import store from './store.js'
export default {
  created(){
    this.$store.registerModule('full-product-store', store)
  }
}
</script>

<style>

</style>