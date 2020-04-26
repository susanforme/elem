<template>
  <div class="back">
    <!-- 注意放入插槽 -->
    <font-awesome-icon icon="angle-left" @click="goback" />
    <slot name="title"></slot>
  </div>
</template>

<script>
export default {
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
  svg {
    font-size: 30px;
    color: rgb(158, 158, 158);
  }
}
</style>
