<template>
  <div class="recom">
    <div class="ad"><span> 推荐商家</span></div>
    <filter-header></filter-header>
  </div>
</template>

<script>
import filterHeader from './filterHead';

export default {
  components: {
    filterHeader,
  },
};
</script>

<style lang="less" scoped>
.recom {
  padding: 0 @padding;
  background-color: white;
  .ad {
    text-align: center;
    height: 10vw;
    line-height: 10vw;
    span {
      color: rgb(90, 87, 87);
      font-size: 16px;
      position: relative;
      &::before {
        content: '──';
        position: relative;
        right: 10px;
      }
      &::after {
        content: '──';
        position: relative;
        left: 10px;
      }
    }
  }
}
</style>
