<template>
  <div class="container">
    <Header />
    <Banner />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  head: {
    title: '漫书MangaBook | 每天更新的漫画书！'
  },
  // computed: {
  //   ...mapState({
  //     sections: state => state.home.homeSections
  //   })
  // },
  async fetch({ store, app }) {
    let [ banners ] = await Promise.all([
      app.$axios.get('/homepage/promotions').then( res => res.status === 200 && res.data.status === 'success' ? res.data.data.banners : [] )
    ]);

    store.commit('home/setBanners', banners);
  }

}
</script>

<style lang="scss">

</style>
