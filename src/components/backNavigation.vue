<template>
  <div class="back" :style="customStyle">
    <!-- 注意放入插槽 -->
    <font-awesome-icon icon="angle-left" @click="goback" />
    <p class="center"><slot name="title"></slot></p>
  </div>
</template>

<script>
export default {
  props: {
    customStyle: {
      type: Object,
      default: null,
    },
  },
  methods: {
    goback() {
      this.$router.back();
    },
  },
};
</script>

<style lang="less" scoped>
.back {
  width: 100%;
  background-color: white;
  height: 10vw;
  line-height: 10vw;
  display: flex;
  align-items: center;
  color: rgb(158, 158, 158);
  svg {
    font-size: 1.6rem;
    position: absolute;
  }
  > .center {
    text-align: center;
    width: 100%;
  }
}
</style>
