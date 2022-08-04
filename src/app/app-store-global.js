export default {
  namespaced: true,
  state: {
    name: "app-store-global",
  },
  getters: {
    name(state) {
      return state.name;
    },
  },
  mutations: {
    setName(state, payload) {
      state.name = payload;
    },
  },
  actions: {
    chagneName({ commit }, newName) {
      commit("setName", newName);
    },
  },
};
