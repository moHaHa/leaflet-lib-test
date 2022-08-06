<template>
  <div class="test-page">
    <v-sheet class="mb-4" rounded="lg">
      <div class="px-3">
        <v-row no-gutters>
          <v-col cols="12">
            <div class="text-h6">Step 1</div>
            <div class="py-3">
              visit
              <a href="https://geojson.io" target="_blanck">geojson.io</a> to
              draw new map on the current location
            </div>
            <div class="py-2"></div>
            <div class="text-h6">Step 2</div>
            <div class="pt-3">
              when you have done drwing your custom map copy the JSON object and
              paste it here
            </div>
            <div>
              <v-text-field v-model="json" label="JSON object "> </v-text-field>
            </div>
            <div class="py-2"></div>
            <div class="text-h6">Step 3</div>
            <div class="pt-3">
              in geosjon website edit zoom of the map and make sure your cusom
              map is centered and it all visible , then copy the URL of the
              website and paste it here
            </div>
            <div>
              <v-text-field v-model="url" label="url"> </v-text-field>
            </div>
            <div class="py-2"></div>
            <div class="text-h6">Step 4</div>
            <div class="pt-4">
              save the changes and go to back to
              <v-btn text :to="'/jeojson/preview'">prevew page</v-btn>
            </div>
            <div class="mb-3">
              <v-btn @click="update()" color="primary"> save </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-sheet>
    <v-sheet rounded="lg">
      <div class="py-3">
        <v-row no-gutters>
          <v-col>
            <div class="px-3">
              <div :key="elKey">
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
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      L,
      url: "",
      json: '',
      elKey: 0,
      map: undefined,
    };
  },
  computed: {
    ...mapGetters("jeosone", ["mapConfig"]),
  },
  methods: {
    ...mapMutations("jeosone", [
      "setMapViewX",
      "setMapViewY",
      "setMapViewZoom",
      "setMapJeojson",
    ]),
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
       var LeafIcon = L.Icon.extend({
        options: {
          iconSize: [30, 60],
        },
      });
     
      for (let i = 0; i < config.icons.length; i++) {
        const element = config.icons[i];
        const customIcon = new LeafIcon({
          iconUrl: element.iconUrl,
        });
          L.marker([element.x, element.y], {
          icon: customIcon,
        })
          .addTo(this.map)
          .bindPopup(element.description);
      }
    },
    updateURL() {
      let url = `${this.url}`;
      let urlArray = url
        .substring(url.indexOf("#map") + "#map=".length)
        .split("/")
        .map((str) => {
          return Number(str);
        });
      this.setMapViewZoom(urlArray[0]);
      this.setMapViewX(urlArray[1]);
      this.setMapViewY(urlArray[2]);
    },
    updateMap() {
      this.makeMap(this.mapConfig);
    },
    updateGeoJson() {
      this.setMapJeojson(JSON.parse(this.json));
    },
    update() {
      this.elKey += 1;
      this.updateURL();
      this.updateGeoJson();
      setTimeout(() => {
        this.updateMap();
      }, 200);
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
