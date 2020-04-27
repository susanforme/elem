<template>
  <font-awesome-icon icon="spinner" class="anima" :style="loadingStyle" />
</template>

<script>
export default {
  props: {
    loadingStyle: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="less" scoped>
@keyframes transfo {
  0% {
    transform-origin: center;
    transform: rotate(0);
  }

  100% {
    transform-origin: center;
    transform: rotate(360deg);
  }
}
.anima {
  animation: linear infinite 0.5s transfo;
}
</style>
