<template>
  <div class="test-page">
    <v-sheet class="mb-4" rounded="lg">
      <div class="px-3">
        <v-row no-gutters>
          <v-col cols="12">
            <v-row dense>
              <v-col cols="12">
                to add marker visit
                <a href="https://geojson.io" target="_blanck">geojson.io</a>
                again and add marker over your cusom map <br />
                then copy Latitude & Longitude from json file
                <pre class="grey lighten-3 rouned">
                  <code class="grey lighten-3">
                     {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          <mark>36.286452412605286</mark>, <span class="grey lighten-2">// Latitude</span>
          <mark>33.52372726375056</mark> <span class="grey lighten-2">// Longitude</span>
        ]
      }
    },
                  </code>
                </pre>
                and paste here
              </v-col>
              <v-col cols="6">
                <v-text-field v-model="ico.y" label="Latitude"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field v-model="ico.x" label="Longitude"></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="ico.description"
                  label="shop name"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                icon size must be 30px , 60px
                <v-dialog v-model="dialog" width="400">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <v-icon>
                        mdi-alert-circle-outline
                      </v-icon>
                    </v-btn>
                  </template>

                  <v-card>
                   
                    <v-img :src="imgInfo"></v-img>
                    
                  </v-card>
                </v-dialog>
              </v-col>
              <v-col cols="12">
                <v-file-input
                  clearable
                  :loading="loading"
                  prepend-icon="mdi-camera"
                  show-size
                  :label="label"
                  @change="createImageData"
                >
                </v-file-input>
              </v-col>
            </v-row>
            <div class="mb-3">
              <v-btn :disabled="loading" @click="update()" color="primary">
                save
              </v-btn>
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
import imgInfo from '@/assets/docs/icon-size-info.jpg'
import axios from "axios";
import L from "leaflet";
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      imgInfo,
      img: "",
      loading: false,
      componentKey: 0,
      ico: {
        iconUrl: "",
        description: "",
        x: "",
        y: "",
      },
      L,

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
      "addIcon",
    ]),
    async createImageData(file) {
      if (!file) {
        this.ico.iconUrl = "";
        return;
      }
      this.loading = true;
      let formData = new FormData();
      formData.append("fileToUpload", file);
      let res = await axios.post(
        "http://imageupload.mhacd.com/upload.php",
        formData,
        { headers: { "Access-Control-Allow-Headers": "*" } }
      );
      this.loading = false;
      this.ico.iconUrl = res.data;
    },
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

    updateMap() {
      this.makeMap(this.mapConfig);
    },
    updateIcons() {
      this.addIcon({
        x: JSON.parse(this.ico.x),
        y: JSON.parse(this.ico.y),
        iconUrl: this.ico.iconUrl,
        description: this.ico.description,
      });
    },
    update() {
      this.elKey += 1;
      this.updateIcons();
      setTimeout(() => {
        this.updateMap();
      }, 400);
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
