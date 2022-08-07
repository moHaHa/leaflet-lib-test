<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-sheet rounded="lg">
          <div class="py-3 px-3">
            <l-map style="height: 400px" :zoom="zoom" :center="center">
              <l-tile-layer :url="url" :attribution="attribution">
              </l-tile-layer>
              <l-control position="bottomleft">
                <v-btn depressed @click="clickHandler">I am a useless v-btn!</v-btn>
              </l-control>
            </l-map>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LControl } from "vue2-leaflet";
export default {
  components: {
    LMap,
    LTileLayer,
    LControl,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 8,
      center: [33.51378077346445, 36.2766033411026],
    };
  },
};
</script>
