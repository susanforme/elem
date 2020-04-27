<template>
  <div class="search">
    <back-navigation></back-navigation>
    <search-area
      :isInittal="isInittal"
      :startSearch="startSearch"
    ></search-area>
    <p class="anima-father" v-if="isLoading">
      <loading-anima :loadingStyle="{ color: '#0089dc' }"></loading-anima>
    </p>
    <search-lists v-if="isShow" :searchList="searchList"></search-lists>
  </div>
</template>

<script>
import backNavigation from '@/components/backNavigation';
import searchArea from '@/components/search/searchArea';
import loadingAnima from '@/components/loadingAnima';
import searchLists from '@/components/search/searchLists';

import { mapState, mapActions } from 'vuex';
import axios from '@/api';

export default {
  name: 'search',
  components: {
    backNavigation,
    searchArea,
    loadingAnima,
    searchLists,
  },
  data() {
    return {
      isLoading: false,
      isInittal: true,
    };
  },
  computed: {
    ...mapState('home/search', ['status', 'searchList']),
    isShow() {
      return !this.isLoading && !this.isInittal;
    },
  },
  methods: {
    ...mapActions('home/search', [
      'initSearchList',
      'pushSearchList',
      'changeStatus',
    ]),
    startSearch() {
      const _this = this;
      this.isLoading = true;
      this.isInittal = false;
      axios.get('/search').then((res) => {
        const data = res.data;
        _this.initSearchList(data.searchList);
        _this.changeStatus(200);
        _this.isLoading = false;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.search {
  padding: 0 @padding;
  background-color: white;
  .anima-father {
    text-align: center;
    padding: @padding 0;
    height: 100vh;
  }
}
</style>
