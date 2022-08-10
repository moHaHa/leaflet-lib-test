<template>
  <v-app class="preview-page">
    <navigation :links="[]">
      <v-btn
        v-if="mapImageUrl"
        text
        @click="$vuetify.goTo('/full-product/preview')"
      >
        <span class="mr-2">Next</span>
      </v-btn>
    </navigation>
    <v-main class="preview-page-MODEL-main">
      <v-container class="my-10">
        <v-row>
          <v-col>
            <div>
              <v-sheet  min-height="70vh" rounded="lg">
                <div class=" h-100">
                  <div class="map-container">
                    <l-map style="height: 500px" :zoom="zoom" :center="center">
                      <l-tile-layer
                        :url="url"
                        :attribution="attribution"
                      ></l-tile-layer>
                      <l-marker :lat-lng="markerLatLng"></l-marker>
                    </l-map>
                  </div>
                </div>
              </v-sheet>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import navigation from "../../components/nav-bar/nav-bar-component";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
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
    LMarker,
    navigation
  },
  computed:{
    
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [51.505, -0.159],
      markerLatLng: [51.504, -0.159],
    };
  },
    created() {
    this.$vuetify.theme.themes.light = {
      primary: "#120543",
      secondary: "#03052C",
      accent: "#3A0473",
    };
  },
};
</script>
<style lang="scss">
.preview-page {
  .preview-page-MODEL-main {
    background-image: repeating-linear-gradient(
      130deg,
      var(--v-primary-base) 0%,
      var(--v-secondary-base) 100%
    )
  }
}
</style>
