<template>
  <v-app id="inspire">

<mh-module-nav-bar :links="links">

</mh-module-nav-bar>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item
                  v-for="n in 5"
                  :key="n"
                  link
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      List Item {{ n }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  link
                  color="grey lighten-4"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      Refresh
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <transition name="scale" mode="out-in">
                 <router-view></router-view>
             </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import store from './store.js'
  export default {
    data: () => ({
    
      links:[
        {text: 'preview', link: '/jeojson/preview'},
        {text: 'edit jeoJSON ', link: '/jeojson/edit-jeojson'},
        {text: 'add marker ', link: '/jeojson/add-marker'},
      ]
    }),
    created() {
      this.$store.registerModule('jeosone' , store)
    }
  }
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