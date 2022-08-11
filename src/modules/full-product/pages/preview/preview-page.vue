<template>
  <v-app class="preview-page">
    <navigation :links="[]">
      <v-btn
        v-if="mapImageUrl"
        text
        @click="$router.push({path:'/full-product/draw'})"
      >
        <span class="mr-2">Draw</span>
      </v-btn>
      <v-btn
        v-if="mapImageUrl"
        text
        @click="$router.push({path:'/full-product/add-markers'})"
      >
        <span class="mr-2">Add Markers</span>
      </v-btn>
      <v-btn
        v-if="mapImageUrl"
        text
        @click="$router.push({path:'/full-product/upload-image'})"
      >
        <span class="mr-2">Edit Image</span>
      </v-btn>
    </navigation>
    <v-main class="preview-page-MODEL-main">
      <v-container class="my-10">
        <v-row justify="center">
          <v-col cols="9" >
            <div>
              <v-sheet rounded="lg">
                <div>
                  <div class="map-container h-100">
                    <l-map
                      style="height: 450px; border-radius: 10px"
                      :zoom="zoom"
                      :crs="crs"
                      :center="center"
                    >
                      <l-image-overlay
                      :bounds="bounds"
                        :url="mapImageUrl"
                      ></l-image-overlay>
                        <l-geo-json :geojson="geoJSON"></l-geo-json>
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
import L from "leaflet";
import navigation from "../../components/nav-bar/nav-bar-component";
import "leaflet/dist/leaflet.css";
import { LMap, LImageOverlay ,LGeoJson  } from "vue2-leaflet";
import { Icon } from "leaflet";
import { mapGetters } from "vuex";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
export default {
  components: {
    LMap,
    LImageOverlay,
    LGeoJson ,
    navigation,
  },
  computed: {
    ...mapGetters("full-product-store", ["mapImageUrl", 'bounds' , 'mapImageWidth' , 'mapImageHeight' , 'geoJSON']),
   center(){
    return [this.mapImageWidth / 2, this.mapImageHeight / 2]
   } 
  },
  data() {
    return {
      zoom: -1,
      crs: L.CRS.Simple,
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
    );
  }
}
</style>
