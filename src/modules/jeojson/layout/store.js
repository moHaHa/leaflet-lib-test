export default {
  namespaced: true,
  state: {
    mapConfig: {
      mapViewX: 33.52374,
      mapViewY: 36.28639,
      mapViewZoom: 19,
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
              type: "Polygon",
              coordinates: [
                [
                  [36.286335065960884, 33.523676393761605],
                  [36.28645207732915, 33.523676393761605],
                  [36.28645207732915, 33.523777295193995],
                  [36.286335065960884, 33.523777295193995],
                  [36.286335065960884, 33.523676393761605],
                ],
              ],
            },
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: [
                [36.28645207732915, 33.52377645667841],
                [36.286335065960884, 33.52367723227816],
              ],
            },
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: [
                [36.286336071789265, 33.523777015688786],
                [36.286452412605286, 33.523676673267154],
              ],
            },
          },
        ],
      },
      icons: [
        {
          x: 33.523726984245194,
          y: 36.286393739283085,
          iconUrl: "http://imageupload.mhacd.com/uploads/053019mark (1).png",
          description: "shop name",
        },

        {
          x: 33.52374012099576,
          y: 36.28632500767708,
          iconUrl: "http://imageupload.mhacd.com/uploads/061746mark (1).png",
          description: "aaaaaaaaaaaaaaaaaaaaa",
        },
      ],
    },
  },
  getters: {
    mapConfig(state) {
      return state.mapConfig;
    },
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
    addIcon(state, newIcon) {
      state.mapConfig.icons.push(newIcon);
    },
  },
};
