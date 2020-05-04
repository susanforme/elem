<template>
  <div class="food">
    <div class="img"><img :src="detailSrc(food.image_path)" alt="" /></div>
    <div class="content">
      <p class="title">
        {{ food.name }}
      </p>
      <p class="msg">
        月售{{ food.month_sales }}份 好评率{{ food.satisfy_rate }}%
      </p>
      <p class="bottom">$ {{ food.origin_price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    food: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    detailSrc(src) {
      return this.detailImgSrc(src);
    },
  },
};
</script>

<style lang="less" scoped>
.food {
  display: flex;
  padding: 1.2 * @padding 0;
  img {
    width: 100%;
    height: 100%;
  }
  > .img {
    flex: 1.8;
    margin-right: 3vw;
  }
  > .content {
    flex: 3;
    font-size: 12px;
    position: relative;
    > p.title {
      font-size: 15px;
      font-weight: 700;
      padding-bottom: 1vw;
    }
    > p.msg {
      color: @gray;
    }
    > p.bottom {
      position: absolute;
      bottom: 0;
      font-size: 14px;
      color: rgb(255, 83, 57);
    }
  }
}
</style>
