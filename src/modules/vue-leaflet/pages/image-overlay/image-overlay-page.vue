<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-sheet rounded="lg">
          <div class="py-3 px-3">
            <l-map style="height: 400px" :zoom="1" :crs="crs" :center="center">
              <l-image-overlay :bounds="bounds" :url="url"></l-image-overlay>
            </l-map>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LMap, LImageOverlay } from "vue2-leaflet";
export default {
  components: {
    LMap,
    LImageOverlay,
  },
  data() {
    return {
      // url: "https://raw.githubusercontent.com/HBO30/public/images/images/leaf-let-project-map-example.png",
      url: "http://leafletjs.com/examples/crs-simple/uqm_map_full.png",
      bounds: [
        [-160, -160],
        [100, 100],
      ],
      crs: L.CRS.Simple,
    };
  },
};
</script>
