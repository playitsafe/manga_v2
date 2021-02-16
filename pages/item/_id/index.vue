<template>
  <div class="item">
    <div class="item-info">
      <div class="item-info-pwd">
        首页  /  <span class="item-info-pwd-title">{{ item.title }}</span>
      </div>
      <div class="item-info-main">
        <div class="item-info-main-left">
          <div class="item-info-main-left-cover">
            <img :src="item.image_url" :alt="item.title">
          </div>
          <div class="item-info-main-left-detail">
            <div class="item-info-main-left-detail-top">
              <div class="item-info-main-left-detail-top-title">{{ item.title }}</div>
              <div class="item-info-main-left-detail-top-tags">
                <div class="item-info-main-left-detail-top-tags-tag" v-for="tg in item.tags" :key="tg.id">
                  {{ tg.name }}
                </div>
              </div>
              <div class="item-info-main-left-detail-top-author">作者: <span>{{ item.author.name }}</span></div>
            </div>
            <div class="item-info-main-left-detail-bottom">
              <div class="item-info-main-left-detail-bottom-score"><span>评分:</span><span>{{ item.score }}.0</span></div>
              <div class="item-info-main-left-detail-bottom-watchCount"><span>阅读量:</span><span>{{ item.watch_count }}</span></div>
              <div class="item-info-main-left-detail-bottom-likeCount"><span>点赞数:</span><span>{{ item.like_count }}</span></div>
            </div>
          </div>
        </div>
        <div class="item-info-main-right">
          <div class="item-info-main-right-btn">
            开始阅读
          </div>
        </div>
      </div>
    </div>
    <div class="item-main">
      <div class="item-main-inner">
        <div class="item-main-inner-intro">
          <h3>作品简介</h3>
          <p>{{ item.description }}</p>
        </div>
        <div class="item-main-inner-content">
          <h3>目录 {{ item.open_episodes_count }}章</h3>
          <div class="item-main-inner-content-eps">
            <div class="item-main-inner-content-eps-ep" v-for="ep in episodes" :key="ep.id">
              {{ ep.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.item.title + ' - 漫书MangaBook'
    }
  },
  async asyncData({ $axios, params }) {
    // const { status, data } = await $axios.$get('/content/detail?id=' + params.id);
    // const item = status === 'success' ? data : {}
    // return { item }
    const [item, episodes] = await Promise.all([
      $axios.get('/content/detail?id=' + params.id).then(res => res.status === 200 && res.data.status === 'success' ? res.data.data : {}),
      $axios.get('/content/episodes?id=' + params.id).then(res => res.status === 200 && res.data.status === 'success' ? res.data.data : []),
    ]);
    return { item, episodes }
  }
  // mounted() {
  //   console.log(this.$route.params.id)
  // }
}
</script>

<style lang="scss">
@import '~/assets/css/base.scss';
@import '~/assets/css/util.scss';

.item {
  margin-top: .85rem;
  /* height: 3rem; */
  /* background: pink; */
  background: #fff;
  &-info {
    &-pwd {
      margin: 0 0 .1rem 0;
      color: #999999;

      &-title {
        color: #cccccc;
      }
    }

    &-main {
      &-left {
        display: flex;
        flex-direction: column;
        align-items: center;
        &-cover {
          height: 2.34rem;
          img {
            height: 2.34rem;
            width: 1.76rem;
          }
        }

        &-detail {
          width: 100%;
          padding: .1rem;

          &-top {
            &-title {
              font-size: .2rem;
              font-weight: 700;
              color: $light-green;
            }
            &-tags {
              margin-top: .1rem;
              display: flex;
              flex-wrap: wrap;
              &-tag {
                color: #999999;
                border: 1px solid #999999;
                border-radius: .04rem;
                padding: .05rem .1rem;
                margin-right: .06rem;
                white-space: nowrap;
              }
            }
            &-author {
              color: #999999;
              margin-top: .1rem;
              span {
                color: #000;
              }
            }
          }

          &-bottom {
            &-score {
              color: #999999;
              span:nth-child(2) {
                color: $light-green;
                font-size: 0.3rem;
                font-style: italic;
                font-weight: 700;
              }
            }

            &-watchCount, &-likeCount {
              color: #999999;
              span:nth-child(2) {
                font-size: .3rem;
                color: #000;
                font-weight: 700;
              }
            }

          }

        }
      }

      &-right {
        @include flex-v-h-center;
        &-btn {
        @include flex-v-h-center;
          margin: .1rem 0 .15rem 0;
          width: 1.6rem;
          height: .62rem;
          background: $light-green;
          color: #fff;
          padding: .16rem, .4rem, .16rem, .4rem;
          font-size: .2rem;
          font-weight: 600;
          text-align: center;
          border-radius: 1rem;
          &:hover {
            cursor: pointer;
          }
        }
      }

    }
  }

  &-main {
    background: #fafafa;
    padding: .4rem 0 1rem 0;

    &-inner {
      max-width: 10rem;
      background: #fff;
      margin: 0 auto;
      padding: .2rem;

      &-intro {
        h3 {
          font-size: .2rem;
          margin-bottom: .2rem;
        }

        p {
          color: #666666;
          line-height: .24rem;
        }
      }

      &-content {
        margin-top: .3rem;
        h3 {
          font-size: .2rem;

        }
        &-eps {
          margin-top: .3rem;
          &-ep {
            color: #666666;
            line-height: .4rem;
            border-bottom: 1px solid #eeeeee;
          }
        }
      }
    }
  }

  @include atMedium {
    &-info {
      &-pwd {
        /* margin: .9rem 0 .3rem 0; */
        padding-top: .3rem;
      }
      &-main {
        &-left {
          &-detail {
              display: flex;
              flex-direction: column;
              align-items: center;
            &-top {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          }
        }
      }
    }
  }

  @include atLarge {
    &-info {
      max-width: 10rem;
      margin: 0 auto;
      &-pwd {
        margin: 1rem 0 .1rem 0;
      }

      &-main {
        display: flex;
        justify-content: space-between;
        margin-top: .4rem;
        &-left {
          display: flex;
          flex-direction: row;
          &-detail {
            height: 100%;
            padding: 0;
            margin-left: .4rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            &-top {
              display: block;
              &-tags, &-author {
                margin-top: .2rem;
              }
            }

            &-bottom {
              display: flex;
              &-score, &-watchCount, &-likeCount {
                margin-right: .4rem;
                span:first-child::after {
                  content: "\a";
                  white-space: pre;
                }
              }
            }
          }
        }
        &-right {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
      }
    }

    &-main {
      &-inner {
        padding: .6rem;
        &-intro {
          margin-bottom: .6rem;
        }
        &-content {
          margin-top: .6rem;
          &-eps {
            margin-top: .5rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            &-ep {
              line-height: .6rem;
              width: 4.2rem;
            }
          }
        }
      }
    }
  }
}
</style>
