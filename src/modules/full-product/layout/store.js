export default {
  namespaced: true,
  state: {
    model: {
      mapImageUrl: "",
      bounds: [
        [0, 0],
        [1000, 1000],
      ],
      geoJSON: {},
      points: [],
    },
  },
  getters: {
    getModel(state) {
      return state.model;
    },
    mapImageUrl(state) {
      return state.model.mapImageUrl;
    },
  },
  mutations: {
    setMapImageUrl(state, payload) {
      state.model.mapImageUrl = payload;
    },
    setGeoJSON(state, payload) {
      state.model.geoJSON = payload;
    },
    setPoints(state, payload) {
      state.model.points = payload;
    },
  },
};
