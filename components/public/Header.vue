<template>
  <div class="header-wrapper">
    <div class="header">
      <div class="header-inner">
        <ul class="header-inner-left">
          <nuxt-link to="/"><li><img src="imgs/manga_logo.png" alt="manga_logo"></li></nuxt-link>
          <nuxt-link to="/"><li>首页</li></nuxt-link>
          <nuxt-link to="/"><li>频道</li></nuxt-link>
          <nuxt-link to="/"><li>姘姘推荐</li></nuxt-link>
        </ul>
        <div class="header-inner-right">
          <div class="header-inner-right-searchbox">
            <input type="text" placeholder="搜索书名">
            <div class="fas fa-search"></div>
          </div>
        </div>
        <div class="header-inner-toggle fas fa-bars"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '~/assets/css/base.scss';
@import '~/assets/css/util.scss';

.header-wrapper {
  background: #fff;
  box-shadow: 0px 15px 5px -8px #ededed;
}

.header {
  /* @include atMedium { */
    /* display: flex;
    flex-direction: column; */
    &-inner {
      display: flex;
      flex-direction: column;

      &-left {
        display: flex;
        flex-direction: column;
        /* background: pink; */
        padding: .2rem;

        a:not(:first-child) {
          @include flex-h-center;
          width: 100%;
          transition: all .2s;

          &:hover {
            color: $light_green;
            border-right: 4px solid $light_green;
          }
        }
        img {
          width: 1.9rem;
        }

        li {
            font-size: .18rem;
            font-weight: 900;
            height: .5rem;
            line-height: .5rem;
        }
      }

      &-right {
        @include flex-h-center;
        &-searchbox {
          background:$global_background;
          height: .48rem;
          @include flex-v-center;
          border-radius: .24rem;
          padding: 0 .17rem;

          input {
            background:pink;
            height: .4rem;
            background:$global_background;
            @include remove-input-style;

            &::placeholder {
              color: #999999;
            }
          }

          .fas {
            color: #CCCCCC;

            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  /* } */

  @include atLarge {
    @include flex-h-center;
    &-inner {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: .8rem;
      width: 100%;
      max-width: 10rem;
      background-color: #fff;

      &-left {
        width: 50%;
        @include flex-v-center;
        justify-content: space-between;
        padding: 0;
        /* img {
          width: 1.9rem;
        } */

        a:not(:first-child) {
          @include flex-v-h-center;
          height: 100%;
          width: .72rem;
          min-width: .8rem;
          line-height: .8rem;
          /* box-sizing: content-box; */
          /* transition: all .2s; */

          &:hover {
            /* color: $light_green; */
            border-bottom: 4px solid $light_green;
            border-right: none;
            li {
              transform: translateY(2px);
            }
          }


          /* li {
            font-size: .18rem;
            font-weight: 900; */
            /* line-height: .8rem;
          } */
        }

      }

      &-right {
        @include flex-v-center;

        /* &-searchbox {
          background:$global_background;
          height: .48rem;
          @include flex-v-center;
          border-radius: .24rem;
          padding: 0 .17rem;

          input {
            background:pink;
            height: .4rem;
            background:$global_background;
            @include remove-input-style;

            &::placeholder {
              color: #999999;
            }
          }

          .fas {
            color: #CCCCCC;

            &:hover {
              cursor: pointer;
            }
          }
        } */

      }

    }
  }
}
</style>
