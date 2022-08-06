export default {
  namespaced: true,
  state: {
    mapConfig: {
      mapViewX: 33.52441,
      mapViewY: 36.28722,
      mapViewZoom: 18,
      mapTileLayerUrlTemplate:
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      mapTileMaxZoom: 22,
      mapJeojson: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: [
                [36.2875172495842, 33.524695464868515],
                [36.28622978925705, 33.52421695573997],
                [36.28643095493317, 33.52392179925638],
                [36.287645995616906, 33.52454788756917],
              ],
            },
          },
        ],
      },
    },
  },
  getters: {
    mapConfig(state){
        return state.mapConfig
    }
  },
  mutations: {
    setMapViewX(state, payload) {
      state.mapConfig.mapViewX = payload;
    },
    setMapViewY(state, payload) {
      state.mapConfig.mapViewY = payload;
    },
    setMapViewZoom(state, payload) {
      state.mapConfig.mapViewZoom = payload;
    },
    setMapJeojson(state, payload) {
      state.mapConfig.mapJeojson = payload;
    },
  },
};
