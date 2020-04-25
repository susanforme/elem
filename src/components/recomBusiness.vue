<template>
  <div class="recom">
    <div class="ad"><span> 推荐商家</span></div>
    <filter-header :isFixed="isFixed" :isShowMask="isShowMask"></filter-header>
    <div class="add-position" v-if="isFixed"></div>
  </div>
</template>

<script>
import filterHeader from './filterHead';
import { createNamespacedHelpers } from 'vuex';
const { mapState } = createNamespacedHelpers('home');

export default {
  components: {
    filterHeader,
  },
  computed: {
    ...mapState(['currentPosition', 'isShowMask']),
    isFixed() {
      const height = 107.6 * (document.documentElement.clientWidth / 100);
      if (this.currentPosition >= height) {
        return true;
      }
      return false;
    },
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
      font-size: 0.8533333333333334rem;
      position: relative;
      &::before {
        content: '──';
        position: relative;
        right: 0.5333333333333333rem;
      }
      &::after {
        content: '──';
        position: relative;
        left: 0.5333333333333333rem;
      }
    }
  }
  .add-position {
    height: 10vw;
  }
}
</style>
