<template>
  <div class="search">
    <back-navigation></back-navigation>
    <search-area></search-area>
  </div>
</template>

<script>
import backNavigation from '@/components/backNavigation';
import searchArea from '@/components/search/searchArea';

export default {
  name: 'search',
  components: {
    backNavigation,
    searchArea,
  },
};
</script>

<style lang="less" scoped>
.search {
  padding: 0 @padding;
  background-color: white;
}
</style>
