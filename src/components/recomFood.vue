<template>
  <div class="food">
    <min-foodtry></min-foodtry>
  </div>
</template>

<script>
import minFoodtry from './minFoodtry';
export default {
  components: {
    minFoodtry,
  },
};
</script>

<style lang="less" scoped>
.food {
  padding: 0 @padding;
  background: white;
  height: 40vw;
}
</style>
