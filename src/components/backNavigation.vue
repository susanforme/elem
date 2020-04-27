<template>
  <div>
    <div class="back" :style="customStyle" :class="{ fixed: isFixed }">
      <!-- 注意放入插槽 -->
      <font-awesome-icon icon="angle-left" @click="goback" />
      <p class="center"><slot name="title"></slot></p>
    </div>
    <div class="position" v-if="isFixed"></div>
  </div>
</template>

<script>
export default {
  props: {
    customStyle: {
      type: Object,
      default: null,
    },
    isFixed: {
      type: Boolean,
      default: false,
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
.fixed {
  position: fixed;
  top: 0%;
  left: 0;
  right: 0;
  background-color: white;
  padding: 0 @padding;
  z-index: 10;
}
.position {
  width: 100%;
  background-color: white;
  height: 10vw;
  line-height: 10vw;
  display: flex;
  align-items: center;
  color: rgb(158, 158, 158);
}
</style>
