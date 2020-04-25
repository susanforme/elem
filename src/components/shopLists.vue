<template>
  <div>
    <single-shop-container
      v-for="(list, index) in lists"
      :key="index"
      v-bind="list"
    ></single-shop-container>
  </div>
</template>

<script>
import singleShopContainer from './singleShopContainer';
export default {
  components: {
    singleShopContainer,
  },
  props: {
    lists: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped></style>
