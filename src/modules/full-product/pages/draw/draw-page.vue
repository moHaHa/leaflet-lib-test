<template>
  <v-app class="draw-page">
    <navigation>
      <v-btn
        v-if="mapImageUrl"
        text
        @click="$router.push({ path: '/full-product/preview' })"
      >
        <span class="mr-2">preview</span>
      </v-btn>
    </navigation>
    <v-main class="draw-page-MODEL-main">
      <v-container class="my-10">
        <v-row justify="center">
          <v-col cols="9">
            <div class="mb-2">
              <v-sheet rounded="lg">
                <div class="h-100">
                  <div
                    class="map"
                    id="example2"
                    style="height: 450px; border-radius: 10px"
                  ></div>
                </div>
              </v-sheet>
            </div>
            <div class="d-flex justify-end">
                 <v-badge
                  bordered
                  :value="store.newData"
                  color="white"
                  dot
                  overlap
                >
                  <v-btn depressed outlined color="white"
                
                   @click="getShapes(store.beautifulGeoJSON)"
                   
              >save</v-btn>
                </v-badge>
            
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import "leaflet";
import "@geoman-io/leaflet-geoman-free";
import { Icon } from "leaflet";
import navigation from "../../components/nav-bar/nav-bar-component";
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
import { mapGetters  , mapMutations} from "vuex";
export default {
  components: {
    navigation,
  },
  computed: {
    
    ...mapGetters("full-product-store", [
      "mapImageUrl",
      "bounds",
      "mapImageWidth",
      "mapImageHeight",
      'geoJSON'
    ]),
    center() {
      let y = this.mapImageHeight / 2,
        x = this.mapImageWidth / 2;
      return [x, y];
    },
    beautifulGeoJSON:{
      get(){
        return this.geoJSON
      } ,
      set(newVal){
        this.setGeoJSON(newVal)
      }
    }
  },
  data() {
    return {
      // beautifulGeoJSON: null,
      store: {
        beautifulGeoJSON: null,
        newData: false,
      },
    };
  },
  created() {
    this.$vuetify.theme.themes.light = {
      primary: "#120543",
      secondary: "#03052C",
      accent: "#3A0473",
    };
  },
  mounted() {
    this.$nextTick(() => {
      // eslint-disable-next-line no-undef
      // eslint-disable-next-line no-undef
      const map2 = L.map("example2", {
        // eslint-disable-next-line no-undef
        crs: L.CRS.Simple,
      }).setView(this.center, -1);

      map2.pm.addControls({
        editMode: false,
        removalMode: true,
        drawMarker: false,
        drawPolygon: true,
        drawPolyline: true,
        drawCircle: false,
        drawCircleMarker: false,
        cutPolygon: false,
        rotateMode: false,
        drawText: false,
      });
      var bounds = Array(this.bounds);
      // eslint-disable-next-line no-undef, no-unused-vars
      var image = L.imageOverlay(this.mapImageUrl, bounds).addTo(map2);
      // eslint-disable-next-line no-undef, no-unused-vars
      let geoL = L.geoJSON(this.geoJSON).addTo(map2)
      map2.fitBounds(bounds);
      let fgFun = function () {
        // eslint-disable-next-line no-undef
        var fg = L.featureGroup();
        map2.eachLayer((layer) => {
          // eslint-disable-next-line no-undef
          if (layer instanceof L.Path || layer instanceof L.Marker) {
            fg.addLayer(layer);
          }
        });
        return fg.toGeoJSON();
      };
      this.fillStore(fgFun());
      map2.on("pm:remove", (e) => {
        this.remove({ geojson: fgFun(), e });
      });
      map2.on("pm:globaldrawmodetoggled", (e) => {
        this.globalDrawModeToggled({ geojson: fgFun(), e });
      });
    });
  },
  methods: {
        ...mapMutations("full-product-store", [
      "setGeoJSON",
    ]),
    globalDrawModeToggled({ geojson }) {
      console.log("globalDrawModeToggled");
      this.fillStore(geojson);
    },
    remove({ geojson }) {
      console.log("remove");
      this.fillStore(geojson);
    },
    markerDragend({ geojson }) {
      console.log("markerDragend");
      this.fillStore(geojson);
    },
    fillStore(geojson) {
      this.store.beautifulGeoJSON = geojson;
      this.store.newData = true;
    },
    getShapes(e) {
      this.beautifulGeoJSON = e;
      this.store.newData = false;
    },
  },
};
</script>

<style lang="scss">
@import "~leaflet/dist/leaflet.css";
@import "~@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
</style>
<style lang="scss">
.draw-page {
  .draw-page-MODEL-main {
    background-image: repeating-linear-gradient(
      130deg,
      var(--v-primary-base) 0%,
      var(--v-secondary-base) 100%
    );
  }
}
</style>
