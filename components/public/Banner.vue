<template>
  <div class="banner">
    <div class="banner-wrapper">
      <div class="banner-wrapper-inner" v-swiper:mySwiper="swiperOption">
        <div class="banner-wrapper-inner-swiper swiper-wrapper">
          <div class="banner-wrapper-inner-swiper-slide swiper-slide" v-for="banner in banners" :key="banner.id">
            <nuxt-link to="/">
              <img :src="banner.image_url" :alt="banner.title">
            </nuxt-link>
          </div>
          <div class="banner-wrapper-inner-swiper-slide swiper-slide">
            <nuxt-link to="/">
              <img src="/imgs/b1.jpg" alt="ww">
            </nuxt-link>
          </div>
          <div class="banner-wrapper-inner-swiper-slide swiper-slide">
            <nuxt-link to="/">
              <img src="/imgs/b2.jpg" alt="ww">
            </nuxt-link>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper';
import { mapState } from 'vuex';

import 'swiper/css/swiper.min.css';

export default {
  data() {
    return {
      swiperOption: {
        breakpoints: {
          480: {
            slidesPerView: 2,
            // spaceBetween: 30
          }
        },
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        // slidesPerGroup: 1,
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false
        // },
        loop: true,
        loopFillGroupWithBlank: false,
        pagination: {
          el: '.swiper-pagination',
          clickable :true
        },
        navigation: {
          nextEl: '.swiper-button-prev',
          prevEl: '.swiper-button-next'
        }
      }
    }
  },
  directives: {
    swiper: directive
  },
  computed: {
    ...mapState({
      banners: state => state.home.banners
    }),
    // swiper() {
    //   return this.$refs.mySwiper.$swiper
    // }
  }
}
</script>

<style lang="scss">
@import '~/assets/css/base.scss';
@import '~/assets/css/util.scss';

.banner {
  margin-top: .9rem;
  width: 100%;
  height: 3rem;

  &-wrapper {
    position: relative;

    &-inner {
      &-swiper {
        /* height: 1.75rem; */
        &-slide {
          @include flex-h-center;
          height: 2rem;
          img {
            /* border-radius: 8px; */
            /* width: 3.6rem; */
            height: 2rem;
            width: 100%;
          }
        }
      }

      .swiper-pagination {
        top: 1.7rem;
        &-bullet {
          background: $light-green;
        }
      }
    }
  }

  .swiper-button-prev, .swiper-button-next {
    display: none;
  }
}

@include atSmall {
  .banner {
    &-wrapper {
      &-inner {
        &-swiper {
          &-slide {
            height: 2rem;
            img {
              border-radius: 8px;
              height: 1.6rem;
              width: 2.6rem;
            }
          }
        }
      }
    }
  }
}

@include atMedium {
  .banner {
    &-wrapper {
      &-inner {
        &-swiper {
          &-slide {
            height: 2.6rem;
            img {
              height: 2.6rem;
              width: 3.9rem;
            }
          }
        }

        .swiper-pagination {
          top: 2.3rem;
        }
      }
    }
  }
}

@include atLarge {
  .banner {
    margin: 1.1rem auto 0 auto;
    height: 4rem;
    width: 11rem;
    @include flex-h-center;
    position: relative;

    &-wrapper {
      width: 10rem;

      &-inner {
        &-swiper {
          height: 3.5rem;
          &-slide {
            height: 3.2rem;
            img {
              width: 4.8rem;
              height: 3.2rem;
            }
          }
        }
        .swiper-pagination {
          width: 2rem;
          top: 3.3rem;
          left: 50%;
          transform: translateX(-50%);
          bottom: 0.55rem;
          height: 0.2rem;

          &-bullet {
            width: 0.12rem;
            height: 0.12rem;
          }
        }

      }

    }
    .swiper-button-prev, .swiper-button-next {
      transform: translateY(-40px);
      color: $light-green;
    }
  }

}
</style>
