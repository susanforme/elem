<template>
  <nav class="nav">
    <back-navigation
      :customStyle="{
        backgroundColor: 'transparent ',
        position: 'absolute',
        color: 'white',
      }"
    ></back-navigation>
    <img :src="trueSrc" alt="" />
  </nav>
</template>

<script>
import backNavigation from '@/components/backNavigation';
export default {
  props: {
    imgSrc: {
      type: String,
      default: '',
    },
  },
  computed: {
    trueSrc() {
      if (this.imgSrc) {
        return this.detailImgSrc(this.imgSrc);
      }
      return '';
    },
  },
  components: {
    backNavigation,
  },
};
</script>

<style lang="less" scoped>
.nav {
  background-color: rgba(119, 103, 137, 0.43);
  padding: 0 @padding;
}
</style>
