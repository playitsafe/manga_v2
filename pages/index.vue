<template>
  <div class="container">
    <Header />
    <Banner />
    <Section v-for="section in sections" :key="section.id" :content="section" />
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  head: {
    title: '漫书MangaBook | 每天更新的漫画书！'
  },
  computed: {
    ...mapState({
      sections: state => state.home.sections
    })
  },
  async fetch({ store, app }) {
    let [ banners, sections ] = await Promise.all([
      app.$axios.get('/homepage/promotions').then( res => res.status === 200 && res.data.status === 'success' ? res.data.data.banners : [] ),
      app.$axios.get('/homepage/recommendations').then( res => res.status === 200 && res.data.status === 'success' ? res.data.data : [] ),
    ]);

    store.commit('home/setBanners', banners);
    store.commit('home/setSections', sections);
  }

}
</script>

<style lang="scss">

</style>
