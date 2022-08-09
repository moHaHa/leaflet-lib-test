<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <div>
          <v-sheet min-height="70vh" rounded="lg">
            <div class="py-3 px-3 h-100">
              <div>geoman with non geographical map</div>
              <div class="map" id="example2" style="height: 400px"></div>
            </div>
          </v-sheet>
        </div>
      </v-col>
      <v-col cols="4">
        <div>
          <v-sheet min-height="70vh" rounded="lg">
            <div class="py-3 px-3">
              <div class="mb-2">
                <v-badge
                  bordered
                  :value="store.newData"
                  color="warning"
                  dot
                  overlap
                >
                  <v-btn
                    @click="getShapes(store.beautifulGeoJSON)"
                    :disabled="store.beautifulGeoJSON === null"
                    depressed
                  >
                    Get Shapes Data
                  </v-btn>
                </v-badge>
              </div>
              <div>
                {{ beautifulGeoJSON }}
              </div>
            </div>
          </v-sheet>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import "leaflet";
import "@geoman-io/leaflet-geoman-free";
import { Icon } from "leaflet";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
export default {
  data() {
    return {
      beautifulGeoJSON: null,
      store: {
        beautifulGeoJSON: null,
        newData: false,
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      // eslint-disable-next-line no-undef
      // eslint-disable-next-line no-undef
      const map2 = L.map("example2", {
        // eslint-disable-next-line no-undef
        crs: L.CRS.Simple,
        minZoom: -5,
      }).setView([51.505, -0.09], 13);

      map2.pm.addControls({
        editMode: false,
        removalMode: true,
        drawMarker: true,
        drawPolygon: true,
        drawPolyline: true,
        drawCircle: false,
        drawCircleMarker: false,
        cutPolygon: false,
        rotateMode: false,
        drawText: false,
      });
      var bounds = [
        [0, 0],
        [1000, 1000],
      ];
      // eslint-disable-next-line no-undef, no-unused-vars
      var image = L.imageOverlay(
        "https://leafletjs.com/examples/crs-simple/uqm_map_full.png",
        bounds
      ).addTo(map2);
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
