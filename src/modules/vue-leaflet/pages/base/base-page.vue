<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-sheet rounded="lg">
          <div class="py-3 px-3">
            <l-map
              style="height: 400px"
              :zoom="zoom"
              :center="center"
              @update:zoom="zoomUpdated"
              @update:center="centerUpdated"
              @update:bounds="boundsUpdated"
            >
              <l-tile-layer
                :url="url"
            
              ></l-tile-layer>
            </l-map>
          </div>
        </v-sheet>
      </v-col>
      <v-col cols="4">
        <v-sheet rounded="lg">
          <div class="px-3 py-3">
            <v-list>
              <v-list-item>Center: {{ center }}</v-list-item>
              <v-list-item>Zoom: {{ zoom }}</v-list-item>
              <v-list-item>
                <div>
                  <div>Bounds:</div>
                  <div class="d-flex flex-column">
                    <div v-for="(k, index) of bounds" :key="index">
                      {{ k }}
                    </div>
                  </div>
                </div>
              </v-list-item>
            </v-list>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
export default {
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 3,
      center: [47.41322, -1.219482],
      bounds: null,
    };
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    },
  },
};
</script>

<style lang="scss">
.vue-leaflet-layout {
  .test-page {
    z-index: 1;
    overflow: hidden;
  }
}
</style>
