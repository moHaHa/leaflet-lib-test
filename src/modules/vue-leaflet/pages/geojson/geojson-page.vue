<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-sheet rounded="lg">
          <div class="py-3 px-3">
            <l-map style="height: 400px" :zoom="zoom" :center="center">
              <l-tile-layer :url="url" :attribution="attribution">
              </l-tile-layer>
              <l-geo-json :geojson="geojson"></l-geo-json>
            </l-map>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LGeoJson } from "vue2-leaflet";
export default {
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
     zoom: 8,
      center: [47.313220, -1.319482],
      geojson: null,
    };
  },
  async created() {
    const response = await fetch(
      "https://rawgit.com/gregoiredavid/france-geojson/master/regions/pays-de-la-loire/communes-pays-de-la-loire.geojson"
    );
    this.geojson = await response.json();
  },
};
</script>
