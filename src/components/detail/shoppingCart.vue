<template>
  <div class="shopping-cart">
    <div class="top"></div>
    <div class="car"></div>
    <div class="price">
      {{ lowestPrice }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lowestPrice: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="less" scoped>
.shopping-cart {
  position: fixed;
  background-color: rgba(61, 61, 63, 0.9);
  height: 11.5vw;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 10;
  color: white;
  display: flex;
  > .top {
    position: absolute;
  }
  > .car {
    position: absolute;
    width: 8vw;
    height: 8vw;
    border-radius: 50%;
    left: 5vw;
    bottom: 2vw;
    width: 13.333333vw;
    height: 13.333333vw;
    box-sizing: border-box;
    border-radius: 100%;
    border: 1.333333vw solid #444;
    box-shadow: 0 -0.8vw 0.533333vw 0 rgba(0, 0, 0, 0.1);
    will-change: transform;
    background-image: radial-gradient(circle, #363636 6.266667vw, #444 0);
    &::before {
      background: url(~@/assets/img/shoppingCart.svg) 50% no-repeat;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-size: 6vw;
      content: '';
    }
  }
}
</style>
