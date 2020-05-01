<template>
  <div class="head">
    <img :src="imgSrc" alt="" class="img" />
    <div class="name">{{ name }}</div>
    <div class="content">
      <span class="rating">评价{{ rating }}</span>
      <span class="order">月售{{ recent_order_num }}</span>
      <span class="leadtime">蜂鸟快送约{{ order_lead_time }}分钟</span>
    </div>
    <div class="wumenkan">$7 无门槛 领取</div>
    <div class="activity0">
      <div class="man-jian" v-for="(item, index) in activi" :key="index">
        {{ item[0] }}减{{ Number(item[1].content).toFixed() }}
      </div>
    </div>
    <div class="tips">公告：欢迎光临，用餐高峰期请提前下单，谢谢。</div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    rating: {
      type: Number,
      default: 0,
    },
    recent_order_num: {
      type: Number,
      default: 0,
    },
    order_lead_time: {
      type: Number,
      default: 0,
    },
    activities: {
      type: Array,
      default: null,
    },
    img: {
      type: String,
      default: '',
    },
  },
  computed: {
    imgSrc() {
      if (this.img) {
        return this.detailImgSrc(this.img);
      }
      return '';
    },
    activi() {
      if (this.activities) {
        let attribute;
        eval(`attribute=${this.activities[0].attribute}`);
        const kv = Object.entries(attribute);
        return kv;
      }
      return [];
    },
  },
};
</script>

<style lang="less" scoped>
.head {
  background-color: white;
}
</style>
