<template>
  <div class="section">
    <div class="section-inner">
        <div class="section-inner-header">
          {{ content.title }}
        </div>
      <div class="section-inner-items">
        <div class="section-inner-items-item" v-for="item in content.items" :key="item.id">
          <div class="section-inner-items-item-cover">
            <a :href="item.click_url"><img :src="item.image_url" :alt="item.title"></a>
          </div>
          <a :href="item.click_url">
            <abbr :title="item.title">
              <div class="section-inner-items-item-title">
                {{ item.title }}
              </div>
            </abbr>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: Object
  }
}
</script>

<style lang="scss">
@import '~/assets/css/base.scss';
@import '~/assets/css/util.scss';

.section {
  /* height: 4rem; */
  /* background: pink; */
  /* margin-top: .3rem; */
  margin: .1rem auto;
  /* @include flex-h-center; */
  /* max-width: 10rem; */

  &-inner {
    max-width: 10rem;
    &-header {
      font-size: .24rem;
      padding: .2rem .1rem;
      text-align: center;
      font-weight: 700;
      color: $light-green;
      text-shadow: 2px 2px #000;
      /* border-bottom: 5px solid $light-green; */
    }
    &-items {
      display: flex;
      flex-direction: column;
      align-items: center;
      &-item {
        /* background: pink; */
        width: 2.5rem;
        @include flex-column;
        align-items: center;
        margin-bottom: .2rem;

        &-cover {
          height: 2.08rem;
          /* height: 3.12rem; */
          width: 1.56rem;
          /* width: 2.34rem; */
          img {
            width: 100%;
            height: 2.08rem;
          }
        }

        a {
          abbr[title] {
            border-bottom: none !important;
            cursor: inherit !important;
            text-decoration: none !important;
          }
        }
        &-title {
          margin-top: 5px;
          font-weight: 600;
          &:hover {
            color: $light-green;
          }
        }
      }
    }
  }
}

@include atSmall {
  .section {
    margin-top: 0;
    max-width: 10.55rem;
    @include flex-h-center;

    &-inner {
      /* background: pink; */
      max-width: 10.55rem;
      width: 100%;
      /* transform: translateX(.275rem); */
      /* margin-left: .55rem; */
      &-header {
        padding: 0 0 .2rem 0;
        text-align: left;
        text-shadow: none;
        color: #000;
      }

      &-items {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        /* height: 100%; */
        &-item {
          /* flex-basis: 20%; */
          width: 1.56rem;
          /* width: 20%; */
          align-items: start;
          margin-right: .55rem;

          &-title {
            /* width: 100%; */
            width: 1.56rem;
            height: .2rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}

@include atLarge {
  .section-inner {
    transform: translateX(.275rem);
  }
}
</style>
