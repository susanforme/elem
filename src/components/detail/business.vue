<template>
  <div class="business">
    <div class="delivery">
      <p>配送信息</p>
      <p class="msg">
        由蜂鸟快送提供配送，约{{ order_lead_time }}分钟送达，距离{{
          distance_text
        }}
      </p>
    </div>
    <div class="business">
      <p>
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
  },
  methods: {
    trueImg(src) {
      return this.detailImgSrc(src);
    },
  },
};
</script>

<style lang="less" scoped></style>
