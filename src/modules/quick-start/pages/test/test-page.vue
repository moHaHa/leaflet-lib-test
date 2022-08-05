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
      this.map = L.map("map").setView([51.505, -0.09] , 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 22,
        attribution: "© OpenStreetMap",
      }).addTo(this.map);
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
