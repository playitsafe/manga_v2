export const state = () => ({
  banners: [],
  sections: []
})

export const mutations = {
  setBanners(state, val) {
    state.banners = val;
  },
  setSections(state, val) {
    state.sections = val;
  }
}

export const actions = {
  setBanners: ({ commit }, banners) => {
    commit('setBanners', banners)
  },
  setSections: ({ commit }, sections) => {
    commit('setSections', sections)
  }
}
