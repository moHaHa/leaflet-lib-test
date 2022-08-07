<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-sheet rounded="lg">
          <div class="py-3 px-3">
            <l-map style="height: 400px" :zoom="zoom" :center="center">
              <l-tile-layer
                :url="url"
                :attribution="attribution"
              ></l-tile-layer>
              <l-circle
                :visible="shapes.show.circle"
                :lat-lng="circle.center"
                :radius="circle.radius"
                :color="shapes.color.circle"
              />
              <l-polyline
                :lat-lngs="polyline.latlngs"
                :visible="shapes.show.polyline"
                :color="shapes.color.polyline"
              ></l-polyline>
              <l-polygon
                :visible="shapes.show.polygon"
                :color="shapes.color.polygon"
                :lat-lngs="polygon.latlngs"
              ></l-polygon>
              <l-rectangle
                :bounds="rectangle.bounds"
                :l-style="rectangle.style"
                  :visible="shapes.show.rectangle"
                :color="shapes.color.rectangle"
              ></l-rectangle>
            </l-map>
          </div>
        </v-sheet>
      </v-col>
      <v-col cols="4">
        <v-sheet rounded="lg">
          <div class="px-3 py-3">
            <v-list>
              <v-list-item>
                <div class="d-flex py-2 align-center w-100">
                  <div class="me-2">Circle</div>
                  <div class="me-2">
                    <v-btn
                      depressed
                      small
                      icon
                      @click="shapes.show.circle = !shapes.show.circle"
                    >
                      <v-icon>
                        {{
                          shapes.show.circle ? "mdi-eye" : "mdi-eye-off-outline"
                        }}
                      </v-icon>
                    </v-btn>
                  </div>

                  <div class="ms-auto" style="width: 150px">
                    <mh-color-picker v-model="shapes.color.circle">
                    </mh-color-picker>
                  </div>
                </div>
              </v-list-item>
              <v-list-item>
                <div class="d-flex py-2 align-center w-100">
                  <div class="me-2">Polygon</div>
                  <div class="me-2">
                    <v-btn
                      depressed
                      small
                      icon
                      @click="shapes.show.polygon = !shapes.show.polygon"
                    >
                      <v-icon>
                        {{
                          shapes.show.polygon
                            ? "mdi-eye"
                            : "mdi-eye-off-outline"
                        }}
                      </v-icon>
                    </v-btn>
                  </div>

                  <div class="ms-auto" style="width: 150px">
                    <mh-color-picker v-model="shapes.color.polygon">
                    </mh-color-picker>
                  </div>
                </div>
              </v-list-item>
              <v-list-item>
                <div class="d-flex py-2 align-center w-100">
                  <div class="me-2">Polyline</div>
                  <div class="me-2">
                    <v-btn
                      depressed
                      small
                      icon
                      @click="shapes.show.polyline = !shapes.show.polyline"
                    >
                      <v-icon>
                        {{
                          shapes.show.polyline
                            ? "mdi-eye"
                            : "mdi-eye-off-outline"
                        }}
                      </v-icon>
                    </v-btn>
                  </div>

                  <div class="ms-auto" style="width: 150px">
                    <mh-color-picker v-model="shapes.color.polyline">
                    </mh-color-picker>
                  </div>
                </div>
              </v-list-item>
              <v-list-item>
                <div class="d-flex py-2 align-center w-100">
                  <div class="me-2">Rectangle</div>
                  <div class="me-2">
                    <v-btn
                      depressed
                      small
                      icon
                      @click="shapes.show.rectangle = !shapes.show.rectangle"
                    >
                      <v-icon>
                        {{
                          shapes.show.rectangle
                            ? "mdi-eye"
                            : "mdi-eye-off-outline"
                        }}
                      </v-icon>
                    </v-btn>
                  </div>

                  <div class="ms-auto" style="width: 150px">
                    <mh-color-picker v-model="shapes.color.rectangle">
                    </mh-color-picker>
                  </div>
                </div>
              </v-list-item>
            </v-list>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import "leaflet/dist/leaflet.css";
import {
  LMap,
  LTileLayer,
  LCircle,
  LPolygon,
  LPolyline,
  LRectangle,
} from "vue2-leaflet";
export default {
  components: {
    LMap,
    LTileLayer,
    LCircle,
    LPolygon,
    LPolyline,
    LRectangle,
  },
  data() {
    return {
      shapes: {
        show: {
          circle: true,
          polygon: true,
          polyline: true,
          rectangle: true,
        },
        color: {
          circle: "pink",
          polygon: "#20FFE0ED",
          polyline: "#DF4DFF",
          rectangle: "#630505",
        },
      },

      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 8,
      center: [47.31322, -1.319482],
      circle: {
        center: [47.41322, -1.0482],
        radius: 4500,
      },
      polygon: {
        latlngs: [
          [47.2263299, -1.6222],
          [47.21024000000001, -1.6270065],
          [47.1969447, -1.6136169],
          [47.18527929999999, -1.6143036],
          [47.1794457, -1.6098404],
          [47.1775788, -1.5985107],
          [47.1676598, -1.5753365],
          [47.1593731, -1.5521622],
          [47.1593731, -1.5319061],
          [47.1722111, -1.5143967],
          [47.1960115, -1.4841843],
          [47.2095404, -1.4848709],
          [47.2291277, -1.4683914],
          [47.2533687, -1.5116501],
          [47.2577961, -1.5531921],
          [47.26828069, -1.5621185],
          [47.2657179, -1.589241],
          [47.2589612, -1.6204834],
          [47.237287, -1.6266632],
          [47.2263299, -1.6222],
        ],
      },
      polyline: {
        latlngs: [
          [47.334852, -1.509485],
          [47.342596, -1.328731],
          [47.241487, -1.190568],
          [47.234787, -1.358337],
        ],
        color: "green",
      },
      rectangle: {
        bounds: [
          [47.341456, -1.397133],
          [47.303901, -1.243813],
        ],
        style: { weight: 3 },
      },
    };
  },
};
</script>
