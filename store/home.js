export const state = () => ({
  banners: []
})

export const mutations = {
  setBanners(state, val) {
    state.banners = val;
  }
}

export const actions = {
  setBanners: ({ commit }, banners) => {
    commit('setBanners', banners)
  }
}
