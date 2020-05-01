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
        该商户已购买食品安全责任险，食品安全有保障
        <!-- 这里采用的是supports -->
      </p>
    </div>
    <div class="business-img">
      <div class="img">
        <img src="" alt="" v-for="(album, index) in albums" :key="index" />
        <span></span>
      </div>
    </div>
    <div class="msg"></div>
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
        return [];
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
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped></style>
