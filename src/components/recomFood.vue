<template>
  <div class="food">
    <min-foodtry
      v-for="(foodtry, index) in foodtrys"
      :key="index"
      :imgData="foodtry"
    ></min-foodtry>
  </div>
</template>

<script>
import minFoodtry from './minFoodtry';
export default {
  components: {
    minFoodtry,
  },
  props: {
    foodtrys: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.food {
  padding: 0 @padding;
  background: white;
  height: 45vw;
  display: flex;
  flex-wrap: wrap;
  padding-top: 1vw;
}
</style>
