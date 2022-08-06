<template>
  <div class="test-page">
  
    <v-sheet rounded="lg">
      <div class="py-3">
        <v-row no-gutters>
          <v-col>
            <div class="px-3">
              <div >
                <div ref="map" id="map" class="grey"></div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-sheet>
  </div>
</template>

<script>
import L from "leaflet";
import { mapGetters  } from "vuex";
export default {
  data() {
    return {
      L,
      map: undefined,
    };
  },
  computed: {
    ...mapGetters("jeosone", ["mapConfig"]),
  },
  methods: {
   
    makeMap(config) {
      this.map = L.map("map").setView(
        [config.mapViewX, config.mapViewY],
        config.mapViewZoom
      );
      L.tileLayer(config.mapTileLayerUrlTemplate, {
        maxZoom: config.mapTileMaxZoom,
        attribution: "© OpenStreetMap",
      }).addTo(this.map);
      this.map = L.geoJSON(config.mapJeojson).addTo(this.map);
    },
   
    updateMap() {
      this.makeMap(this.mapConfig);
    },
  },
  mounted() {
    this.updateMap();
  },
};
</script>

<style lang="scss">
@import "~leaflet/dist/leaflet.css";
.test-page {
  #map {
    height: 400px;
    overflow: hidden;
  }
}
</style>
