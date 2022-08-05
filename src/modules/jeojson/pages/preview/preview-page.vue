<template>
  <div class="test-page">
    <v-sheet min-height="70vh" rounded="lg">
      <div class="py-3 px-3 h-100">
        <div id="map" class="grey"></div>
      </div>
    </v-sheet>
  </div>
</template>

<script>
import storeMap from './store-map'
import L from "leaflet";
export default {
  data() {
    return {
      L,
      map: undefined,
    };
  },
  methods: {
    makeMap() {
      this.map = L.map("map").setView([33.5244122,36.2872257] , 19);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 22,
        attribution: "© OpenStreetMap",
      }).addTo(this.map);
      this.map = L.geoJSON(storeMap).addTo(this.map);
    },
  },
  mounted() {
    this.makeMap();
  },
};
</script>

<style lang="scss">
@import '~leaflet/dist/leaflet.css';
.test-page {
  #map {
    height: 400px;
    overflow: hidden;
  }
}
</style>
