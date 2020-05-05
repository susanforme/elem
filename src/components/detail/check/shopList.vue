<template>
  <div class="list">
    <div class="big-box">
      <div class="title">
        {{ busineName }}
      </div>
      <div class="box" v-for="(item, index) in shoppingCart" :key="index">
        <img src="" alt="" />
        <span class="name">{{ item.name }} </span>
        <div class="right">
          <span class="one">x 1</span>
          <span class="pric">${{ item.origin_price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    busineName: {
      type: String,
    },
    shoppingCart: {
      type: Array,
    },
  },
};
</script>

<style lang="less" scoped>
.list {
  background-image: linear-gradient(
      0deg,
      #f5f5f5,
      #f5f5f5 65%,
      hsla(0, 0%, 96%, 0.3) 75%,
      hsla(0, 0%, 96%, 0)
    ),
    linear-gradient(270deg, #0085ff, #0af);
}
</style>
