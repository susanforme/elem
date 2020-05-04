<template>
  <div class="shopping-cart">
    <!-- 顶部购物车已经加入的内容使用 transition 实现动画,初始高度为0 -->
    <div class="top"></div>
    <!-- 购物车图案 -->
    <div class="car" :class="{ 'white-car': hasCommodity }">
      <p class="child" v-if="hasCommodity">{{ shoppingCart.length }}</p>
    </div>
    <div class="total">
      <p class="total-price" v-if="hasCommodity">${{ totalPrice }}</p>
      <p class="tip" v-else>未选购商品</p>
    </div>
    <div class="price" :class="{ settle: hasCommodity }">
      <p class="settlement" v-if="hasCommodity">去结算</p>
      <p class="low" v-else>$ {{ lowestPrice }}起送</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props: {
    lowestPrice: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    ...mapState('detail', ['shoppingCart']),
    hasCommodity() {
      if (this.shoppingCart.length > 0) {
        return true;
      }
      return false;
    },
    totalPrice() {
      if (this.shoppingCart.length > 0) {
        const result = this.shoppingCart.reduce((pre, cur) => {
          return pre + cur.lowest_price;
        }, 0);
        return result;
      }
      return 0;
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
    > .child {
      position: absolute;
      right: -1vw;
      top: -1vw;
      width: 4vw;
      height: 4vw;
      text-align: center;
      font-size: 12px;
      background-color: tomato;
      border-radius: 50%;
    }
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
  > .white-car {
    background-color: #3190e8;
    background-image: none;
    &::before {
      background: url(~@/assets/img/whiteCart.svg) 50% no-repeat;
      background-size: 6vw;
    }
  }
  > .total {
    position: absolute;
    top: 2vw;
    left: 20vw;
    font-size: 14px;
    color: rgb(148, 148, 148);
    > .total-price {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
  > .price {
    position: absolute;
    top: 2vw;
    right: 8vw;
    font-size: 15px;
    font-weight: 700;
  }
  // 激活后样式
  > .settle {
    background-color: #38ca73;
    right: 0;
    top: 0;
    height: 11.5vw;
    line-height: 11.5vw;
    width: 30vw;
    text-align: center;
  }
}
</style>
