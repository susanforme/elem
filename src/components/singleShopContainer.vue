<template>
  <div class="shop">
    <img :src="imgSrc" alt="" />
    <div class="content">
      <p class="title">{{ title }}</p>
      <div class="score">
        <span>{{ score }}</span
        ><span>{{ sales }}</span>
      </div>
      <p class="lowest-price">{{ lowestPrice }}起送 |{{ trueMsg }}</p>
      <p class="description">
        {{ description }}
      </p>
      <div class="right">
        <p class="dislike"></p>
        <p class="dsitance">{{ distance }}m|{{ wasteTime }}分钟</p>
      </div>
      <div class="bottom">
        <p>满{{ activities[0][0] }}减{{ activities[0][1] }}</p>
        <p>配送费{{ activities[1] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    score: Number,
    sales: Number,
    lowestPrice: Number,
    deliveryFee: Number,
    imgSrc: String,
    id: Number,
    distance: Number,
    wasteTime: Number,
    description: String,
    activities: Array,
  },
  computed: {
    trueMsg() {
      if (this.deliveryFee === 0) {
        return '免配送费';
      }
      return `配送$${this.deliveryFee}`;
    },
  },
};
</script>

<style lang="less" scoped>
.shop {
  padding: 4vw @padding;
  background-color: white;
  display: flex;
  height: 40vw;
  img {
    width: 23%;
    height: 50%;
    margin-right: 3%;
    border-radius: 10%;
  }
  .content {
    width: 74%;
    position: relative;
    color: rgb(148, 147, 147);
    @contentpadding: 1.5vw;
    .title {
      font-size: 0.7466666666666667rem;
      font-weight: 700;
      color: black;
    }
    .score {
      font-size: 0.64rem;
      padding: @contentpadding 0;
    }
    .lowest-price {
      font-size: 0.64rem;
      padding: @contentpadding 0;
    }
    .right {
      position: absolute;
      font-size: 0.64rem;
      right: 0;
      top: 0;
    }
    .description {
      border: 0.02666666666666667rem solid rgb(221, 221, 221);
      font-size: 0.4266666666666667rem;
      width: 2.1333333333333333rem;
      text-align: center;
      margin: @contentpadding 0;
    }
    .bottom {
      font-size: 0.64rem;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
}
</style>
