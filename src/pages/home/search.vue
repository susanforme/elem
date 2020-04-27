<template>
  <div class="search">
    <back-navigation></back-navigation>
    <search-area :isLoading="isLoading"></search-area>
    <loading-anima
      :loadingStyle="{ color: '#0089dc' }"
      v-if="isLoading"
    ></loading-anima>
  </div>
</template>

<script>
import backNavigation from '@/components/backNavigation';
import searchArea from '@/components/search/searchArea';
import loadingAnima from '@/components/loadingAnima';

export default {
  name: 'search',
  components: {
    backNavigation,
    searchArea,
    loadingAnima,
  },
  data() {
    return {
      isLoading: false,
    };
  },
};
</script>

<style lang="less" scoped>
.search {
  padding: 0 @padding;
  background-color: white;
}
</style>
