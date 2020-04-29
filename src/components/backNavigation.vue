<template>
  <div :style="customStyle" class="back-father">
    <div class="back" :class="{ fixed: isFixed }">
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
.back-father {
  background-color: white;
  color: rgb(158, 158, 158);
  .back {
    height: 10vw;
    line-height: 10vw;
    display: flex;
    align-items: center;
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
    padding: 0 @padding;
    z-index: 10;
  }
  .position {
    width: 100%;
    height: 10vw;
    line-height: 10vw;
    display: flex;
    align-items: center;
  }
}
</style>
