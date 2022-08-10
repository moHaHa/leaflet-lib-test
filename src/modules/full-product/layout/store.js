export default {
  namespaced: true,
  state: {
    model: {
      mapImageUrl: "",
      mapImageHeight: 500,
      mapImageWidth: 500,
      geoJSON: null,
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
    mapImageHeight(state) {
      return state.model.mapImageHeight;
    },
    mapImageWidth(state) {
      return state.model.mapImageWidth;
    },
    bounds(state) {
        return [[0,0], [state.model.mapImageHeight , state.model.mapImageWidth ]]
    },
    geoJSON(state){
        return state.model.geoJSON
    }
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
    setMapImageHeight(state, payload) {
      state.model.mapImageHeight = payload;
    },
    setMapImageWidth(state, payload) {
      state.model.mapImageWidth = payload;
    },
  },
};
