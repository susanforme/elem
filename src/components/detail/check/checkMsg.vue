<template>
  <div class="all-check">
    <div class="head">
      <p class="title">
        订单配送至
      </p>
      <p class="address">
        {{ address }}
        <font-awesome-icon icon="angle-right" />
      </p>
      <p class="msg">
        <span class="name">
          {{ name }}
        </span>
        <span class="phoneNum">
          {{ phoneNum }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    address: {
      type: String,
      default: '',
    },
    phoneNum: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="less" scoped>
.all-check {
  background-image: linear-gradient(90deg, #0af, #0085ff);
  padding: @padding;
  padding-top: 2 * @padding;
  color: white;
  font-size: 15px;
  > .head {
    > p {
      padding: 0.5 * @padding;
      color: hsla(0, 0%, 100%, 0.8);
      font-weight: 400;
    }
    > .address {
      color: white;
      font-size: 22px;
      font-weight: 700;
    }
  }
}
</style>
