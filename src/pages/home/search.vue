<template>
  <div class="search">
    <back-navigation></back-navigation>
  </div>
</template>

<script>
import backNavigation from '@/components/backNavigation';

export default {
  components: {
    backNavigation,
  },
};
</script>

<style lang="less" scoped>
.search {
  padding: 0 @padding;
  background-color: white;
}
</style>
