<template>
  <div class="order-eat">
    <posters :posters="posters"></posters>
  </div>
</template>

<script>
import posters from './poster';
export default {
  props: {
    posters: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    posters,
  },
};
</script>

<style lang="less" scoped>
.order-eat {
  background-color: white;
}
</style>
