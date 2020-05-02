<template>
  <div class="business">
    <div class="delivery">
      <p class="peisong">配送信息</p>
      <p class="msg">
        由蜂鸟快送提供配送，约{{ order_lead_time }}分钟送达，距离{{
          distance_text
        }},配送费 $ {{ is_stock_empty }}元
      </p>
    </div>
    <div class="bao-business">
      <p class="title">
        商家服务
      </p>
      <p class="des">
        <span>{{ supports[0].icon_name }}</span> {{ supports[0].description }}
      </p>
    </div>
    <div class="business-img">
      <h1 class="b-img">商家实景</h1>
      <div class="img" v-for="(album, index) in albums" :key="index">
        <img :src="trueImg(album.cover_image_hash)" alt="" />
        <span>{{ album.name }}</span>
      </div>
    </div>
    <div class="msg">
      商家信息
    </div>
  </div>
</template>

<script>
export default {
  props: {
    order_lead_time: {
      type: Number,
      default: 0,
    },
    distance_text: {
      type: String,
      default: '',
    },
    albums: {
      type: Array,
      default() {
        return [];
      },
    },
    flavors: {
      type: Array,
      default() {
        return [{}];
      },
    },
    opening_hours: {
      type: Array,
      default() {
        return [];
      },
    },
    supports: {
      type: Array,
      default() {
        return [{}];
      },
    },
    is_stock_empty: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    trueImg(src) {
      return this.detailImgSrc(src);
    },
  },
};
</script>

<style lang="less" scoped>
.all-title {
  font-weight: 700;
  font-size: 15px;
  padding-bottom: 1.5 * @padding;
}
.all-content {
  font-size: 14px;
  color: @gray;
  width: 80%;
}
.all-father {
  padding: 2 * @padding;
  padding-bottom: @padding;
  background-color: white;
  margin-bottom: 1.2 * @padding;
}
.business {
  > .delivery {
    .all-father();
    > p {
      padding-bottom: 1.5 * @padding;
      font-size: 16px;
    }
    > p.msg {
      .all-content();
    }
    > .peisong {
      .all-title();
    }
  }
  > .bao-business {
    .all-father();
    > .title {
      .all-title();
    }
    > .des {
      .all-content();
      width: 100%;
      padding-bottom: 2 * @padding;
      > span {
        display: inline-block;
        border: 1px solid @gray;
        font-size: 12px;
      }
    }
  }
  > .business-img {
    .all-father();
    > .b-img {
      .all-title();
    }
    > .img {
      .all-content();
      width: 25%;
      display: inline-block;
      position: relative;
      margin-right: 2vw;
      height: 20vw;
      > img {
        width: 22vw;
        height: 20vw;
      }
      > span {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 22vw;
        height: 6vw;
        font-size: 14px;
        text-align: center;
        color: white;
        background-color: black;
        opacity: 0.4;
      }
    }
  }
}
</style>
