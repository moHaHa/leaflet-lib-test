<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-sheet rounded="lg">
          <div class="py-3 px-3">
            <l-map style="height: 400px" :zoom="zoom" :center="center">
              <l-tile-layer :url="url" :attribution="attribution">
              </l-tile-layer>
              <l-marker :lat-lng="[33.51378077346445, 36.2766033411026]">
                <l-icon
                  :icon-size="dynamicSize"
                  :icon-anchor="dynamicAnchor"
                  icon-url="https://i.ibb.co/WPgL6mD/location-on-FILL0-wght400-GRAD0-opsz48-1.png"
                >
                </l-icon>
              </l-marker>
            </l-map>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LIcon } from "vue2-leaflet";
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 8,
      center: [33.51378077346445, 36.2766033411026],
      iconSize: 35
    };
  },
  computed: {
    dynamicSize() {
      return [this.iconSize, this.iconSize * 1.15];
    },
    dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 1.15];
    },
  },
};
</script>
