<template>
  <div class="header-wrapper" id="header">
    <div class="header">
      <div class="header-inner" :style="cssVars">
        <ul class="header-inner-left">
          <div class="header-inner-left-logo">
            <nuxt-link to="/">
              <li>
                <img src="imgs/manga_logo.png" alt="manga_logo">
              </li>
              <!-- <div class="header-inner-left-burger"><i class="fas fa-bars"></i></div> -->
            </nuxt-link>
            <div id="closeBtn" class="header-inner-left-logo-close" @click="onClickClose"><i class="far fa-times-circle"></i></div>
            <div id="burgerBtn" class="header-inner-left-logo-menu" @click="onClickBurger"><i class="fas fa-hamburger"></i></div>
          </div>
          <div class="header-inner-left-menu">
            <nuxt-link to="/"><li>首页</li></nuxt-link>
            <nuxt-link to="/"><li>频道</li></nuxt-link>
            <nuxt-link to="/"><li>姘姘推荐</li></nuxt-link>

          </div>
        </ul>
        <div class="header-inner-right">
          <div class="header-inner-right-wrapper">
            <div class="header-inner-right-wrapper-searchbox">
              <input type="text" placeholder="搜索书名">
              <div class="fas fa-search"></div>
            </div>
          </div>
        </div>
        <!-- <div class="header-inner-toggle far fa-times-circle"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  computed: {
    cssVars() {
      return {
        '--showBurgerBtn': this.showMenu ? 'none' : 'block',
        '--showCloseBtn': this.showMenu ? 'block' : 'none',
        '--headerHeight': this.showMenu ? '100%' : '.8rem'
      }
    }
  },
  methods: {
    listenHandler(e) {
      let clickedOnClose = document.getElementById('closeBtn').contains(e.target);
      let clickedInHeader = document.getElementById('header').contains(e.target);
      console.log('clickced')

      if (!clickedInHeader) {
        e.stopPropagation()
        window.removeEventListener('click', this.listenHandler);
        console.log('removed')
        this.showMenu = false;
      }

    },
    onClickBurger() {
      this.showMenu = true;
      window.addEventListener('click', this.listenHandler);
    },
    onClickClose() {
      this.showMenu = false;
      window.removeEventListener('click', this.listenHandler);
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/css/base.scss';
@import '~/assets/css/util.scss';

.header-wrapper {
  background: #fff;
  box-shadow: 0px 15px 5px -8px #ededed;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.header {
    &-inner {
      display: flex;
      flex-direction: column;
      height: var(--headerHeight);
      /* transition: height .2s; */
      &-left {
        display: flex;
        flex-direction: column;
        padding: .15rem;

        &-logo {
          @include flex-v-center;
          justify-content: space-between;

          i::before {
            font-size: .3rem;
            color: $light_green;
          }

          &-close {
            display: var(--showCloseBtn);
            &:hover {
              cursor: pointer;
            }
          }

          &-menu {
            display: var(--showBurgerBtn);
            &:hover {
              cursor: pointer;
            }
          }

        }

        &-menu {
          display: var(--showCloseBtn);;
          a {
            @include flex-h-center;
            width: 100%;
            transition: all .2s;

            &:hover {
              color: $light_green;
              border-right: 4px solid $light_green;
            }
          }

        }

        img {
          width: 1.9rem;
          height: .45rem;
        }

        li {
            font-size: .18rem;
            font-weight: 900;
            height: .5rem;
            line-height: .5rem;
        }
      }

      &-right {
        display: var(--showCloseBtn);
        &-wrapper {
          @include flex-v-h-center;
          &-searchbox {
            background: $global_background;
            height: .48rem;
            width: 70%;
            @include flex-v-center;
            justify-content: space-between;
            border-radius: .24rem;
            padding: 0 .17rem;

            input {
              height: .4rem;
              background:$global_background;
              @include remove-input-style;
              width: 75%;

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
          margin-bottom: .2rem;
        }
      }
    }

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
        /* justify-content: space-between; */
        padding: 0;

        &-logo {
          @include flex-v-center;
          justify-content: space-between;

          i::before {
            font-size: .3rem;
            color: $light_green;
          }

          &-close, &-menu {
            display: none;
          }
        }

        &-menu {
          display: flex;
          height: .8rem;
          width: 100%;
          min-width: 2.5rem;
          /* flex-direction: row; */
          a {
            @include flex-v-h-center;
            overflow: hidden;
            height: 100%;
            /* width: .72rem; */
            /* min-width: 1rem; */
            /* width: 100%; */
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
          }
        }


      }

      &-right {
        @include flex-v-center;
        &-wrapper {
          &-searchbox {
            width: 100%;
            input {
              width: 100%;
            }
          }
          margin-bottom: 0;
          @include flex-v-center;
        }
      }

    }
  }
}
</style>
